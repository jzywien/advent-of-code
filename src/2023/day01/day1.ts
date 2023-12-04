import '@util/polyfills';

const isNumber = (c: string): boolean => /^\d$/.test(c);
const firstNumber = (chars: string[]) => parseInt(chars.find((c) => isNumber(c)) ?? '0');
const numberMap = new Map<string, string>([
   ['one', 'o1e'],
   ['two', 't2o'],
   ['three', 't3e'],
   ['four', 'f4r'],
   ['five', 'f5e'],
   ['six', 's6x'],
   ['seven', 's7n'],
   ['eight', 'e8t'],
   ['nine', 'n9e'],
]);

export const step1 = (input: string): number =>
   input
      .lines()
      .map((line) => line.split(''))
      .map((chars) => [firstNumber(chars), firstNumber(chars.reverse())])
      .reduce((sum, [first, last]) => sum + first * 10 + last, 0);

export const step2 = (input: string): number =>
   input
      .lines()
      .map((line) => {
         [...numberMap.entries()].forEach(([key, val]) => {
            line = line.replaceAll(key, val);
         });
         return line;
      })
      .map((line) => line.split(''))
      .map((chars) => [firstNumber(chars), firstNumber(chars.reverse())])
      .reduce((sum, [first, last]) => sum + first * 10 + last, 0);
