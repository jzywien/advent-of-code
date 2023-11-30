import { Stringable } from '../string';

export class ObjectSet<T extends Stringable> {
   map: Map<string, T>;

   constructor(vals?: T[]) {
      this.map = new Map();
      vals?.forEach((val) => this.add(val));
   }

   *[Symbol.iterator](): IterableIterator<T> {
      yield* this.map.values();
   }

   add(item: T): ObjectSet<T> {
      this.map.set(item.toString(), item);
      return this;
   }

   has(item: T) {
      return this.map.has(item.toString());
   }

   values() {
      return this.map.values();
   }

   delete(item: T) {
      return this.map.delete(item.toString());
   }
}
