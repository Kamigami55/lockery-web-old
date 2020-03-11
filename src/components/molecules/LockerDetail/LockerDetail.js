import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

LockerDetail.propTypes = {
  locker: PropTypes.object
};
LockerDetail.defaultProps = {
  locker: null
};

function LockerDetail({ locker }) {
  if (!locker) return null;

  const {
    // paymentMethod,
    price,
    sizeInDimension,
    numSlot,
    numSlotAvailable
  } = locker;

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="overline" gutterBottom>
          Size
        </Typography>
        <Typography variant="h6">{sizeInDimension}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="overline" gutterBottom>
          Left
        </Typography>
        <Typography variant="h6">
          {numSlotAvailable}/{numSlot}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="overline" gutterBottom>
          Price
        </Typography>
        <Typography variant="h6">{price}</Typography>
      </Grid>
    </Grid>
  );
}

export default LockerDetail;
