import { File } from './file';
import { Directory } from './directory';

export interface EntityVisitor {
   sizes: number[];
   visitFile(file: File): void;
   visitDirectory(directory: Directory): void;
}
