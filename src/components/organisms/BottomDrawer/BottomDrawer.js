import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

BottomDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
};

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  & .MuiDrawer-paper {
    background-color: #f4f4f5;
  }
`;

function BottomDrawer(props) {
  const { open, onClose, children } = props;
  return (
    <StyledSwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      disableSwipeToOpen
      BackdropProps={{ invisible: true }}
    >
      {children}
    </StyledSwipeableDrawer>
  );
}

export default BottomDrawer;
