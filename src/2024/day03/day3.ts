import '../../util/polyfills';

export const step1 = (input: string): number => [...input.matchAll(/mul\(\d+,\d+\)/g)]
   .map(item => item[0])
   .map(item => [...item.matchAll(/\d+/g)].map(Number))
   .map(([lhs, rhs]) => lhs * rhs)
   .sum();

export const step2 = (input: string): number => [...input.matchAll(/(mul\(\d+,\d+\))|(don't\(\))|(do\(\))/g)]
   .map(item => item[0])
   .reduce((state, command) => {
      if (command.startsWith('don')) state.dont = true;
      else if (command.startsWith('do')) state.dont = false;
      if (command.startsWith('mul') && !state.dont) state.list.push(command);
      return { ...state };
   }, {dont: false, list: [] as string[]})
   .list.map(item => [...item.matchAll(/\d+/g)].map(Number))
   .map(([lhs, rhs]) => lhs * rhs)
   .sum();
