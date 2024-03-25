/**
 * This function attempts to parse a JSON string and logs any errors that occur.
 * @param {string} json
 */
export const safelyParseJSON = (json: string) => {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.error({ err });
  }
};

/**
 * This function in TypeScript returns a Promise that resolves after a specified number of
 * milliseconds.
 * @param {number} ms - The `ms` parameter in the `sleep` function represents the number of
 * milliseconds for which the function will pause execution before resolving the promise.
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
