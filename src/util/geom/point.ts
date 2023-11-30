import { clamp } from '../math';
import { NUM } from '../regex';

export type PointStr = `${number},${number}`;
const strToNumConverter = (val: string) => parseInt(val);

export class Point {
   public x!: number;
   public y!: number;

   constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
   }

   static fromString(str: string, delimiter = ',') {
      const [x, y] = str.split(delimiter).map((v) => parseInt(v));
      return new Point(x, y);
   }

   static fromArray(arr: any[], converter: (val: any) => number = strToNumConverter) {
      const [x, y] = arr.map((val) => converter(val));
      return new Point(x, y);
   }

   static dist(p1: Point, p2: Point): number {
      return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
   }

   /**
    * Finds all points between me and input point
    * @param p point to find points between
    * @returns list of all points
    */
   between(p: Point): Point[] {
      const between: Point[] = [];
      const dx = this.x - p.x;
      const dy = this.y - p.y;
      const d = Math.max(Math.abs(dx), Math.abs(dy));
      for (let i = 0; i <= d; ++i) {
         const x = p.x + i * clamp(dx, -1, 1);
         const y = p.y + i * clamp(dy, -1, 1);
         between.push(new Point(x, y));
      }
      return between;
   }

   step(dir: [number, number]) {
      const [x, y] = dir;
      this.x += x;
      this.y += y;
   }

   follow(p: Point): void {
      const d = Math.max(Math.abs(this.x - p.x), Math.abs(this.y - p.y));
      if (d > 1) {
         const [dx, dy] = [p.x - this.x, p.y - this.y];
         this.x += Math.abs(dx) === 2 ? dx / 2 : dx;
         this.y += Math.abs(dy) === 2 ? dy / 2 : dy;
      }
   }

   toString(): PointStr {
      return `${this.x},${this.y}`;
   }

   equals(p: Point) {
      return this.x === p.x && this.y === p.y;
   }
}
