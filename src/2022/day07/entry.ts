import { EntityVisitor } from './entity-visitor';

export abstract class Entry {
   constructor(public name: string) {
      this.name = name;
   }

   abstract size(): number;
   abstract accept(visitor: EntityVisitor): void;
}
