import { step1, step2 } from './day9';
import { getInput } from '@util/file';

describe('day 9', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(1928);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(6242766523059);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(2858);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(6272188244509);
      });
   });
});
