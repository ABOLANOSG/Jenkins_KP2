import Pizza from "./pizza.js";

export default class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza(); 
    }

    setPizzaSize(pizzaDiameter) {
        this.pizza.diameter = pizzaDiameter;
        return this;
    }

    setCheese(withCheese) {
        this.pizza.hasCheese = withCheese;
        return this;
    }

    setMushrooms(withMushrooms) {
        this.pizza.hasMushrooms = withMushrooms;
        return this;
    }

    setOlives(withOlives) {
        this.pizza.hasOlives = withOlives;
        return this;
    }

    buildPizza() {
        return this.pizza;
    }
}