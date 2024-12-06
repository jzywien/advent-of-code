import { getInput } from '@util/file';
import { step1, step2 } from './day5';

const deepCopy = (input: any) => JSON.parse(JSON.stringify(input));

describe('day 5', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(143);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(7198);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(123);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(4230);
      });
   });
});
