var assert = require('chai').assert;
var Sandwich = require('../exercises/sandwich');

describe('Sandwich', function() {

  it('Should be a function', function() {    
    assert.isFunction(Sandwich)
  })

  it('Should instantiate an object', function() {
    var sandwich = new Sandwich();

    assert.isObject(sandwich)
  })

  it('Should have no ingredients by default', function() {
    var sandwich = new Sandwich();

    assert.equal(sandwich.bread, null);
    
    assert.deepEqual(sandwich.fillings, []);
  })

  it('Should be able to recieve ingredients', function() {
    var ingredients = ['ham', 'cheese'];

    var hamAndCheese = new Sandwich('sourdough', ingredients);

    assert.deepEqual(hamAndCheese.fillings, ['ham', 'cheese'])

    assert.equal(hamAndCheese.bread, 'sourdough');
  })

  it('Should not be toasted by default', function() {
    var bbq = new Sandwich('white bun', ['pulled pork', 'sauce', 'coleslaw']);

    assert.equal(bbq['toasted'], false);
  })
})