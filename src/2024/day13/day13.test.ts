import { step1, step2 } from './day13';
import { getInput } from '@util/file';

describe('day 13', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(480);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(31589);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(875318608908);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(98080815200063);
      });
   });
});
