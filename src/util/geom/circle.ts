import { Stringable } from '../string';
import { Point } from './point';

export class Circle implements Stringable {
   center: Point;
   radius: number;

   constructor(c: Point, r: number) {
      this.center = c;
      this.radius = r;
   }

   toString(): string {
      return `(${this.center.toString()}), r${this.radius}`;
   }

   isInsideManhattan(point: Point): boolean {
      const dist = Point.dist(point, this.center);
      return dist <= this.radius;
   }
}
