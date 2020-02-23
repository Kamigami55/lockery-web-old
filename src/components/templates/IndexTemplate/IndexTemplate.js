import React from "react";
import GoogleMapReact from "google-map-react";

import Layout from "../layouts/Layout";
import { GOOGLE_MAP_API_KEY } from "../../../constants/envValues";

function IndexTemplate(props) {
  return (
    <Layout>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      />
    </Layout>
  );
}

export default IndexTemplate;
