import '@util/polyfills';
import { iterateGrid } from '@util/grid';
import { CartesianDirections } from '@util/direction';
import { findNeighbors } from '@util/graph';

const navigate = (grid: number[][], r: number, c: number, found: string[]): void => {
   const val = grid[r][c];
   if (val === 9) found.push(`${r},${c}`);

   const adjacent = findNeighbors(CartesianDirections, grid, r, c, val,
      (val, next) => next === val + 1);

   if (adjacent.length === 0) return;

   adjacent.map(p => navigate(grid, p.x, p.y, found));
}

const solution = (input: string, counter: (found: string[]) => number): number => {
   const grid = input.toMatrix<number>(Number);
   let total = 0;

   for(let [val, r, c] of iterateGrid(grid)) {
      if (val !== 0) continue;

      const found: string[] = [];
      navigate(grid, r, c, found);
      total += counter(found);
   }

   return total;
}

export const step1 = (input: string): number =>
   solution(input, found => new Set(found).size);

export const step2 = (input: string): number =>
   solution(input, found => found.length);
