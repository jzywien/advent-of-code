import { NEWLINE } from '../regex';

/**
 * Splits a string into a matrix along row and item separators. By default it
 * splits along new lines and every character
 *
 * @param s to be split apart
 * @param rowSeparator to split the rows apart with
 * @param itemSeparator to split the items apart with
 */
export const stringToMatrix = <T>(
   s: string,
   converter: (val: string) => T = (val) => val as T,
   rowSeparator: RegExp | string = NEWLINE,
   itemSeparator: RegExp | string = ''
): T[][] =>
   s
      .trim()
      .split(rowSeparator)
      .map((line) => line.split(itemSeparator).map((val) => converter(val)));
