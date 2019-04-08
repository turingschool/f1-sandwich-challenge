class Sandwich {
  constructor(bread, fillings) {
    this.bread = bread || null;
    this.fillings = fillings || [];
    this.toasted = false;
  }
}

module.exports = Sandwich;