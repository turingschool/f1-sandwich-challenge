var assert = require('chai').assert;
var Sandwich = require('../exercises/sandwich');

describe('Sandwich', function() {


  it.skip('Should instantiate an object', function() {
    var sandwich = new Sandwich('Club');

    assert.isObject(sandwich)
  })

  it.skip('Should have a type', function() {
    var sandwich = new Sandwich('PB&J')

    assert.equal(sandwich.type, 'PB&J')
  })

  it.skip('Should have no ingredients by default', function() {
    var sandwich = new Sandwich('Club');

    assert.equal(sandwich.bread, null);
    
    assert.deepEqual(sandwich.fillings, []);
  })

  it.skip('Should be able to recieve ingredients', function() {
    var ingredients = ['ham', 'cheese'];

    var hamAndCheese = new Sandwich('Ham and Cheese', 'sourdough', ingredients);

    assert.deepEqual(hamAndCheese.fillings, ['ham', 'cheese'])

    assert.equal(hamAndCheese.bread, 'sourdough');
  })

  it.skip('Should not be toasted by default', function() {
    var bbq = new Sandwich('BBQ','white bun', ['pulled pork', 'BBQ sauce', 'coleslaw', 'Texas Pete']);

    assert.equal(bbq['toasted'], false);
  })
})