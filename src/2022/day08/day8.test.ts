import { step1, step2 } from './day8';
import { getInput } from '../../util/file';

describe('day 8', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(21);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(1798);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(8);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(259308);
      });
   });
});
