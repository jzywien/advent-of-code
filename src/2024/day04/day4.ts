import '@util/polyfills';
import { CartesianDirections, DiagonalDirections } from '@util/direction';

const match = 'XMAS'.split('');

const findMatchInDirection = (grid: string[][], r: number, c: number, d: [number, number]): boolean => {
   const [dx, dy] = d;
   for(let move = 1; move < 4; move++) {
      const [r2, c2] = [r + (dy * move), c + (dx * move)];
      if (r2 < 0 || c2 < 0 || r2 >= grid.length || c2 >= grid[0].length || grid[r2][c2] !== match[move]) return false;
   }
   return true;
}

export const step1 = (input: string): number => {
   const grid = input.toMatrix<string>();

   let matches = 0;
   for(let r = 0; r < grid.length; r++) {
      for(let c = 0; c < grid[r].length; c++) {
         if (grid[r][c] !== 'X') continue;
         matches += [...CartesianDirections, ...DiagonalDirections]
            .filter(dir => findMatchInDirection(grid, r, c, dir))
            .length
      }
   }

   return matches;
};

export const step2 = (input: string): number => {
   const grid = input.toMatrix<string>();

   let matches = 0;
   for(let r = 0; r < grid.length; r++) {
      for(let c = 0; c < grid[r].length; c++) {
         if (grid[r][c] !== 'A') continue;
         if (r === 0 || c === 0 || r >= grid.length-1 || c >= grid[r].length-1) continue;
         const ltrDiag = [grid[r-1][c-1], grid[r+1][c+1]].sort().join('');
         const rtlDiag = [grid[r-1][c+1], grid[r+1][c-1]].sort().join('');
         matches += (ltrDiag === 'MS' && rtlDiag === 'MS') ? 1 : 0;
      }
   }

   return matches;
};


