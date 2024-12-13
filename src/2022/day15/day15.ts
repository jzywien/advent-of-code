import { Point } from '../../util/geom';
import { NUM } from '../../util/regex';
import { ObjectSet } from '../../util/set/object-set';
import { Circle } from '../../util/geom/circle';
import { DiagonalDirections } from '../../util/direction';
import '../../util/polyfills';

const getBeaconsAndSensors = (input: string): [ObjectSet<Circle>, ObjectSet<Point>] =>
   input.lines().reduce(
      ([sensors, beacons], line) => {
         const [sensor, beacon] = line
            .split(':')
            .map((s: string) => s.match(NUM))
            .map((p) => Point.fromArray(p!));
         const radius = Point.manhattan(sensor, beacon);
         return [sensors.add(new Circle(sensor, radius)), beacons.add(beacon)];
      },
      [new ObjectSet<Circle>(), new ObjectSet<Point>()]
   );

const valid = (p: Point, sensors: ObjectSet<Circle>): boolean => ![...sensors].some((s) => s.isInsideManhattan(p));

export const step1 = (input: string, y = 10): number => {
   const [sensors, beacons] = getBeaconsAndSensors(input);
   let count = 0;
   const boundaries = [...sensors].map((s) => [s.center.x + s.radius, s.center.x - s.radius]).flat();
   const xMin = Math.min(...boundaries);
   const xMax = Math.max(...boundaries);

   for (let x = xMin; x <= xMax; ++x) {
      const p = new Point(x, y);
      if (!valid(p, sensors) && !beacons.has(p)) ++count;
   }
   return count;
};

export const step2 = (input: string, max: number = 20): number => {
   const [sensors] = getBeaconsAndSensors(input);
   for (let sensor of sensors) {
      let [sx, sy, d] = [sensor.center.x, sensor.center.y, sensor.radius];
      for (let dx = 0, dy = d + 1 - dx; dx <= d + 1; ++dx) {
         for (let [signX, signY] of DiagonalDirections) {
            const [x, y] = [sx + dx * signX, sy + dy * signY];
            if (x < 0 || y < 0 || x > max || y > max) continue;
            if (valid(new Point(x, y), sensors)) return x * 4000000 + y;
         }
      }
   }
   return -1;
};
