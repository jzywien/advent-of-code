import { getInput } from '../../util/file';
import { solution, Strategy } from './day2';
import { numericSolution, NumericStrategy } from './day2b';

describe('day 2', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const totalScore = solution(sample);
         expect(totalScore).toBe(15);
      });

      test('input', () => {
         const totalScore = solution(input);
         expect(totalScore).toBe(9177);
      });

      test('sample numeric', () => {
         const totalScore = numericSolution(sample);
         expect(totalScore).toBe(15);
      });

      test('input numeric', () => {
         const totalScore = numericSolution(input);
         expect(totalScore).toBe(9177);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const totalScore = solution(sample, Strategy.Result);
         expect(totalScore).toBe(12);
      });

      test('input', () => {
         const totalScore = solution(input, Strategy.Result);
         expect(totalScore).toBe(12111);
      });

      test('sample numeric', () => {
         const totalScore = numericSolution(sample, NumericStrategy.Result);
         expect(totalScore).toBe(12);
      });

      test('input numeric', () => {
         const totalScore = numericSolution(input, NumericStrategy.Result);
         expect(totalScore).toBe(12111);
      });
   });
});
