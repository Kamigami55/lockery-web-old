import React from "react";

import Navigation from "../../../organisms/Navigation";

Layout.propTypes = Navigation.propTypes;
Layout.defaultProps = Navigation.defaultProps;

function Layout(props) {
  const { activeTab, onChangeActiveTab } = props;
  return (
    <div id="root">
      <main id="page-content">{props.children}</main>
      <Navigation
        id="bottom-navigation"
        activeTab={activeTab}
        onChangeActiveTab={onChangeActiveTab}
      />
    </div>
  );
}

export default Layout;
