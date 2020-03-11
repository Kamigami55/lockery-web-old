import React from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";

import IndexTemplate from "../components/templates/IndexTemplate";
import { GOOGLE_API_KEY } from "../constants/envValues";
import { useIsMounted } from "../hooks/useIsMounted";
import useUserLocation from "../hooks/useUserLocation";
import { DefaultCenter, DefaultZoom } from "../constants/mapConstants";

const DOC_ID = "1R_ThYd46INZKxI_pI9U0K4UYu765SeITotvcgQ-FzOQ";
const SHEET_ID = 1551451358; // ALL

export default function index() {
  const [lockerSets, setLockerSets] = React.useState([]);
  const isMounted = useIsMounted();
  const [activeLockerSet, setActiveLockerSet] = React.useState(null);
  const { userLocation } = useUserLocation();
  const [center, setCenter] = React.useState(DefaultCenter);
  const [zoom, setZoom] = React.useState(DefaultZoom);

  const handleMapChildClick = key => {
    const activeLockerSet = lockerSets.find(lockerSet => lockerSet.sid === key);
    setActiveLockerSet(activeLockerSet);
    setCenter({
      lat: activeLockerSet.latitude,
      lng: activeLockerSet.longitude
    });
  };
  const handleCloseDrawer = () => {
    setActiveLockerSet(null);
  };
  const handleMapChange = ({ center, zoom }) => {
    setCenter(center);
    setZoom(zoom);
  };

  React.useEffect(() => {
    if (userLocation) {
      setCenter(userLocation);
    }
  }, [userLocation]);

  // Fetch lockers data when page mount
  React.useEffect(() => {
    async function fetchLockers() {
      const doc = new GoogleSpreadsheet(DOC_ID);
      doc.useApiKey(GOOGLE_API_KEY);
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      const rowsFromSheet = await sheet.getRows();

      // perform a map to prevent next.js Circular structure issue when JSON.serialize
      const lockers = rowsFromSheet.map(row => ({
        // common attributes of locker set
        sid: row.sid,
        type: row.type,
        locationDisplay: row.locationDisplay,
        latitude: parseFloat(row.latitude),
        longitude: parseFloat(row.longitude),
        isInRestrictArea: row.isInRestrictArea,
        // attributes of each locker
        lid: row.lid,
        paymentMethod: row.paymentMethod,
        price: row.price,
        sizeInDimension: row.sizeInDimension,
        numSlot: parseInt(row.numSlot),
        numSlotAvailable: parseInt(row.numSlotAvailable)
      }));

      const lockerSets = [];
      let currentSID = -1;
      lockers.forEach(locker => {
        if (locker.sid !== currentSID) {
          currentSID = locker.sid;
          const newLockerSet = {
            sid: locker.sid,
            type: locker.type,
            locationDisplay: locker.locationDisplay,
            latitude: locker.latitude,
            longitude: locker.longitude,
            isInRestrictArea: locker.isInRestrictArea,
            lockers: []
          };
          lockerSets.push(newLockerSet);
        }
        lockerSets[lockerSets.length - 1].lockers.push({
          lid: locker.lid,
          paymentMethod: locker.paymentMethod,
          price: locker.price,
          sizeInDimension: locker.sizeInDimension,
          numSlot: locker.numSlot,
          numSlotAvailable: locker.numSlotAvailable
        });
      });

      if (isMounted) {
        setLockerSets(lockerSets);
      }
    }
    fetchLockers();
  }, []);

  return (
    <IndexTemplate
      lockerSets={lockerSets}
      activeLockerSet={activeLockerSet}
      onMapChildClick={handleMapChildClick}
      drawerOpen={activeLockerSet !== null}
      onCloseDrawer={handleCloseDrawer}
      center={center}
      zoom={zoom}
      onMapChange={handleMapChange}
    />
  );
}
