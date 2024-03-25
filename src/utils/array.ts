import { isEqual } from "lodash";

/**
 * This function takes an array as input and returns a new array with only unique
 * elements.
 * @param array - The `array` parameter is an array of any type `T`.
 */
export const uniqueArray = <T = unknown>(array: Array<T>) => {
  return array.reduce((acc: Array<T>, item: T) => {
    const isAccumulatorContainsItem = acc?.some((accItem) =>
      isEqual(accItem, item),
    );

    if (!isAccumulatorContainsItem) {
      acc?.push(item);
    }

    return acc;
  }, []);
};

/**
 * This function compares two arrays for equality based on the elements they contain.
 * @param firstArray - The `firstArray` parameter is an array of unknown type elements that you want to
 * compare with another array.
 * @param secondArray - An array of unknown type that you want to compare with the firstArray.
 */
export const compareArray = (
  firstArray: Array<unknown>,
  secondArray: Array<unknown>,
) => {
  if (!firstArray || !secondArray || firstArray.length !== secondArray.length) {
    return false;
  }

  return firstArray.every((itemInFirstArray) => {
    return secondArray.some((itemInSecondArray) =>
      isEqual(itemInSecondArray, itemInFirstArray),
    );
  });
};

/**
 * This function  checks if two arrays have at least one common element.
 * @param firstArray - The `firstArray` parameter is an array of elements of type T.
 * @param secondArray - The `secondArray` parameter is an array of elements of type `T`.
 */
export const isIntersection = <T>(
  firstArray: Array<T>,
  secondArray: Array<T>,
): boolean => {
  if (
    !firstArray?.length ||
    !secondArray?.length ||
    !Array.isArray(firstArray) ||
    !Array.isArray(secondArray)
  ) {
    return false;
  }

  return firstArray.some((itemInFirstArray) => {
    return secondArray.some((itemInSecondArray) =>
      isEqual(itemInFirstArray, itemInSecondArray),
    );
  });
};
