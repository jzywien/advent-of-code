import '@util/polyfills';

const decompress = (input: string): string[] => input
   .split('')
   .map(Number)
   .reduce((disk, item, ndx) => disk
      .concat(`${ndx % 2 === 0 ? `${Math.floor(ndx / 2)}` : '.'};`
         .repeat(item)
         .split(';')
         .slice(0, -1))
   , [] as string[]);

const checksum = (disk: string[]): number => disk
   .map((item, ndx) => item === '.' ? 0 : Number(item) * ndx)
   .sum();

const swap = <T>(arr: T[], a: number, b: number) => {
   const t = arr[a];
   arr[a] = arr[b];
   arr[b] = t;
}

export const step1 = (input: string): number => {
   const disk = decompress(input);
   for (let start = 0, end = disk.length - 1; start < end; start++) {
      if (disk[start] !== '.') continue;

      while(disk[end] === '.') end--;
      swap(disk, start, end);
      end--;
   }

   return checksum(disk);
};

interface Block {
   id: string;
   size: number;
}

export const step2 = (input: string): number => {
   const disk = decompress(input);

   let blocks: Block[] = [];
   let current = disk[0];
   let size = 1;

   for (let i = 1; i < disk.length+1; i++) {
      if (!disk[i] || disk[i] !== current) {
         blocks.push({ id: current, size });
         current = disk[i];
         size = 1;
         continue;
      }
      size++;
   }

   for(let i = blocks.length-1; i >= 0; i--) {
      if (blocks[i].id === '.') continue;

      const size = blocks[i].size;
      const emptyNdx = blocks.findIndex((block, ndx) => block.id === '.' && block.size >= size);
      if (emptyNdx === -1 || emptyNdx > i) continue;

      const before = blocks.slice(0, emptyNdx);
      const after = blocks.slice(emptyNdx);
      const newBlock = { ...blocks[i] };
      blocks[i].id = '.';
      blocks[emptyNdx].size -= size;
      blocks = [...before, newBlock, ...after];
      ++i;
   }

   const updates = blocks.flatMap(block => Array(block.size).fill(block.id));
   return checksum(updates);
};