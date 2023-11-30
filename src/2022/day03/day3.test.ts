import { step1, step2 } from './day3';
import { getInput } from '../../util/file';

describe('day 3', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toBe(157);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toBe(7967);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toBe(70);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toBe(2716);
      });
   });
});
