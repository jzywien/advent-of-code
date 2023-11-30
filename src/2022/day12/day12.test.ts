import { getInput } from '../../util/file';
import { step1, step2 } from './day12';

describe('day 11', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      it('returns -1 with no data', () => {
         const result = step1('');
         expect(result).toBe(-1);
      });
      it('sample', () => {
         const result = step1(sample);
         expect(result).toBe(31);
      });
      it('input', () => {
         const result = step1(input);
         expect(result).toBe(330);
      });
   });

   describe('step 2', () => {
      it('returns -1 with no data', () => {
         const result = step2('');
         expect(result).toBe(-1);
      });

      it('sample', () => {
         const result = step2(sample);
         expect(result).toBe(29);
      });
      it('input', () => {
         const result = step2(input);
         expect(result).toBe(321);
      });
   });
});
