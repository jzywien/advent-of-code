import { EntityVisitor } from './entity-visitor';
import { Entry } from './entry';

export class File extends Entry {
   constructor(name: string, private _size: number) {
      super(name);
   }

   size = (): number => this._size;
   accept = (visitor: EntityVisitor): void => visitor.visitFile(this);
}
