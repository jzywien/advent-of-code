export * from './group';
export * from './polyfill';

export const times = (num: number, cb: (ndx: number) => any) => {
   for (let i = 0; i < num; ++i) cb(i);
};

export const wrap = <T>(val: T | T[]): T[] => (Array.isArray(val) ? val : [val]);
