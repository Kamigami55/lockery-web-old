import PropTypes from "prop-types";
import { GoogleSpreadsheet } from "google-spreadsheet";
import _ from "lodash";

import IndexTemplate from "../../components/templates/IndexTemplate";
import { GOOGLE_API_KEY } from "../../constants/envValues";

const DOC_ID = "1R_ThYd46INZKxI_pI9U0K4UYu765SeITotvcgQ-FzOQ";
const SHEET_ID = 802463590; // 台北捷運

IndexPage.propTypes = {
  lockerSets: PropTypes.object
};

export default function IndexPage(props) {
  const { lockerSets = {} } = props;
  return <IndexTemplate lockerSets={lockerSets} />;
}

IndexPage.getInitialProps = async () => {
  const doc = new GoogleSpreadsheet(DOC_ID);
  doc.useApiKey(GOOGLE_API_KEY);
  await doc.loadInfo();
  const sheet = doc.sheetsById[SHEET_ID];
  const rowsFromSheet = await sheet.getRows();

  // perform a map to prevent next.js Circular structure issue when JSON.serialize
  const lockers = rowsFromSheet.map(row => ({
    sid: row.sid,
    locationDisplay: row.locationDisplay,
    latitude: row.latitude,
    longitude: row.longitude
  }));

  // group by sid https://stackoverflow.com/a/40775082/6728679
  const lockerSets = _.mapValues(_.groupBy(lockers, "sid"));

  return { lockerSets };
};
