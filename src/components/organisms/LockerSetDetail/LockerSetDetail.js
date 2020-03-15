import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import NearMeIcon from "@material-ui/icons/NearMe";

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

const StyledIconButton = styled(IconButton)`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
`;

function LockerSetDetail(props) {
  const { lockerSet } = props;

  if (!lockerSet) return <Typography>Loading...</Typography>;

  const { locationDisplay, lockers, distance, latitude, longitude } = lockerSet;

  return (
    <Container maxWidth="md" className={"root"}>
      <Box m={2}>
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
          <div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <StyledIconButton
                variant="contained"
                aria-label="Navigate"
                color="primary"
              >
                <NearMeIcon />
              </StyledIconButton>
            </a>
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
