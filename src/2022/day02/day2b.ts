export const NumericStrategy = {
   NoOp: (opponent: number, choice: number): number[] => [opponent, choice],
   Result: (opponent: number, result: number): number[] => [opponent, (opponent + result + 2) % 3],
};

export const numericSolution = (input: string, strategy = NumericStrategy.NoOp): number =>
   input
      .lines()
      .map((line) => line.split(' '))
      .map(([opponent, result]) => [
         opponent.charCodeAt(0) - 'A'.charCodeAt(0),
         result.charCodeAt(0) - 'X'.charCodeAt(0),
      ])
      .map(([opponent, result]) => strategy(opponent, result))
      .map(([opponent, elf]) => (opponent === elf ? elf + 4 : (opponent + 1) % 3 === elf ? elf + 7 : elf + 1))
      .sum();
