import { getInput } from '../../util/file';
import { solution } from './day6';

describe('day 6', () => {
   let input = '';
   beforeEach(async () => {
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      describe('samples', () => {
         test('sample 1', () => {
            const result = solution('mjqjpqmgbljsphdztnvjfqwrcgsmlb');
            expect(result).toEqual(7);
         });
         test('sample 2', () => {
            const result = solution('bvwbjplbgvbhsrlpgdmjqwftvncz');
            expect(result).toEqual(5);
         });
         test('sample 3', () => {
            const result = solution('nppdvjthqldpwncqszvftbrmjlhg');
            expect(result).toEqual(6);
         });
         test('sample 4', () => {
            const result = solution('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg');
            expect(result).toEqual(10);
         });
         test('sample 5', () => {
            const result = solution('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw');
            expect(result).toEqual(11);
         });
      });
      test('input', () => {
         const result = solution(input);
         expect(result).toEqual(1361);
      });
   });

   describe('step 2', () => {
      describe('samples', () => {
         test('sample 1', () => {
            const result = solution('mjqjpqmgbljsphdztnvjfqwrcgsmlb', 14);
            expect(result).toEqual(19);
         });
         test('sample 2', () => {
            const result = solution('bvwbjplbgvbhsrlpgdmjqwftvncz', 14);
            expect(result).toEqual(23);
         });
         test('sample 3', () => {
            const result = solution('nppdvjthqldpwncqszvftbrmjlhg', 14);
            expect(result).toEqual(23);
         });
         test('sample 4', () => {
            const result = solution('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 14);
            expect(result).toEqual(29);
         });
         test('sample 5', () => {
            const result = solution('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw');
            expect(result).toEqual(11);
         });
      });
      test('input', () => {
         const result = solution(input, 14);
         expect(result).toEqual(3263);
      });
   });
});
