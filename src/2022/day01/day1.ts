import '../../util/polyfills';

export const step1 = (input: string): number =>
   input
      .splitAndGroup((item) => parseInt(item, 10))
      .map((group) => group.sum())
      .max();

export const step2 = (input: string): number =>
   input
      .splitAndGroup((item) => parseInt(item, 10))
      .map((group) => group.sum())
      .desc()
      .take(3)
      .sum();
