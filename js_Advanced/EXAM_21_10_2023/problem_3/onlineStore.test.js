const onlineStore = require('./onlineStore'); 
const { expect } = require('chai'); 

describe('Online Store Function', function () {
  describe('isProductAvailable', function () {
    it("stockQunatity > 0", function () {
      const result = onlineStore.isProductAvailable('Product', 10);
      expect(result).to.equal('Great! Product is available for purchase.');
    });

    it("stockQunatity = 0", function () {
      const result = onlineStore.isProductAvailable('Product', 0);
      expect(result).to.equal('Sorry, Product is currently out of stock.');
    });

    it("stockQunatity < 0", function () {
      const result = onlineStore.isProductAvailable('Product', -1);
      expect(result).to.equal('Sorry, Product is currently out of stock.');
    });

    //invalid inputs:

    it('invalid input', function () {
      expect(() => onlineStore.isProductAvailable(123, 'a')).to.throw(
        'Invalid input.'
      );
    });

    it('invalid input', function () {
      expect(() => onlineStore.isProductAvailable('Product', '')).to.throw(
        'Invalid input.'
      );
    });

    it('invalid input', function () {
      expect(() => onlineStore.isProductAvailable('P', 2)).to.throw(
        'Invalid input.'
      );
    });

    it('invalid input', function () {
      expect(() => onlineStore.isProductAvailable({}, 4)).to.throw(
        'Invalid input.'
      );
    });



  });

  describe('canAffordProduct', function () {
    it("...", function () {
      const result = onlineStore.canAffordProduct(50, 100);
      expect(result).to.equal(
        'Product purchased. Your remaining balance is $50.'
      );
    });

    it("...", function () {
      const result = onlineStore.canAffordProduct(100, 50);
      expect(result).to.equal(
        "You don't have sufficient funds to buy this product."
      );
    });

    it('...', function () {
      expect(() => onlineStore.canAffordProduct('abc', '')).to.throw(
        'Invalid input.'
      );
    });
  });

  describe('getRecommendedProducts', function () {
    const productList = [
      { name: 'Camera', category: 'Photography' },
      { name: 'Headphones', category: 'Audio' },
      { name: 'Laptop', category: 'Electronics' },
    ];

    it("...", function () {
      const result = onlineStore.getRecommendedProducts(
        productList,
        'Photography'
      );
      expect(result).to.equal(
        'Recommended products in the Photography category: Camera'
      );
    });

    it("...", function () {
      const result = onlineStore.getRecommendedProducts(productList, 'Audio');
      expect(result).to.equal(
        'Sorry, we currently have no recommended products in the Audio category.'
      );
    });

    it('should throw an error for invalid input', function () {
      expect(() => onlineStore.getRecommendedProducts('Invalid', 123)).to.throw(
        'Invalid input.'
      );
    });
  });
});
