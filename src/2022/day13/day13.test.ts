import { getInput } from '../../util/file';
import { compare, step1, step2 } from './day13';

describe('day 13', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      it('sample', () => {
         const result = step1(sample);
         expect(result).toBe(13);
      });

      it('input', () => {
         const result = step1(input);
         expect(result).toBe(5196);
      });
   });

   describe('step 2', () => {
      it('sample', () => {
         const result = step2(sample);
         expect(result).toBe(140);
      });

      it('input', () => {
         const result = step2(input);
         expect(result).toBe(22134);
      });
   });
});
