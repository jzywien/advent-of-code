import { step1, step2 } from './day14';
import { getInput } from '@util/file';

describe('day 14', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample, 11, 7);
         expect(result).toEqual(12);
      });
      test('input', () => {
         const result = step1(input, 101, 103);
         expect(result).toEqual(224357412);
      });
   });

   describe('step 2', () => {
      test('input', () => {
         const result = step2(input, 101, 103);
         expect(result).toEqual(7083);
      });
   });
});
