import { times } from '../../util/array';
import { Directions } from '../../util/direction';
import { Point } from '../../util/geom';
import '../../util/polyfills';

const DirectionMap: Record<string, [number, number]> = {
   U: Directions.N,
   D: Directions.S,
   R: Directions.E,
   L: Directions.W,
};

type Motion = [string, number];

const getMotions = (input: string): Motion[] =>
   input
      .lines()
      .map((line) => line.split(' '))
      .map(([move, val]): Motion => [move, parseInt(val)]);

export const step1 = (input: string): number => {
   const head = new Point(0, 0);
   const tail = new Point(0, 0);

   return getMotions(input).reduce((visited, [dir, moves]) => {
      times(moves, () => {
         head.step(DirectionMap[dir]);
         tail.follow(head);
         visited.add(tail.toString());
      });
      return visited;
   }, new Set<string>([tail.toString()])).size;
};

export const step2 = (input: string): number => {
   const ropes = Array.from({ length: 10 }).map((r) => new Point(0, 0));
   return getMotions(input).reduce((visited, [dir, moves]) => {
      times(moves, () => {
         ropes[0].step(DirectionMap[dir]);
         ropes.slice(1).forEach((r, prevNdx) => r.follow(ropes[prevNdx]));
         visited.add(ropes.at(-1)!.toString());
      });
      return visited;
   }, new Set<string>([ropes.at(0)!.toString()])).size;
};
