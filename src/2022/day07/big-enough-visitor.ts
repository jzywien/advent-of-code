import { Directory } from './directory';
import { EntityVisitor } from './entity-visitor';
import { File } from './file';

const storageNeeded = 30000000;
const spaceAvailable = 70000000;

export class BigEnoughVisitor implements EntityVisitor {
   private bigEnoughSizes: number[] = [];
   private unusedSpace: number;

   constructor(private storageUsed: number) {
      this.unusedSpace = spaceAvailable - this.storageUsed;
   }

   get sizes(): number[] {
      return this.bigEnoughSizes;
   }

   visitFile(file: File) {}

   visitDirectory(directory: Directory) {
      const size = directory.size();
      if (this.unusedSpace + size >= storageNeeded) {
         this.bigEnoughSizes.push(size);
      }
   }
}
