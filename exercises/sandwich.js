class Sandwich {
  constructor(type, bread, fillings) {
    this.type = type;
    this.bread = bread || null;
    this.fillings = fillings || [];
    this.toasted = false;
  }
}

module.exports = Sandwich;