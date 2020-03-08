import React from "react";
import PropTypes from "prop-types";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MapIcon from "@material-ui/icons/Map";
import NearMeIcon from "@material-ui/icons/NearMe";
import SettingsIcon from "@material-ui/icons/Settings";
import Fab from "@material-ui/core/Fab";

Navigation.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired
};
Navigation.defaultProps = {
  activeTab: 0,
  onChangeActiveTab: () => {}
};

function Navigation(props) {
  const { activeTab, onChangeActiveTab, ...other } = props;

  return (
    <div>
      <BottomNavigation
        value={activeTab}
        onChange={(event, newValue) => {
          onChangeActiveTab(newValue);
        }}
        showLabels
        {...other}
      >
        <BottomNavigationAction label="Map" icon={<MapIcon />} />
        <Fab className="fab" color="primary" size="large" aria-label="Nearby">
          <NearMeIcon color="inherit" />
        </Fab>
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>

      <style jsx>{`
        div :global(.fab) {
          position: relative;
          top: -60%;
          border: 6px solid white;
          box-sizing: content-box;
          box-shadow: none;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default Navigation;
