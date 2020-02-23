import React from "react";

import Navigation from "../../../organisms/Navigation";

const Layout = props => (
  <div id="root">
    <main id="page-content">{props.children}</main>
    <Navigation id="bottom-navigation" />
  </div>
);

export default Layout;
