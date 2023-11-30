import '../../util/polyfills';
import { Point } from '../../util/geom';

const isInside = (a: Point, b: Point): boolean => (a.x >= b.x && a.y <= b.y) || (b.x >= a.x && b.y <= a.y);
const doesOverlap = (a: Point, b: Point): boolean => !(b.x > a.y || a.x > b.y);

export const Strategy = {
   Inside: (p1: Point, p2: Point): boolean => isInside(p1, p2),
   Overlap: (p1: Point, p2: Point): boolean => doesOverlap(p1, p2),
};

export const solution = (input: string, strategy = Strategy.Inside): number => {
   const points = input.lines().map((line) => line.split(',').map((r) => Point.fromString(r, '-')));
   return points.reduce((count, [p1, p2]) => (strategy(p1, p2) ? count + 1 : count), 0);
};
