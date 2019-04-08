var assert = require('chai').assert;
var Shop = require('../exercises/shop');
var Sandwich = require('../exercises/sandwich')

describe('Shop', function() {
  it.skip('should not have a menu by default', function() {
    var sandwichJoint = new Shop();
  
    assert.deepEqual(sandwichJoint.menu, [])
  });

  it.skip('should be able to toast a sandwich', function() {
    var sandwichShop = new Shop();
    var meatballSub = new Sandwich('Meatball Sub', 'hoagie roll', ['meatballs', 'parmesean cheese', 'oregano']);

    var toastedSandwich = sandwichShop.toastSandwich(meatballSub);
    assert.equal(toastedSandwich.toasted, true);
  })

  it.skip('should be able to make a menu', function() {
    var sandwichJoint = new Shop();
    var cucumberSandwich = new Sandwich('Cucumber Sandwich','white', ['cucumber', 'cream cheeser', 'mayo', 'dill'])
    var meatballSub = new Sandwich('Meatball Sub', 'hoagie roll', ['meatballs', 'parmesean cheese', 'oregano'])
    var turkeySammy = new Sandwich('Turkey Sandwich', 'sourdough', ['turkey', 'lettuce', 'tomato', 'mustard'])
    var dailySandwiches = [cucumberSandwich, meatballSub, turkeySammy]

    sandwichJoint.makeMenu(dailySandwiches);
    assert.deepEqual(sandwichJoint.menu, [cucumberSandwich, meatballSub, turkeySammy])
  })

  it.skip('Should have 5 of each sandwich to start', function() {
    var sandwichJoint = new Shop();
    var cucumberSandwich = new Sandwich('Cucumber Sandwich','white', ['cucumber', 'cream cheeser', 'mayo', 'dill'])
    var meatballSub = new Sandwich('Meatball Sub', 'hoagie roll', ['meatballs', 'parmesean cheese', 'oregano'])
    var turkeySammy = new Sandwich('Turkey Sandwich', 'sourdough', ['turkey', 'lettuce', 'tomato', 'mustard'])
    var dailySandwiches = [cucumberSandwich, meatballSub, turkeySammy]

    sandwichJoint.makeMenu(dailySandwiches);

    assert.equal(sandwichJoint.stock.length, 3)

    assert.deepEqual(sandwichJoint.stock[0], {sandwich:'Cucumber Sandwich', quantity: 5})
    assert.deepEqual(sandwichJoint.stock[2], {sandwich:'Turkey Sandwich', quantity: 5})
  })

  it.skip('Should be able to take orders', function() {
    var sandwichJoint = new Shop();

    var pbj = new Sandwich( 'Peanut Butter & Jelly', 'white', ['peanut butter', 'jelly'])
    var cucumberSandwich = new Sandwich('Cucumber Sandwich','white', ['cucumber', 'cream cheeser', 'mayo', 'dill'])

    sandwichJoint.makeMenu([pbj, cucumberSandwich]);

    assert.deepEqual(sandwichJoint.takeOrder('Peanut Butter & Jelly'), pbj.type);
    
    assert.equal(sandwichJoint.stock[0]["quantity"], 4)
  })
})