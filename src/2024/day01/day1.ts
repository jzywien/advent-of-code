import '@util/polyfills';
import { NEWLINE } from '@util/regex';

const getColumn = (matrix: number[][], col: number): number[] => matrix.map((row) => row[col]);

export const step1 = (input: string): number => {
   const lists = input.toMatrix((val: string) => parseInt(val), NEWLINE, '   ');
   const list1 = getColumn(lists, 0).sort();
   const list2 = getColumn(lists, 1).sort();
   return list1
      .map((val, ndx) => Math.abs(val - list2[ndx]))
      .sum();
}

export const step2 = (input: string): number => {
   const lists = input.toMatrix((val: string) => parseInt(val), NEWLINE, '   ');
   const list1 = getColumn(lists, 0).sort();
   const freqMap = getColumn(lists, 1)
      .reduce((acc, val) => acc.set(val, (acc.get(val) ?? 0) + 1), new Map<number, number>());

   return list1
      .map(val => val * (freqMap.get(val) ?? 0))
      .sum();
}