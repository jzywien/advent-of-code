import { getInput } from '@util/file';
import { step1, step2 } from './day6';

describe('day 6', () => {
   let [input, sample, sample2] = ['', '', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(41);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(5131);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(6);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(1784);
      });
   });
});
