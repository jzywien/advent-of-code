import { CartesianDirections } from '../../util/direction';
import { Point } from '../../util/geom';
import { ObjectSet } from '../../util/set/object-set';
import '../../util/polyfills';

const findAdjacent = (grid: string[][], point: Point, notAdjTest: (num: number) => boolean): Point[] => {
   const [r, c] = [point.x, point.y];
   return CartesianDirections.map(([dx, dy]) => [r + dx, c + dy]).reduce((adj, [nr, nc]) => {
      if (nr < 0 || nc < 0 || nr >= grid.length || nc >= grid[r].length) return adj;
      const diff = grid[nr][nc].charCodeAt(0) - grid[r][c].charCodeAt(0);
      if (notAdjTest(diff)) return adj;
      return [...adj, new Point(nr, nc)];
   }, [] as Point[]);
};

const buildGrid = (input: string, start: string, end?: string): [string[][], Point, Point | undefined] => {
   let s: Point = new Point(0, 0);
   let e: Point | undefined;

   const grid = input.lines().reduce((grid: string[][], line, row) => {
      const chars = line.split('');
      const charCodes = chars.map((char, col) => {
         if (char === start) s = new Point(row, col);
         else if (char === end) e = new Point(row, col);
         if (char === 'S') return 'a';
         else if (char === 'E') return 'z';
         return char;
      });
      return [...grid, charCodes];
   }, []);

   return [grid, s, e];
};

export const step1 = (input: string): number => {
   const [grid, start, e] = buildGrid(input, 'S', 'E');
   const end = e ?? new Point(0, 0);

   const visited = new ObjectSet<Point>([start]);
   const queue: [number, Point][] = [[0, start]];
   const notAdjTest = (num: number) => num > 1;
   while (queue.length) {
      const [dist, point] = queue.shift()!;
      for (let adj of findAdjacent(grid, point, notAdjTest)) {
         if (adj.equals(end)) return dist + 1;
         if (visited.has(adj)) continue;
         visited.add(adj);
         queue.push([dist + 1, adj]);
      }
   }
   return -1;
};

export const step2 = (input: string): number => {
   const [grid, start] = buildGrid(input, 'E');

   const visited = new ObjectSet<Point>([start]);
   const queue: [number, Point][] = [[0, start]];
   const notAdjTest = (num: number) => num < -1;
   while (queue.length) {
      const [dist, point] = queue.shift()!;
      for (let adj of findAdjacent(grid, point, notAdjTest)) {
         if (grid[adj.x][adj.y] === 'a') return dist + 1;
         if (visited.has(adj)) continue;
         visited.add(adj);
         queue.push([dist + 1, adj]);
      }
   }
   return -1;
};
