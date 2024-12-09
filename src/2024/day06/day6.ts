import '@util/polyfills';
import { iterateGrid } from '@util/grid';

type Position = [number, number];
type Dimension = [number, number];

const direction = new Map([['^', [-1, 0]], ['>', [0, 1]], ['v', [1, 0]], ['<', [0, -1]]]);
const turn = new Map([['^', '>'], ['>', 'v'], ['v', '<'], ['<', '^']]);

interface Guard {
   position: Position,
   direction: string;
}

const findGuard = (grid: string[][]): Guard => {
   for (let [val, r, c] of iterateGrid(grid)) {
      if (val !== '^') continue;
      return { position: [r, c], direction: '^' }
   }
   throw new Error('guard not found');
}

const inBounds = ([m, n]: Dimension, [x, y]: Position): boolean => x >= 0 && x < m && y >= 0 && y < n;

export const step1 = (input: string): number => {
   const grid = input.toMatrix<string>();
   const guard = findGuard(grid);
   const dim = [grid.length, grid[0].length] as Position;
   const visited = new Set<string>();

   while(inBounds(dim, guard.position)) {
      const [dr, dc] = direction.get(guard.direction)!;
      const [r, c] = guard.position;
      const [r2, c2] = [r + dr, c + dc];
      if (!inBounds(dim, [r2, c2])) break;
      if (grid[r2][c2] === '#') {
         guard.direction = turn.get(guard.direction)!;
      } else {
         guard.position = [r2, c2];
         visited.add(`${r2},${c2}`);
      }
   }

   return visited.size;
};

export const step2 = (input: string): number => {
   const grid = input.toMatrix<string>();
   const dim = [grid.length, grid[0].length] as Position;
   let loopsDetected = 0;

   for (let [val, r, c] of iterateGrid(grid)) {
      if (val === '^' || val === '#') continue;

      const gridCopy = input.toMatrix<string>();
      const guard = findGuard(gridCopy);
      const visited = new Set<string>([`${guard.position[0]},${guard.position[1]},${guard.direction}`]);

      gridCopy[r][c] = '#';
      while(inBounds(dim, guard.position)) {
         const [dr, dc] = direction.get(guard.direction)!;
         const [r, c] = guard.position;
         const [r2, c2] = [r + dr, c + dc];
         if (!inBounds(dim, [r2, c2])) break;

         const key = `${r2},${c2},${guard.direction}`;
         if (visited.has(key)) {
            loopsDetected++;
            break;
         }

         if (gridCopy[r2][c2] === '#') {
            guard.direction = turn.get(guard.direction)!;
         } else {
            guard.position = [r2, c2];
            visited.add(key);
         }
      }
   }

   return loopsDetected;
};
