import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import LockerDetail from "../../molecules/LockerDetail";

LockerSetDetail.propTypes = {
  lockerSet: PropTypes.object
};
LockerSetDetail.defaultProps = {
  lockerSet: null
};

function LockerSetDetail(props) {
  const { lockerSet } = props;

  if (!lockerSet) return <Typography>Loading...</Typography>;

  const { locationDisplay, isInRestrictArea, lockers } = lockerSet;

  return (
    <Container maxWidth="md">
      <Box my={2}>
        <Typography variant="h4">{locationDisplay}</Typography>
        <Box my={3}>
          {lockers.map(locker => (
            <LockerDetail key={locker.lid} locker={locker} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default LockerSetDetail;