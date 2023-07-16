/** Receives a unix timestamp e.g. 1689504297 and should return a javascript data object */
export function convertUnixTimestamp(unixTimestamp: number): Date {
  // Multiply by 1000 to convert from seconds to milliseconds
  var timestampInMilliseconds = unixTimestamp * 1000;

  // Create a new Date object using the timestamp in milliseconds
  var date = new Date(timestampInMilliseconds);

  return date;
}

export const WeekDayMap: {[key: number]: string} = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
