export function* iterateGrid<T>(grid: T[][]): Generator<[T, number, number]> {
   for(let r = 0; r < grid.length; r++) {
      for(let c = 0; c < grid[0].length; c++) {
         yield [grid[r][c], r, c];
      }
   }
}

export const gridOfSize = <T>(dim: [number, number], d: T): T[][] =>
   Array.from({ length: dim[0] }, () => Array.from({ length: dim[1] }, () => d));