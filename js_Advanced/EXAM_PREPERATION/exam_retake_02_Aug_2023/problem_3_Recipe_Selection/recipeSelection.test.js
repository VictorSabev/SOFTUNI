const recipeSelection = require('./recipeSelection');
const { expect } = require('chai');

describe('Testing recipeSelection', () => {
  describe('Testing isTypeSuitable', () => {
    it('Tests smth', () => {
      expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal(
        'This recipe is not suitable for vegetarians'
      );
    });

    it('Tests smth', () => {
      expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal(
        'This recipe is not suitable for vegans'
      );
    });

    it('Tests smth', () => {
      expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal(
        'This recipe is not suitable for vegans'
      );
    });

    it('Tests smth', () => {
      expect(recipeSelection.isTypeSuitable('Dairy', 'Meatlover')).to.equal(
        'This recipe is suitable for your dietary restriction'
      );
    });

    it('Tests smth', () => {
      expect(() => recipeSelection.isTypeSuitable(4, 'Meatlover')).to.throw(
        'Invalid input'
      );
    });

    it('Tests smth', () => {
      expect(() => recipeSelection.isTypeSuitable('Dairy', 5)).to.throw(
        'Invalid input'
      );
    });
  });
  describe('Testing isItAffordable', () => {
   
   
   
    it('Tests smth', () => {
      expect(recipeSelection.isItAffordable(20, 10)).to.equal(
        "You don't have enough budget to afford this recipe"
      );
    });




    it('Tests smth', () => {
      expect(recipeSelection.isItAffordable(5, 40)).to.equal(
        'Recipe ingredients bought. You have 35$ left'
      );
    });


    it('Tests smth', () => {
      expect(() => recipeSelection.isItAffordable('JIJ', 10)).to.throw(
        "Invalid input"
      );
    });

    it('Tests smth', () => {
      expect(() => recipeSelection.isItAffordable(10, 'S')).to.throw(
        "Invalid input"
      );
    });


  });

  describe('Testing getRecipesByCategory', () => {
    

    it('Tests smth', () => {
      expect(() => recipeSelection.getRecipesByCategory(10, 4)).to.throw(
        "Invalid input"
      );
    });


    it('Tests smth', () => {
      expect(() => recipeSelection.getRecipesByCategory({}, 4)).to.throw(
        "Invalid input"
      );
    });



    it('Tests smth', () => {
      expect(() => recipeSelection.getRecipesByCategory('String', 4)).to.throw(
        "Invalid input"
      );
    });



    it('Tests smth', () => {
      expect(() => recipeSelection.getRecipesByCategory([], 4)).to.throw(
        "Invalid input"
      );
    });



    it('Tests smth', () => {
      expect(() => recipeSelection.getRecipesByCategory([], {})).to.throw(
        "Invalid input"
      );
    });

    it('Tests smth', () => {
      expect(() => recipeSelection.getRecipesByCategory([], [])).to.throw(
        "Invalid input"
      );
    });




  });
});
