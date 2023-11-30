import { Entry } from './entry';
import { Directory } from './directory';
import { File } from './file';
import { MaxSizeVisitor } from './max-size-visitor';
import { BigEnoughVisitor } from './big-enough-visitor';
import '../../util/polyfills';

const buildDirectory = (lines: string[]): Entry | undefined => {
   const dirStack: Entry[] = [];
   for (let line of lines) {
      const currentDir = dirStack.peek() as Directory;
      if (line.startsWith('$ ls')) continue;
      else if (line.startsWith('$ cd ..')) {
         dirStack.pop();
      } else if (line.startsWith('$ cd')) {
         const name = line.replace('$ cd ', '');
         const dir = currentDir?.getEntry(name) ?? new Directory(name);
         dirStack.push(dir);
      } else if (line.startsWith('dir')) {
         const name = line.replace('dir ', '');
         const dir = new Directory(name);
         currentDir.addEntry(dir);
      } else {
         const [size, name] = line.split(' ');
         const file = new File(name, Number(size));
         currentDir.addEntry(file);
      }
   }

   return dirStack.at(0);
};

export const step1 = (input: string): number => {
   const rootDir = buildDirectory(input.lines()) as Directory;
   const visitor = new MaxSizeVisitor(100000);
   rootDir.accept(visitor);
   return visitor.sizes.sum();
};

export const step2 = (input: string): number => {
   const rootDir = buildDirectory(input.lines()) as Directory;
   const visitor = new BigEnoughVisitor(rootDir.size());
   rootDir.accept(visitor);
   return Math.min(...visitor.sizes);
};
