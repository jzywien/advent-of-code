import { step1, step2 } from './day3';
import { getInput } from '@util/file';

describe('day 3', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toBe(161);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toBe(173529487);
      });
   });

   describe('step 2', () => {
      beforeEach(async () => {
         sample = await getInput(__dirname, 'sample2');
      });

      test('sample', () => {
         const result = step2(sample);
         expect(result).toBe(48);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toBe(99532691);
      });
   });
});
