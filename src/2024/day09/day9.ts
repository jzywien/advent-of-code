import '@util/polyfills';


const swap = <T>(arr: T[], a: number, b: number) => {
   const t = arr[a];
   arr[a] = arr[b];
   arr[b] = t;
}

export const step1 = (input: string): number => {

   const disk = input.split('').map(Number).reduce((disk, item, ndx) => {
      const char = ndx % 2 === 0 ? `${Math.floor(ndx / 2)}` : '.';
      return disk.concat(`${char};`.repeat(item).split(';').slice(0, -1));
   }, [] as string[]);

   for (let start = 0, end = disk.length - 1; start < end; start++) {
      if (disk[start] !== '.') continue;

      while(disk[end] === '.') end--;
      swap(disk, start, end);
      end--;
   }

   return disk
      .filter(item => item !== '.')
      .map(Number)
      .reduce((sum, item, ndx) => sum + item * ndx)
};

export const step2 = (input: string): number => 0;