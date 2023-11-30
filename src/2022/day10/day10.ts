import '../../util/polyfills';

type Cycle = [string, number];

const getCycles = (input: string): number[] =>
   input
      .lines()
      .map((line) => line.split(' '))
      .map(([move, val]): Cycle => [move, parseInt(val)])
      .reduce((c: number[], [cmd, val]) => (cmd === 'addx' ? [...c, 0, val!] : [...c, 0]), []);

export const step1 = (input: string): number => {
   const cycles = getCycles(input);

   let x = 1;
   let strength = 0;
   for (let i = 0; i < cycles.length; ++i) {
      const cycle = i + 1;
      if ((cycle - 20) % 40 === 0) strength += cycle * x;
      x += cycles[i];
   }

   return strength;
};

export const step2 = (input: string): string => {
   const cycles = getCycles(input);
   const grid: string[][] = Array.from({ length: 6 }, () => Array.from({ length: 40 }, () => ''));

   let x = 1;
   for (let i = 0; i < cycles.length; ++i) {
      const row = Math.floor(i / 40);
      const col = i % 40;
      const dx = col + 1 - x;

      grid[row][col] = dx >= 0 && dx < 3 ? '#' : '.';

      x += cycles[i];
   }

   const vis = grid.reduce((grid, line) => `${grid}${line.join('')}\n`, '');
   console.log(vis);
   return vis;
};
