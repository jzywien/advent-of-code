import { ObjectSet } from '../../util/set/object-set';
import { Point } from '../../util/geom';
import '../../util/polyfills';

const getRocks = (input: string): ObjectSet<Point> =>
   input.lines().reduce((rockSet, line) => {
      let prev: Point | undefined = undefined;
      for (let p of line.split('->')) {
         const point = Point.fromString(p);
         if (!!prev) {
            const between = point.between(prev);
            between.forEach((point) => rockSet.add(point));
         }
         prev = point;
      }
      return rockSet;
   }, new ObjectSet<Point>());

const addFloor = (rocks: ObjectSet<Point>): number => {
   const xrange = [...rocks].map((r) => r.x);
   const xLo = Math.min(...xrange) - 500;
   const xHi = Math.max(...xrange) + 500;
   const floor = 2 + Math.max(...[...rocks].map((r) => r.y));
   for (let x = xLo; x < xHi; ++x) rocks.add(new Point(x, floor));

   return floor;
};

const updateSandPosition = (sand: Point, rocks: ObjectSet<Point>): Point => {
   if (!rocks.has(new Point(sand.x, sand.y + 1))) {
      return new Point(sand.x, sand.y + 1);
   } else if (!rocks.has(new Point(sand.x - 1, sand.y + 1))) {
      return new Point(sand.x - 1, sand.y + 1);
   } else if (!rocks.has(new Point(sand.x + 1, sand.y + 1))) {
      return new Point(sand.x + 1, sand.y + 1);
   } else return sand;
};

export const step1 = (input: string) => {
   const rocks = getRocks(input);
   const floor = addFloor(rocks);

   let t = -1;
   let found = false;
   while (!found) {
      ++t;
      let sand: Point = new Point(500, 0);
      while (!found) {
         if (sand.y + 1 >= floor) found = true;

         const newSand = updateSandPosition(sand, rocks);
         if (sand.equals(newSand)) break;
         else sand = newSand;
      }
      rocks.add(sand);
   }

   return t;
};

export const step2 = (input: string) => {
   const rocks = getRocks(input);
   addFloor(rocks);

   let t = -1;
   let found = false;
   while (!found) {
      ++t;
      let sand = new Point(500, 0);
      while (true) {
         const newSand = updateSandPosition(sand, rocks);
         if (sand.equals(newSand)) break;
         else sand = newSand;
      }
      found = sand.equals(new Point(500, 0));
      rocks.add(sand);
   }

   return t + 1;
};
