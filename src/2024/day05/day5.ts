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

const generatePageOrderMap = (rules: [number, number][]): Map<number, Set<number>> =>
   rules.reduce((map: Map<number, Set<number>>, [before, after]) => {
         if (!map.has(before)) map.set(before, new Set());
         map.get(before)?.add(after);
         return map;
      }, new Map<number, Set<number>>);

export const step1 = (input: string): number => {
   const [pageOrderingRules, updates] = input.splitAndGroup<string>();
   const rules = pageOrderingRules.map(rule => rule.split('|').map(Number) as [number, number]);
   const pageOrderMap = generatePageOrderMap(rules);

   return updates
      .map(update => update.split(',').map(Number))
      .filter(update => isUpdateInCorrectOrder(pageOrderMap, update))
      .map(update => update[Math.floor(update.length / 2)])
      .sum();
};

const sortUpdate = (update: number[], rules: [number, number][]) => {
   const dependencies = new Map<number, Set<number>>();
   update.forEach(page => dependencies.set(page, new Set()));

   for (const [a,b] of rules) {
      if (dependencies.has(a) && dependencies.has(b)) {
         dependencies.get(b)!.add(a);
      }
   }

   const sorted: number[] = [];
   const visited = new Set<number>();

   const visit = (page: number) => {
      if (visited.has(page)) return;
      visited.add(page);
      dependencies.get(page)?.forEach(visit);
      sorted.push(page);
   }

   update.forEach(page => visit(page));

   return sorted;
}

export const step2 = (input: string): number => {
   const [pageOrderingRules, updatesStr] = input.splitAndGroup<string>();
   const updates = updatesStr.map(update => update.split(',').map(Number));
   const rules = pageOrderingRules.map(rule => rule.split('|').map(Number) as [number, number]);
   const fullPageOrderMap = generatePageOrderMap(rules)

   return updates
      .filter(update => !isUpdateInCorrectOrder(fullPageOrderMap, update))
      .map(update => sortUpdate(update, rules))
      .map(update => update[Math.floor(update.length / 2)])
      .sum();
};