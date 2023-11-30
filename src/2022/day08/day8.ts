import '../../util/polyfills';
import { CartesianDirections } from '../../util/direction';

const visibleInDirection = (g: number[][], r: number, c: number, v: number, d: [number, number]): boolean => {
   const size = g.length - 1;
   if (r === 0 || c === 0 || r === size || c === size) return true;

   const [dx, dy] = d;
   const [r2, c2] = [r + dy, c + dx];
   return v <= g[r2][c2] ? false : visibleInDirection(g, r2, c2, v, d);
};

const isVisible = (grid: number[][], row: number, col: number): boolean =>
   CartesianDirections.some((dir) => visibleInDirection(grid, row, col, grid[row][col], dir));

export const step1 = (input: string): number => {
   const grid = input.toMatrix(parseInt);
   return grid
      .reduce((visible, row, r) => [...visible, row.map((_, c) => isVisible(grid, r, c))], [] as boolean[][])
      .map((row) => row.filter((v) => v).length)
      .sum();
};

const numVisibleInDirection = (
   g: number[][],
   r: number,
   c: number,
   v: number,
   d: [number, number],
   num = 0
): number => {
   const size = g.length - 1;
   if (r === 0 || c === 0 || r === size || c === size) return num;

   const [dx, dy] = d;
   const [r2, c2] = [r + dy, c + dx];
   return v <= g[r2][c2] ? num + 1 : numVisibleInDirection(g, r2, c2, v, d, num + 1);
};

const calculateScore = (grid: number[][], row: number, col: number): number =>
   CartesianDirections.map((dir) => numVisibleInDirection(grid, row, col, grid[row][col], dir)).reduce(
      (result, score) => result * score,
      1
   );

export const step2 = (input: string): number => {
   const grid = input.toMatrix(parseInt);
   return grid
      .reduce((visible, row, r) => [...visible, row.map((_, c) => calculateScore(grid, r, c))], [] as number[][])
      .map((row) => Math.max(...row))
      .max();
};
