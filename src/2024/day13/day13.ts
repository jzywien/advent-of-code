import '@util/polyfills';
import { NUMS } from '@util/regex';

// each case is a system of two equations
// ax * a + bx * b = px
// ay * a + by * b = py
// we can solve this system using Cramer's rule where a and b are unknown
// https://en.wikipedia.org/wiki/Cramer%27s_rule
const cramers = (ax: number, ay: number, bx: number, by: number, px: number, py: number): [number, number] => {
   const det = ax * by - ay * bx;
   const detA = px * by - py * bx;
   const detB = ax * py - ay * px;
   const a = detA / det;
   const b = detB / det;
   if (a % 1 !== 0 || a % 1 !== 0) return [0, 0];
   return [a, b];
}
const solve = (input: string, offset: number = 0): number => input.splitAndGroup<string>()
   .map(group => group.map(g =>
      [...g.matchAll(NUMS)].map(m => Number(m[0])) as [number, number]
   ))
   .map(([[ax, ay], [bx, by], [px, py]]) =>
      cramers(ax, ay, bx, by, px + offset, py + offset)
   )
   .map(([a, b]) => 3 * a + b)
   .sum();

export const step1 = (input: string): number => solve(input);

export const step2 = (input: string): number => solve(input, 10000000000000);

