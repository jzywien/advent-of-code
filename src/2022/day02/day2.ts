import '../../util/polyfills';

const score: Record<string, Record<string, number>> = {
   X: { A: 4, B: 1, C: 7 }, // inc by 1
   Y: { A: 8, B: 5, C: 2 }, // inc by 2
   Z: { A: 3, B: 9, C: 6 }, // inc by 3
};

const choice: Record<string, Record<string, string>> = {
   X: { A: 'Z', B: 'X', C: 'Y' }, // lose
   Y: { A: 'X', B: 'Y', C: 'Z' }, // draw
   Z: { A: 'Y', B: 'Z', C: 'X' }, // win
};

export const Strategy = {
   NoOp: (opponent: string, choice: string): string[] => [opponent, choice],
   Result: (opponent: string, result: string): string[] => [opponent, choice[result][opponent]],
};

export const solution = (input: string, strategy = Strategy.NoOp): number =>
   input
      .lines()
      .map((line) => line.split(' '))
      .map(([opponent, result]) => strategy(opponent, result))
      .map(([opponent, elf]) => score[elf][opponent])
      .sum();
