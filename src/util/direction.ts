export const Directions: Record<string, [number, number]> = {
   N: [0, -1],
   S: [0, 1],
   E: [1, 0],
   W: [-1, 0],
   NE: [1, -1],
   NW: [-1, -1],
   SE: [1, 1],
   SW: [-1, 0],
};

export const DirectionMap: Record<string, [number, number]> = {
   U: Directions.N,
   D: Directions.S,
   R: Directions.E,
   L: Directions.W,
};

export const CartesianDirections = [Directions.N, Directions.S, Directions.E, Directions.W];
export const DiagonalDirections = [Directions.NE, Directions.NW, Directions.SE, Directions.SW];
