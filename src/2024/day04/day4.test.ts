import { getInput } from '@util/file';
import { step1, step2 } from './day4';

describe('day 4', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(18);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(2370);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(9);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(1908);
      });
   });
});
