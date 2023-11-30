const falsy = <T>(i: T): boolean => !i;

export const groupBy = <T>(values: T[], predicate = falsy) =>
   values.reduce(
      (groups, val) => {
         if (predicate(val)) groups.push([]);
         else groups[groups.length - 1].push(val);
         return groups;
      },
      [[]] as T[][]
   );
