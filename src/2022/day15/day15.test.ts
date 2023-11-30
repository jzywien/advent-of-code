import { getInput } from '../../util/file';
import { step1, step2 } from './day15';

describe('day 15', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      it('sample', () => {
         const result = step1(sample, 10);
         expect(result).toBe(26);
      });

      // this test takes a while due to input boundaries
      it.skip('input', () => {
         const result = step1(input, 2000000);
         expect(result).toBe(5809294);
      });
   });

   describe('step 2', () => {
      it('sample', () => {
         const result = step2(sample);
         expect(result).toBe(56000011);
      });

      // this test takes a while due to input boundaries
      it.skip('input', () => {
         const result = step2(input, 4000000);
         expect(result).toBe(10693731308112);
      });
   });
});
