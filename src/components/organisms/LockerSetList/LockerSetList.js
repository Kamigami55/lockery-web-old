import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";

import LockerSetListCard from "../../molecules/LockerSetListCard";

LockerSetList.propTypes = {
  lockerSets: PropTypes.array.isRequired,
  onSelectLockerSet: PropTypes.func.isRequired
};
LockerSetList.defaultProps = {
  lockerSets: [],
  onSelectLockerSet: () => {}
};

function LockerSetList(props) {
  const { lockerSets, onSelectLockerSet } = props;

  return (
    <div className={"root"}>
      {lockerSets.map(lockerSet => (
        <Box key={lockerSet.sid} m={2}>
          {/* TODO 優化onclick效能 */}
          <LockerSetListCard
            lockerSet={lockerSet}
            onClick={() => onSelectLockerSet(lockerSet)}
          />
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
