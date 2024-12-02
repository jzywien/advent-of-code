import '@util/polyfills';

const isSafe = (lhs: number, rhs: number, isIncreasing: boolean): boolean => {
   if (isIncreasing && lhs > rhs) return false;
   if (!isIncreasing && lhs < rhs) return false;
   if (Math.abs(lhs - rhs) > 3) return false;
   return lhs !== rhs;
}

const isReportSafe = (reportValues: number[]) => {
   const isIncreasing = reportValues[0] < reportValues[1];

   for(let i = 0; i < reportValues.length - 1; ++i) {
      if (!isSafe(reportValues[i], reportValues[i + 1], isIncreasing)) return false;
   }
   return true;
}

export const step1 = (input: string): number => input
   .lines()
   .map((line) => line.split(' ').map(val => parseInt(val)))
   .map((values) => isReportSafe(values) ? 1 : 0)
   .sum();


export const step2 = (input: string): number => input
   .lines()
   .map((line) => line.split(' ').map(val => parseInt(val)))
   .map((values) => {
      if (isReportSafe(values)) return 1;

      for(let i = 0; i < values.length; ++i) {
         const dampened = [...values.slice(0, i), ...values.slice(i + 1)];
         if (isReportSafe(dampened)) return 1;
      }

      return 0;
   })
   .sum();