import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MapIcon from "@material-ui/icons/Map";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";

Navigation.propTypes = {};

function Navigation(props) {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      {...props}
    >
      <BottomNavigationAction label="Map" icon={<MapIcon />} />
      <BottomNavigationAction label="Find nearest" icon={<SearchIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}

export default Navigation;
