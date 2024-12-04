import { NEWLINE } from '../regex';
import { splitAndGroup, split } from './split';
import { stringToMatrix } from './to-matrix';

declare global {
   interface String {
      splitAndGroup<T>(converter?: (item: string) => T): T[][];
      lines(keepEmpty?: boolean): string[];
      toMatrix<T>(
         converter?: (val: string) => T,
         rowSeparator?: RegExp | string,
         itemSeparator?: RegExp | string
      ): T[][];
   }
}

String.prototype.splitAndGroup = function <T>(converter: (item: string) => T = (item) => item as T): T[][] {
   return splitAndGroup(this as string, converter);
};

String.prototype.lines = function (keepEmpty = false): string[] {
   return split(this as string, keepEmpty);
};

String.prototype.toMatrix = function <T>(
   converter: (val: string) => T = (val) => val as T,
   rowSeparator: RegExp | string = NEWLINE,
   itemSeparator: RegExp | string = ''
): T[][] {
   return stringToMatrix(this as string, converter, rowSeparator, itemSeparator);
};
