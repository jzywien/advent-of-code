import { Entry } from './entry';
import { EntityVisitor } from './entity-visitor';

export class Directory extends Entry {
   contents: Entry[];

   constructor(name: string) {
      super(name);
      this.contents = [];
   }

   size = (): number => this.contents.reduce((sum, entry) => sum + entry.size(), 0);

   addEntry(entry: Entry) {
      this.contents.push(entry);
   }

   getEntry = (name: string) => this.contents.find((entry) => entry.name === name);

   accept(visitor: EntityVisitor): void {
      this.contents.forEach((entry) => entry.accept(visitor));
      visitor.visitDirectory(this);
   }
}
