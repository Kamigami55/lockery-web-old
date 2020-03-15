import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import LockerDetail from "../LockerDetail";

LockerSetListCard.propTypes = {
  lockerSet: PropTypes.object
};
LockerSetListCard.defaultProps = {
  lockerSet: null
};

const StyledCard = styled(Card)`
  border-radius: 0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

function LockerSetListCard({ lockerSet }) {
  if (!lockerSet) return <Typography>Loading...</Typography>;

  const { locationDisplay, lockers } = lockerSet;

  return (
    <StyledCard>
      <CardContent>
        <Box m={1}>
          <Typography variant="h6">{locationDisplay}</Typography>
          <LockerDetail locker={lockers[0]} />
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default LockerSetListCard;
