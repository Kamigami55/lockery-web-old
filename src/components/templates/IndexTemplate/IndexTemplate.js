import React from "react";
import PropTypes from "prop-types";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import GoogleMapReact from "google-map-react";

import { GOOGLE_API_KEY } from "../../../constants/envValues";
import Marker from "../../atoms/Marker";
import { DefaultCenter, DefaultZoom } from "../../../pages/index";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

IndexTemplate.propTypes = {
  lockerSets: PropTypes.array.isRequired,
  activeLockerSet: PropTypes.object,
  onMapChildClick: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  onCloseDrawer: PropTypes.func.isRequired,
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  handleMapChange: PropTypes.func.isRequired
};
IndexTemplate.defaultProps = {
  lockerSets: [],
  activeLockerSet: null,
  onMapChildClick: () => {},
  drawerOpen: false,
  onCloseDrawer: () => {},
  center: DefaultCenter,
  zoom: DefaultZoom,
  handleMapChange: () => {}
};

function IndexTemplate(props) {
  const {
    lockerSets,
    activeLockerSet,
    onMapChildClick,
    drawerOpen,
    onCloseDrawer,
    center,
    zoom,
    handleMapChange
  } = props;

  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        center={center}
        zoom={zoom}
        onChange={handleMapChange}
        onChildClick={onMapChildClick}
        options={{
          clickableIcons: false,
          fullscreenControl: false
        }}
      >
        {lockerSets.map(lockerSet => (
          <Marker
            key={lockerSet.sid}
            lat={lockerSet.latitude}
            lng={lockerSet.longitude}
            title={lockerSet.locationDisplay}
          />
        ))}
      </GoogleMapReact>

      <SwipeableDrawer
        anchor="bottom"
        open={drawerOpen}
        onClose={onCloseDrawer}
        onOpen={() => {}}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        disableSwipeToOpen
        BackdropProps={{ invisible: true }}
      >
        <p>{activeLockerSet?.locationDisplay}</p>
        <p>{activeLockerSet?.locationDisplay}</p>
        <p>{activeLockerSet?.locationDisplay}</p>
        <p>{activeLockerSet?.locationDisplay}</p>
        <p>{activeLockerSet?.locationDisplay}</p>
        <p>{activeLockerSet?.locationDisplay}</p>
      </SwipeableDrawer>
    </div>
  );
}

export default IndexTemplate;
