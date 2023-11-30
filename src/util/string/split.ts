import { groupBy } from '../array/group';
import { NEWLINE } from '../regex';

export const split = (input: string, keepEmpty = false): string[] => {
   const lines = input.split(NEWLINE);
   return lines.filter((line) => keepEmpty || !!line);
};

export const splitAndGroup = <T>(input: string, converter: (item: string) => T): T[][] => {
   const lines = split(input, true);
   const groups = groupBy(lines);
   return groups.map((group) => group.map((val) => converter(val)));
};
