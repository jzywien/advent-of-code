import { CRLF, NEWLINE } from '.';

describe('regex', () => {
   describe('NEWLINE', () => {
      it('matches new lines', () => {
         expect('\n'.match(NEWLINE)).not.toBeNull();
      });
      it('doesnt match plain', () => {
         expect('a'.match(NEWLINE)).toBeNull();
      });
   });

   describe('CRLF', () => {
      it('matches two new lines', () => {
         expect('\n\n'.match(CRLF)).not.toBeNull();
      });

      it('doesnt match single line', () => {
         expect('\n'.match(CRLF)).toBeNull();
      });

      it('doesnt match plain', () => {
         expect('a'.match(CRLF)).toBeNull();
      });
   });
});
