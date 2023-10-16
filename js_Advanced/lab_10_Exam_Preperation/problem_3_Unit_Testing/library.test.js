const library = require('./library');
const { assert, expect } = require('chai');

describe('Library Test', () => {
  describe('calcPreiceOfBook tests', () => {
    it('invalid input - name of the book', () => {
      expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
    });

    it('invalid input - year', () => {
      expect(() => library.calcPriceOfBook('Book', 'year')).to.throw(
        'Invalid input'
      );
    });

    it('Calculate discaunt added - correct', () => {
      expect(library.calcPriceOfBook('Book', 1950)).to.equal(
        'Price of Book is 10.00'
      );
    });

    it('Calculate discaunt added - correct', () => {
      expect(library.calcPriceOfBook('Book', 1980)).to.equal(
        'Price of Book is 10.00'
      );
    });

    it('Calculate discaunt not added - correct', () => {
      expect(library.calcPriceOfBook('Book', 1981)).to.equal(
        'Price of Book is 20.00'
      );
    });
  });

  describe('findBook tests', () => {
    it('book array - empty', () => {
      expect(() => library.findBook([], 'Book')).to.throw(
        'No books currently available'
      );
    });

    it('book array - not amoung instock', () => {
      expect(library.findBook(['Book Of Heavy metal', 'Hankok'], 'Bamby')
      ).to.equal('The book you are looking for is not here!');
    });

    it('book array - book found instock', () => {
      expect(
        library.findBook(['Book Of Heavy metal', 'Hankok'], 'Hankok')
      ).to.equal('We found the book you want.');
    });
  });

    describe('arrangeTheBooks tests', () => {
      it('input not a number - invalid input', () => {
        expect(() => library.arrangeTheBooks('string')).to.throw('Invalid input');
      });

      it('input a floating number - invalid input', () => {
        expect(() => library.arrangeTheBooks(10.5)).to.throw('Invalid input');
      });

      it('input is a nagitve number - valid input', () => {
        expect(() => library.arrangeTheBooks(-10)).to.throw('Invalid input');
      });

      it('input is a number < 40 - valid input', () => {
        expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
      });

      it('input is a number > 40 - valid input', () => {
        expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
      });

      it('input is a number = 40 - valid input', () => {
        expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
      });
 
    });
});
