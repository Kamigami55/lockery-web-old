import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";

import LockerSetListCard from "../../molecules/LockerSetListCard";

LockerSetList.propTypes = {
  lockerSets: PropTypes.array.isRequired
};
LockerSetList.defaultProps = {
  lockerSets: []
};

function LockerSetList({ lockerSets }) {
  return (
    <div className={"root"}>
      {lockerSets.map(lockerSet => (
        <Box key={lockerSet.sid} m={2}>
          <LockerSetListCard lockerSet={lockerSet} />
        </Box>
      ))}
      <style jsx>{`
        .root {
          max-height: 70vh;
        }
      `}</style>
    </div>
  );
}

export default LockerSetList;
