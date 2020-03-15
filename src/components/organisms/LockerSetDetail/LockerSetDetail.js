import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import LockerDetail from "../../molecules/LockerDetail";
import {
  formatDistance,
  formatTime,
  getWalkTimeFromDistance
} from "../../../utils/distance";

LockerSetDetail.propTypes = {
  lockerSet: PropTypes.object
};
LockerSetDetail.defaultProps = {
  lockerSet: null
};

function LockerSetDetail(props) {
  const { lockerSet } = props;

  if (!lockerSet) return <Typography>Loading...</Typography>;

  const { locationDisplay, lockers, distance } = lockerSet;

  return (
    <Container maxWidth="md" className={"root"}>
      <Box my={2}>
        <Typography variant="h4">{locationDisplay}</Typography>

        <Box my={3}>
          {lockers.map(locker => (
            <LockerDetail key={locker.lid} locker={locker} />
          ))}
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <div>
            <Typography variant="overline" gutterBottom>
              Distance
            </Typography>
            <Typography variant="h6">{formatDistance(distance)}</Typography>
          </div>
          <div>
            <Typography variant="overline" gutterBottom>
              Time
            </Typography>
            <Typography variant="h6">
              {formatTime(getWalkTimeFromDistance(distance))}
            </Typography>
          </div>
        </Box>
      </Box>
      <style jsx>{`
        .root {
          max-height: 70vh;
        }
      `}</style>
    </Container>
  );
}

export default LockerSetDetail;
