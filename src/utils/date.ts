import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export type TDateFormat =
  | "MM/DD/YYYY"
  | "DD/MM/YYYY"
  | "DD/MM"
  | "DD/MM/YYYY HH:mm:ss";

/**
 * This function formats a given date string or Date object into a specified format
 * @param {string | Date} [date] - The `date` parameter can be either a string or a Date object. It
 * represents the date that you want to format.
 * @param {DateFormatType} [format=MM/DD/YYYY]
 */
export const formatDate = (
  date: string | Date,
  format: TDateFormat = "MM/DD/YYYY",
): string => {
  if (!date || !dayjs(date).isValid()) {
    return "";
  }

  return dayjs(date).format(format);
};

/**
 * This function converts a given date string or Date object to an ISO string
 * @param {string | Date} date - The `date` parameter in the `toISOString` function can be either a
 * string or a Date object.
 */
export const toISOString = (date: string | Date) => {
  if (!date || !dayjs(date).isValid()) {
    return "";
  }

  return dayjs(date).toISOString();
};
