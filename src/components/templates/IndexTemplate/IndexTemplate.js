import React from "react";
import PropTypes from "prop-types";

import GoogleMapReact from "google-map-react";

import { GOOGLE_API_KEY } from "../../../constants/envValues";
import Marker from "../../atoms/Marker";

IndexTemplate.propTypes = {
  lockerSets: PropTypes.object.isRequired
};
IndexTemplate.defaultProps = {
  lockerSets: {}
};

function IndexTemplate(props) {
  const { lockerSets } = props;

  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={{ lat: 25.047, lng: 121.522 }}
        defaultZoom={13}
        options={{
          clickableIcons: false
        }}
      >
        {Object.values(lockerSets).map(lockerSet => (
          <Marker
            key={lockerSet[0].sid}
            lat={lockerSet[0].latitude}
            lng={lockerSet[0].longitude}
            title={lockerSet[0].locationDisplay}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default IndexTemplate;
