import '@util/polyfills';
import { Point } from '@util/geom';
import { gridOfSize, iterateGrid } from '@util/grid';
import { times } from '@util/array';

const parseInput = (input: string): [Point, Point][] => input.lines()
   .map(line => line.split(' ')
      .map(p => p.split('=')[1])
      .map(p => Point.fromString(p))) as [Point, Point][];


const move = (p: Point, v: Point, dim: [number, number]): void => {
   const [h, w] = dim;
   p.add(v);
   if (p.x >= w) p.x -= w;
   if (p.y >= h) p.y -= h;
   if (p.x < 0) p.x += w;
   if (p.y < 0) p.y += h;
}

const getQuadrant = (dim: [number, number], mid: [number, number], x: number, y: number): number | undefined => {
   if (x === mid[0] && y === mid[1]) return undefined;
   if (x < mid[0] && y < mid[1]) return 0;
   if (x < mid[0] && y > mid[1]) return 1;
   if (x > mid[0] && y < mid[1]) return 2;
   if (x > mid[0] && y > mid[1]) return 3;
   return undefined;
}

export const step1 = (input: string, w: number, h: number): number => {
   const pv = parseInput(input);
   const dim: [number, number] = [h, w];

   times(100, () => pv.forEach(([p, v]) => move(p, v, dim)));

   const grid = gridOfSize<number>(dim, 0);
   pv.map(([p, v]) => p)
      .forEach(p => grid[p.y][p.x] += 1);

   const mid: [number, number] = [Math.floor(h / 2), Math.floor(w / 2)];
   const totals = [0, 0, 0, 0];

   for(let [val, x, y] of iterateGrid(grid)) {
      if (val === 0) continue;
      const q = getQuadrant(dim, mid, x, y);
      if (q === undefined) continue;
      totals[q] += val;
   }

   return totals.product();
};

const logPoints = (points: Point[], dim: [number, number]): void => {
   const grid = gridOfSize<number>(dim, 0);
   points.map((p) => p).forEach(p => grid[p.y][p.x] += 1);
   const gridStr = grid.map(r => r.map(c => c === 0 ? '.' : c).join('')).join('\n');
   console.log(gridStr);
}

const occurrences = (vals: number[]) : Map<number, number> => vals.reduce((map, val) => {
      const curr = map.get(val) ?? 0;
      map.set(val, curr + 1);
      return map;
   }, new Map<number, number>());

export const step2 = (input: string, w: number, h: number): number => {
   const pv = parseInput(input);
   const dim: [number, number] = [h, w];
   const threshold = 20;

   for(let steps = 1; ; steps++) {
      pv.forEach(([p, v]) => move(p, v, dim));
      const xs = occurrences(pv.map(([p]) => p.x));
      const ys = occurrences(pv.map(([p]) => p.y));

      const xAligned = Math.max(...xs.values());
      const yAligned = Math.max(...ys.values());

      if (xAligned > threshold && yAligned > threshold) {
         logPoints(pv.map(([p]) => p), dim);
         return steps;
      }
   }
};

