import { step1, step2 } from './day7';
import { getInput } from '../../util/file';

describe('day 7', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toBe(95437);
      });

      test('input', () => {
         const result = step1(input);
         expect(result).toBe(1443806);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toBe(24933642);
      });

      test('input', () => {
         const result = step2(input);
         expect(result).toBe(942298);
      });
   });
});
