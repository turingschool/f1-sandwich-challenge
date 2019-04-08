class Shop {
  constructor() {
    this.menu = [];
    this.stock = [];

  }

  toastSandwich(sandwich) {
    sandwich.toasted = true;
    return sandwich;
  }

  makeMenu(sandwiches) {
    for (var i = 0; i < sandwiches.length; i++) {
      this.menu.push(sandwiches[i])
      this.stock.push({sandwich:sandwiches[i].type, quantity:5})
    }
  }

  takeOrder(sandwichName) {
    for (var i = 0; i < this.stock.length; i++) {
      if (this.stock[i].sandwich === sandwichName) {
        this.stock[i].quantity --;
      }
    }

    return sandwichName;
  }
  
}

module.exports = Shop;