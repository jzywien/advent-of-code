import '@util/polyfills';
import { Point } from '@util/geom';
import { iterateGrid } from '@util/grid';
import { CartesianDirections, DiagonalDirections } from '@util/direction';
import { findNeighbors } from '@util/graph';

const navigate = (grid: string[][], r: number, c: number, visited: Set<string>): void => {
   const p = new Point(r, c);
   if (visited.has(p.toString())) return;

   visited.add(p.toString());

   const val = grid[r][c];
   const adjacent = findNeighbors(CartesianDirections, grid, r, c, val,
      (val, next) => val === next);

   if (adjacent.length === 0) return;

   adjacent.map(p => navigate(grid, p.x, p.y, visited));
}

const solution = (input: string, calculator: (points: Point[], neighbors: Set<string>) => number): number => {
   const grid = input.toMatrix<string>();
   let visited = new Set<string>();
   let result = 0;

   for (let [id, r, c] of iterateGrid(grid)) {
      const p = new Point(r, c);
      if (visited.has(p.toString())) continue;

      const neighbors = new Set<string>();

      navigate(grid, r, c, neighbors);
      visited = visited.union(neighbors);

      const points = [...neighbors].map(p => Point.fromString(p));
      const val = calculator(points, neighbors);
      result += val * points.length;
   }

   return result;
}

export const step1 = (input: string): number => solution(input,
      (points: Point[], neighbors: Set<string>): number =>
         CartesianDirections.reduce((sum, [dx, dy]) =>
            sum + points.map(p => !neighbors.has(new Point(p.x + dy, p.y + dx).toString()) ? 1 : 0).sum()
         , 0));

export const step2 = (input: string): number => solution(input,
      (points: Point[], neighbors: Set<string>): number => DiagonalDirections.reduce((sum, [dx, dy]) => {
            const outerCorners = points.map(p => {
               const p1 = new Point(p.x + dy, p.y);
               const p2 = new Point(p.x, p.y + dx);
               return (!neighbors.has(p1.toString()) && !neighbors.has(p2.toString())) ? 1 : 0;
            });

            const innerCorners = points.map(p => {
               const p1 = new Point(p.x + dy, p.y);
               const p2 = new Point(p.x, p.y + dx);
               const p3 = new Point(p.x + dy, p.y + dx);
               return (neighbors.has(p1.toString()) &&
                  neighbors.has(p2.toString()) &&
                  !neighbors.has(p3.toString())) ? 1 : 0;
            });

            return sum + innerCorners.sum() + outerCorners.sum();
         }, 0));
