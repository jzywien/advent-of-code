import '@util/polyfills';
import {mult,  add} from '@util/math'

type Operation = (a: number, b: number) => number;

const orOp = (a: number, b: number): number => {
   return Number(`${a}${b}`);
}

const solve = (total: number, nums: number[], ops: Operation[]): boolean => {
   if (nums.length === 1)
      return total === nums[0];

   const [a, b, ...rest] = nums;
   return ops.some(op => solve(total, [op(a, b), ...rest], ops));
};

const solution = (input: string, ops: Operation[]): number => input.lines()
   .map(line => line.split(': '))
   .map(([total, values]): [number, number[]] =>
      [Number(total), values.split(' ').map(v => Number(v))]
   )
   .map(([total, values]) => solve(total, values, ops) ? total : 0)
   .sum();


export const step1 = (input: string): number => solution(input, [add, mult]);

export const step2 = (input: string): number => solution(input, [add, mult, orOp]);
