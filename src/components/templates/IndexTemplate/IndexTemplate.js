import React from "react";
import PropTypes from "prop-types";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import GoogleMapReact from "google-map-react";

import { GOOGLE_API_KEY } from "../../../constants/envValues";
import Marker from "../../atoms/Marker";
import { DefaultCenter, DefaultZoom } from "../../../constants/mapConstants";
import LockerSetDetail from "../../organisms/LockerSetDetail";
import { MainDrawerState } from "../../../contexts/mainButtonContext";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

IndexTemplate.propTypes = {
  lockerSets: PropTypes.array.isRequired,
  activeLockerSet: PropTypes.object,
  onMapChildClick: PropTypes.func.isRequired,
  drawerState: PropTypes.string.isRequired,
  onCloseDrawer: PropTypes.func.isRequired,
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  handleMapChange: PropTypes.func.isRequired
};
IndexTemplate.defaultProps = {
  lockerSets: [],
  activeLockerSet: null,
  onMapChildClick: () => {},
  drawerState: MainDrawerState.inactive,
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
    drawerState,
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

      {/* Drawer */}
      <SwipeableDrawer
        anchor="bottom"
        open={drawerState !== MainDrawerState.inactive}
        onClose={onCloseDrawer}
        onOpen={() => {}}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        disableSwipeToOpen
        BackdropProps={{ invisible: true }}
      >
        {drawerState === MainDrawerState.showList ? (
          <p>List drawer</p>
        ) : (
          <LockerSetDetail lockerSet={activeLockerSet} />
        )}
      </SwipeableDrawer>
    </div>
  );
}

export default IndexTemplate;
