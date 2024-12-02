import { getInput } from '../../util/file';
import { step1, step2 } from './day2';

describe('day 2', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const totalScore = step1(sample);
         expect(totalScore).toBe(2);
      });

      test('input', () => {
         const totalScore = step1(input);
         expect(totalScore).toBe(549);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const totalScore = step2(sample);
         expect(totalScore).toBe(4);
      });

      test('input', () => {
         const totalScore = step2(input);
         expect(totalScore).toBe(589);
      });
   });
});
