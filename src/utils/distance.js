/**
 * Converts degrees to radians.
 *
 * @param degrees Number of degrees.
 */
import { formatDecimal } from "./decimal/formatNumber";

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * Returns the distance between 2 points of coordinates in Google Maps
 *
 * @see https://stackoverflow.com/a/1502821/4241030
 * @param p1 Point1 {lat, lng}
 * @param p2 Point2 {lat, lng}
 */
export function getDistanceBetweenPoints(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }
  // The radius of the planet earth in meters
  const R = 6378137;
  const dLat = degreesToRadians(p2.lat - p1.lat);
  const dLong = degreesToRadians(p2.lng - p1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(p1.lat)) *
      Math.cos(degreesToRadians(p1.lat)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Returns a string to represent distance
 *
 * @param meter Length in meters
 */
export function formatDistance(meter) {
  if (meter >= 1000.0) {
    return `${formatDecimal(meter / 1000.0, 1, false)}km`;
  } else {
    return `${formatDecimal(meter, 0, false)}m`;
  }
}
