import { getInput } from '../../util/file';
import { step1, step2 } from './day1';

describe('day 1', () => {
   let [input, sample, sample2] = ['', '', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      sample2 = await getInput(__dirname, 'sample2');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(142);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(53386);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample2);
         expect(result).toEqual(281);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(53312);
      });
   });
});
