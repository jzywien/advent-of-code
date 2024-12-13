import { Point } from '@util/geom';

export const findNeighbors = <T>(
   directions: [number, number][],
   grid: T[][],
   r: number,
   c: number,
   val: T,
   test: (val: T, next: T) => boolean
): Point[] => {
   return directions.reduce((adjList, [dx, dy]) => {
      const [dr, dc] = [r + dy, c + dx];
      const next: T = grid[dr]?.[dc];
      if (test(val, next)) adjList.push(new Point(dr, dc));
      return adjList;
   }, [] as Point[]);
}