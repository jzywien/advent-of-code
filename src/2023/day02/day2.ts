import '@util/polyfills';

const elfBag = new Map<string, number>([
   ['red', 12],
   ['green', 13],
   ['blue', 14],
]);

export const step1 = (input: string): number =>
   input
      .lines()
      .map((line) => {
         const [gameId, game] = line.split(':');
         const id = parseInt(gameId.split(' ').at(-1) ?? '0');
         for (let draw of game.split(';')) {
            for (let balls of draw.match(/((\d+) (red|blue|green))/g) ?? []) {
               const [numStr, color] = balls.split(' ');
               if (parseInt(numStr) > (elfBag.get(color) ?? 0)) return 0;
            }
         }
         return id;
      })
      .sum();

export const step2 = (input: string): number =>
   input
      .lines()
      .map((line) => {
         const [gameId, game] = line.split(':');
         const id = parseInt(gameId.split(' ').at(-1) ?? '0');
         const gameDraws = new Map<string, number>();
         for (let draw of game.split(';')) {
            for (let balls of draw.match(/((\d+) (red|blue|green))/g) ?? []) {
               const [numStr, color] = balls.split(' ');
               const curr = gameDraws.get(color) ?? 1;
               gameDraws.set(color, Math.max(curr, parseInt(numStr)));
            }
         }
         return [...gameDraws.values()].product();
      })
      .sum();
