import { asc, desc } from '../math';

export {};

declare global {
   interface Array<T> {
      sum(): number;
      max(): number;
      min(): number;

      take(n: number): T[];
      asc(): T[];
      desc(): T[];
      chunk(chunkSize: number): T[][];
      peek(): T;
   }
}

if (!Array.prototype.sum) {
   Array.prototype.sum = function (): number {
      return this.reduce((s, c) => s + c);
   };
}

if (!Array.prototype.max) {
   Array.prototype.max = function (): number {
      return Math.max(...this);
   };
}

if (!Array.prototype.min) {
   Array.prototype.min = function (): number {
      return Math.min(...this);
   };
}

if (!Array.prototype.take) {
   Array.prototype.take = function <T>(num: number): T[] {
      return this.slice(0, num);
   };
}

if (!Array.prototype.asc) {
   Array.prototype.asc = function <T>(): T[] {
      return this.sort(asc);
   };
}

if (!Array.prototype.desc) {
   Array.prototype.desc = function <T>(): T[] {
      return this.sort(desc);
   };
}

if (!Array.prototype.chunk) {
   Array.prototype.chunk = function (chunkSize: number): any[][] {
      const chunks = [];
      for (var i = 0; i < this.length; i += chunkSize) {
         chunks.push(this.slice(i, i + chunkSize));
      }
      return chunks;
   };
}

if (!Array.prototype.peek) {
   Array.prototype.peek = function (): any {
      return this.at(-1);
   };
}
