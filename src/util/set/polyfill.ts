export {};

declare global {
   interface Set<T> {
      intersect(...sets: Set<T>[]): Set<T>;
      union(...sets: Set<T>[]): Set<T>;
   }
}

if (!Set.prototype.intersect) {
   Set.prototype.intersect = function (...sets: Set<any>[]): Set<any> {
      return new Set([...this].filter((x) => sets.reduce((test, set) => test && set.has(x), true)));
   };
}

if (!Set.prototype.union) {
   Set.prototype.union = function (set: Set<any>): Set<any> {
      return new Set([...this, ...set]);
   };
}
