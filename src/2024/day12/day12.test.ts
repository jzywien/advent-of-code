import { step1, step2 } from './day12';
import { getInput } from '@util/file';

describe('day 12', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(1930);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(1431440);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(1206);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(869070);
      });
   });
});
