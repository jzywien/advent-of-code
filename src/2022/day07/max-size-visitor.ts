import { Directory } from './directory';
import { EntityVisitor } from './entity-visitor';
import { File } from './file';

export class MaxSizeVisitor implements EntityVisitor {
   constructor(private maxSize: number) {}

   private sizesUnderMax: number[] = [];

   get sizes() {
      return this.sizesUnderMax;
   }

   visitFile(file: File) {}

   visitDirectory(directory: Directory) {
      const size = directory.size();
      if (size < this.maxSize) {
         this.sizesUnderMax.push(size);
      }
   }
}
