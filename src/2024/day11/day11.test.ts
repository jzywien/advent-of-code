import { step1, step2 } from './day11';
import { getInput } from '@util/file';

describe('day 11', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(55312);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(185894);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(65601038650482);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(221632504974231);
      });
   });
});
