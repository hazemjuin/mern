class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3; // Default value of speed
    this.strength = 3; // Default value of strength
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }

  showStats() {
    console.log(`
      Name: ${this.name}
      Strength: ${this.strength}
      Speed: ${this.speed}
      Health: ${this.health}
    `);
  }

  drinkSake() {
    this.health += 10;
    console.log(`${this.name} drank sake and gained 10 health.`);
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();