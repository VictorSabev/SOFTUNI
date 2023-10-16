let { Repository } = require('./solution.js');

const { expect } = require('chai');

describe('Repository', function () {
  describe('Initialization …', function () {
    it('Should add props property on init', function () {
      let properties = {
        name: 'string',
        age: 'number',
        birthday: 'object',
      };

      let repository = new Repository(properties);

      expect(repository).to.have.property('props');
      expect(repository.props).to.deep.equal(properties);
    });
    it('Schould have property data on init', function () {
      let properties = {
        name: 'string',
        age: 'number',
        birthday: 'object',
      };

      let repository = new Repository(properties);

      expect(repository).to.have.property('data');
      expect(typeof repository.data).include.equal('object');
      expect(repository.data).instanceOf(Map);
    });
  });
  describe('Get count', function () {
    it.skip('Should return nuber of entities', () => {
      let entity = {
        name: 'string',
        age: 'number',
        birthday: 'object',
      };

      let repository = new Repository({});

      expect(repository.count).is.equal(1);
    });
  });
  describe('Add entity')
});
