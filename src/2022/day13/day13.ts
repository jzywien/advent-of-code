import { wrap } from '../../util/array';
import '../../util/polyfills';

type NumberOrArray = number | NumberOrArray[];

export const compare = (left: NumberOrArray, right: NumberOrArray): number => {
   if (Number.isInteger(left) && Number.isInteger(right)) {
      return (left as number) - (right as number);
   } else if (Array.isArray(left) && Array.isArray(right)) {
      for (let i = 0; i < Math.min(left.length, right.length); ++i) {
         const result = compare(left[i], right[i]);
         if (result !== 0) return result;
      }
      return left.length - right.length;
   } else return compare(wrap(left), wrap(right));
};

const processInput = (input: string): [NumberOrArray, NumberOrArray][] =>
   input
      .splitAndGroup<string>()
      .map(([left, right]) => [JSON.parse(left) as NumberOrArray, JSON.parse(right) as NumberOrArray]);

export const step1 = (input: string): number =>
   processInput(input)
      .map(([left, right], ndx) => (compare(left, right) < 0 ? ndx + 1 : 0))
      .sum();

const initial: NumberOrArray = [[[2]], [[6]]];
export const step2 = (input: string): number =>
   processInput(input)
      .reduce((all, [left, right]) => [...all, left, right], initial)
      .sort((left, right) => compare(left, right))
      .map((p) => JSON.stringify(p))
      .map((p, ndx) => (p === '[[2]]' || p === '[[6]]' ? ndx + 1 : 0))
      .filter((x) => x)
      .reduce((val, ndx) => val * ndx, 1);
