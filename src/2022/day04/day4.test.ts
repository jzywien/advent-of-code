import { getInput } from '../../util/file';
import { solution, Strategy } from './day4';

describe('day 4', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = solution(sample);
         expect(result).toEqual(2);
      });
      test('input', () => {
         const result = solution(input);
         expect(result).toEqual(528);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = solution(sample, Strategy.Overlap);
         expect(result).toEqual(4);
      });
      test('input', () => {
         const result = solution(input, Strategy.Overlap);
         expect(result).toEqual(881);
      });
   });
});
