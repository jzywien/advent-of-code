import { readFile } from 'node:fs/promises';

export const getInput = async (dir: string, file: string, ext: string = '.txt'): Promise<string> => {
   const input = await readFile(`${dir}/${file}${ext}`);
   const text = input.toString();
   return text;
};
