class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
}

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

// Creating instances of units and effects
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Applying effects and simulating the scenario
redBeltNinja.resilience += hardAlgorithm.magnitude;
console.log(`${redBeltNinja.name} now has resilience ${redBeltNinja.resilience}`);

redBeltNinja.resilience += unhandledPromiseRejection.magnitude;
console.log(`${redBeltNinja.name} now has resilience ${redBeltNinja.resilience}`);

redBeltNinja.power += pairProgramming.magnitude;
console.log(`${redBeltNinja.name} now has power ${redBeltNinja.power}`);

// Simulating the attack
console.log(`${redBeltNinja.name} attacks ${blackBeltNinja.name}`);
blackBeltNinja.resilience -= redBeltNinja.power;
if (blackBeltNinja.resilience <= 0) {
    console.log(`${blackBeltNinja.name} is defeated.`);
}