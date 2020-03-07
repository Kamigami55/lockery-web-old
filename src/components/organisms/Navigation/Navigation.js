import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MapIcon from "@material-ui/icons/Map";
import NearMeIcon from "@material-ui/icons/NearMe";
import SettingsIcon from "@material-ui/icons/Settings";
import Fab from "@material-ui/core/Fab";

Navigation.propTypes = {};

function Navigation(props) {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        {...props}
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
