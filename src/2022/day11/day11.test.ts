import { input, sample } from './data';
import { step1, step2 } from './day11';

describe('day 11', () => {
   describe('step 1', () => {
      it('sample', () => {
         const result = step1(sample);
         expect(result).toBe(10605);
      });
      it('input', () => {
         const result = step1(input);
         expect(result).toBe(90882);
      });
   });

   describe('step 2', () => {
      it('sample', () => {
         const result = step2(sample);
         expect(result).toBe(2713310158);
      });
      it('input', () => {
         const result = step2(input);
         expect(result).toBe(30893109657);
      });
   });
});
