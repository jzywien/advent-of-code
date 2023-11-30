import { step1, step2 } from './day10';
import { getInput } from '../../util/file';

describe('day 10', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(13140);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(16060);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample).replace(/\s/g, '');
         expect(result).toEqual(
            `
         ##..##..##..##..##..##..##..##..##..##..
         ###...###...###...###...###...###...###.
         ####....####....####....####....####....
         #####.....#####.....#####.....#####.....
         ######......######......######......####
         #######.......#######.......#######.....`.replace(/\s/g, '')
         );
      });
      test('input', () => {
         const result = step2(input).replace(/\s/g, '');
         expect(result).toEqual(
            `
         ###...##...##..####.#..#.#....#..#.####.
         #..#.#..#.#..#.#....#.#..#....#..#.#....
         ###..#..#.#....###..##...#....####.###..
         #..#.####.#....#....#.#..#....#..#.#....
         #..#.#..#.#..#.#....#.#..#....#..#.#....
         ###..#..#..##..####.#..#.####.#..#.#....         
         `.replace(/\s/g, '')
         );
      });
   });
});
