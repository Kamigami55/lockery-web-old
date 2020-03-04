import React from "react";
import PropTypes from "prop-types";

import GoogleMapReact from "google-map-react";

import { GOOGLE_API_KEY } from "../../../constants/envValues";
import Marker from "../../atoms/Marker";

IndexTemplate.propTypes = {
  lockers: PropTypes.array
};

function IndexTemplate(props) {
  const { lockers = [] } = props;

  return (
    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={{ lat: 25.047, lng: 121.522 }}
        defaultZoom={13}
      >
        {lockers.map(locker => (
          <Marker
            key={locker.id}
            lat={locker.latitude}
            lng={locker.longitude}
            title={locker.locationDisplay}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default IndexTemplate;
