import '@util/polyfills';

const isUpdateInCorrectOrder = (pageOrderMap: Map<number, Set<number>>, update: number[]): boolean => {
   for(let i = 0; i < update.length; i++) {
      const previousPages = new Set(update.slice(0, i));
      for (let j = 0; j < previousPages.size; j++) {
         const previousPage = update[j];
         const pagesAfter = pageOrderMap.get(update[i]) || new Set();
         if (pagesAfter.has(previousPage)) return false;
      }
   }
   return true;
}

export const step1 = (input: string): number => {
   const [pageOrderingRules, updates] = input.splitAndGroup<string>();

   const pageOrderMap = pageOrderingRules
      .map(rule => rule.split('|').map(Number))
      .reduce((map: Map<number, Set<number>>, [before, after]) => {
         if (!map.has(before)) map.set(before, new Set());
         map.get(before)?.add(after);
         return map;
      }, new Map<number, Set<number>>);

   return updates
      .map(update => update.split(',').map(Number))
      .map(pages => !isUpdateInCorrectOrder(pageOrderMap, pages) ?
         0 : pages[Math.floor(pages.length / 2)])
      .sum();
};

export const step2 = (input: string): number => 0;