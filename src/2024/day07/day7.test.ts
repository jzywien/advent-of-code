import { getInput } from '@util/file';
import { step1, step2 } from './day7';

describe('day 7', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(3749);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(267566105056);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(11387);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(116094961956019);
      });
   });
});
