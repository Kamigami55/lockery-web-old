import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { formatDistance } from "../../../utils/distance";

LockerSetListCard.propTypes = {
  lockerSet: PropTypes.object
};
LockerSetListCard.defaultProps = {
  lockerSet: null
};

const StyledCard = styled(Card)`
  border-radius: 0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const StyledImg = styled.img`
  height: 48px;
`;

function LockerSetListCard({ lockerSet, ...other }) {
  if (!lockerSet) return <Typography>Loading...</Typography>;

  const { locationDisplay, lockers, distance } = lockerSet;

  const { price, sizeInDimension, numSlot, numSlotAvailable } = lockers[0];

  return (
    <StyledCard {...other}>
      <CardContent>
        <Box m={1}>
          <Typography variant="h6">{locationDisplay}</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledImg src="/img/logo.svg" alt="locker" />
            <div>
              <Typography variant="overline" gutterBottom>
                Size
              </Typography>
              <Typography variant="h6">{sizeInDimension}</Typography>
            </div>
            <div>
              <Typography variant="overline" gutterBottom>
                Left
              </Typography>
              <Typography variant="h6">
                {numSlotAvailable}/{numSlot}
              </Typography>
            </div>
            <div>
              <Typography variant="overline" gutterBottom>
                Price
              </Typography>
              <Typography variant="h6">{price}</Typography>
            </div>
            <div>
              <Typography variant="overline" gutterBottom>
                Distance
              </Typography>
              <Typography variant="h6">{formatDistance(distance)}</Typography>
            </div>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default LockerSetListCard;
