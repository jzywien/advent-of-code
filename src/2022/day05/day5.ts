export type Stack = string[];
export type Move = number[];

const moveStacks = (move: Move, stacks: Stack[], strategy: (stack: Stack) => Stack) => {
   const [num, from, to] = move;
   const moved = strategy(stacks[from - 1].splice(-num));
   stacks[to - 1].push(...moved);
   return stacks;
};

export const Strategy = {
   NoOp: (stack: Stack): Stack => stack,
   Reverse: (stack: Stack): Stack => stack.reverse(),
};

export const solution = (stacks: Stack[], moves: Move[], strategy = Strategy.NoOp): string =>
   moves
      .reduce((stacks, move) => moveStacks(move, stacks, strategy), stacks)
      .reduce((top, stack) => `${top}${stack.pop()}`, '');
