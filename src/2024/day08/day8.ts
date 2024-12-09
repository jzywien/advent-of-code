import '../../util/polyfills';
import { Point } from '@util/geom';
import { iterateGrid } from '@util/grid';

const buildAntennaMap = (grid: string[][]): Map<string, Point[]> => {
   const antennaMap = new Map<string, Point[]>();
   for (let [antenna, r, c] of iterateGrid(grid)) {
      if (antenna === '.') continue;
      if (!antennaMap.get(antenna)) antennaMap.set(antenna, []);
      antennaMap.get(antenna)!.push(new Point(r,c));
   }

   return antennaMap;
}

const insideGrid = (p: Point, grid: string[][]): boolean => p.x >= 0 && p.x < grid.length && p.y >= 0 && p.y < grid[0].length;

const uniquePointsInsideGrid = (points: Point[], grid: string[][]): Set<string> => points
   .filter((p) => insideGrid(p, grid))
   .reduce((s, p) => s.add(p.toString()), new Set<string>());

export const step1 = (input: string): number => {
   const grid = input.toMatrix<string>();
   const antennaMap = buildAntennaMap(grid);
   const antinodes: Point[] = [];

   for(let positions of antennaMap.values()) {
      for(let i = 0; i < positions.length; i++) {
         for(let j = i + 1; j < positions.length; j++) {
            const [p1, p2] = [positions[i], positions[j]];
            const [dx, dy] = [p2.x - p1.x, p2.y - p1.y];
            antinodes.push(new Point(p1.x - dx, p1.y - dy), new Point(p2.x + dx, p2.y + dy));
         }
      }
   }

   return uniquePointsInsideGrid(antinodes, grid).size;
};


export const step2 = (input: string): number => {
   const grid = input.toMatrix<string>();
   const antennaMap = buildAntennaMap(grid);
   const antinodes: Point[] = [];

   for(let [antenna, positions] of antennaMap) {
      for(let i = 0; i < positions.length; i++) {
         for(let j = i + 1; j < positions.length; j++) {
            const [p1, p2] = [positions[i], positions[j]];
            if (antennaMap.get(antenna)?.length ?? 0 > 1)
               antinodes.push(p1, p2);

            let multiplier = 1;
            while(true) {
               const [dx, dy] = [(p2.x - p1.x) * multiplier, (p2.y - p1.y) * multiplier];
               const p3 = new Point(p1.x - dx, p1.y - dy);
               const p4 = new Point(p2.x + dx, p2.y + dy);
               antinodes.push(p3, p4);
               if (!insideGrid(p3, grid) && !insideGrid(p4, grid)) break;
               multiplier++;
            }
         }
      }
   }

   return uniquePointsInsideGrid(antinodes, grid).size;
};