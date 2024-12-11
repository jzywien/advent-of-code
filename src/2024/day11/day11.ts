import '@util/polyfills';

const bruteForce = (input: string, steps: number): number => {
   let stones = input.split(' ').map(Number);

   for (let i = 0; i < steps; i++) {
      stones = stones.map(s => {
         if (s === 0) return 1;
         const stoneStr = s.toString();
         if (stoneStr.length % 2 === 0) {
            const mid = Math.floor(stoneStr.length / 2);
            return [Number(stoneStr.slice(0, mid)), Number(stoneStr.slice(-1 * mid))];
         }
         return s * 2024;
      }).flatMap(n => n);
   }

   return stones.length;
}

const dictionaryBased = (input: string, steps: number): number => {
   const stones: [number, number][] = input.split(' ').map(Number).map(n => [n, 1]);
   let stoneMap = new Map(stones);

   for (let i = 0; i < steps; i++) {
      const updatedMap = new Map<number, number>();
      for (let [s, c] of stoneMap) {
         const stoneStr = s.toString();
         if (s === 0) {
            updatedMap.set(1, (updatedMap.get(1) ?? 0) + c);
         }
         else if (stoneStr.length % 2 === 0) {
            const mid = Math.floor(stoneStr.length / 2);
            const [a, b] = [Number(stoneStr.slice(0, mid)), Number(stoneStr.slice(-1 * mid))];
            updatedMap.set(a, (updatedMap.get(a) ?? 0) + c);
            updatedMap.set(b, (updatedMap.get(b) ?? 0) + c);
         }
         else {
            const newStone = s * 2024;
            updatedMap.set(newStone, (updatedMap.get(newStone) ?? 0) + c);
         }
      }
      stoneMap = updatedMap;
   }

   return [...stoneMap.values()].sum();
}

export const step1 = (input: string): number => dictionaryBased(input, 25);

export const step2 = (input: string): number => dictionaryBased(input, 75);
