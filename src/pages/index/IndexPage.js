import PropTypes from "prop-types";
import { GoogleSpreadsheet } from "google-spreadsheet";

import IndexTemplate from "../../components/templates/IndexTemplate";
import { GOOGLE_API_KEY } from "../../constants/envValues";

const DOC_ID = "1R_ThYd46INZKxI_pI9U0K4UYu765SeITotvcgQ-FzOQ";
const SHEET_ID = 802463590; // 台北捷運

IndexPage.propTypes = {
  lockers: PropTypes.array
};

export default function IndexPage(props) {
  const { lockers = [] } = props;
  return <IndexTemplate lockers={lockers} />;
}

IndexPage.getInitialProps = async () => {
  const doc = new GoogleSpreadsheet(DOC_ID);
  doc.useApiKey(GOOGLE_API_KEY);
  await doc.loadInfo();
  const sheet = doc.sheetsById[SHEET_ID];
  const rowsFromSheet = await sheet.getRows();
  // perform a map to prevent next.js Circular structure issue when JSON.serialize
  const lockers = rowsFromSheet.map(row => ({
    id: row.id,
    locationDisplay: row.locationDisplay,
    latitude: row.latitude,
    longitude: row.longitude
  }));

  return { lockers };
};
