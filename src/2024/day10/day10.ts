import '@util/polyfills';
import { iterateGrid } from '@util/grid';
import { CartesianDirections, Directions } from '@util/direction';
import { Point } from '@util/geom';

const navigate = (grid: number[][], r: number, c: number, found: string[]): void => {
   const val = grid[r][c];
   if (val === 9) found.push(`${r},${c}`);

   const adjacent = CartesianDirections.reduce((adjList, [dx, dy]) => {
      const [dr, dc] = [r + dy, c + dx];
      const next = grid[dr]?.[dc] ?? -1;
      if (next === val + 1) adjList.push(new Point(dr, dc));
      return adjList;
   }, [] as Point[]);

   if (adjacent.length === 0) return;
   adjacent.map(p => navigate(grid, p.x, p.y, found));
}


export const step1 = (input: string): number => {
   const grid = input.toMatrix<number>(Number);

   let total = 0;

   for(let [val, r, c] of iterateGrid(grid)) {
      if (val !== 0) continue;

      const found: string[] = [];
      navigate(grid, r, c, found);
      total += new Set(found).size;
   }

   return total;
};

export const step2 = (input: string): number => 0;