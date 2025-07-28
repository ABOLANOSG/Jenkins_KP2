import PizzaBuilder from "../../builder/pizzaBuilder.js";
import Pizza from "../../builder/pizza.js";
import CreatePage from "../../builderExam/CreatePage.js";
import { assert } from "chai";

describe.only("Testing Pizza contruction with builder", function () {
    it("Testing pizza is builded correctly", async function () {
       
        const pizzaBuilder = new PizzaBuilder().setPizzaSize(30)
                                                .setCheese(true)
                                                .setMushrooms(true)
                                                .setOlives(true)
                                                .buildPizza();

        assert.isTrue(pizzaBuilder instanceof Pizza, "Error, pizzaBuilder is not an instance of Pizza");
        assert.isFalse(pizzaBuilder instanceof PizzaBuilder, "Error, pizzaBuilder is an instance of PizzaBuilder");
        assert.isTrue(pizzaBuilder.diameter === 30, "Error, pizza doesn't have expected diameter");
    });

    it("Tests Builder pattern for exam", async function () {
        const pageBuilder = new CreatePage().typeAge(23)
                                            .typeEmail("userA@mail.com")
                                            .typeName("UserA")
                                            .typeWeight("60 kg")
                                            .buildPage();

        console.log(`this are object properties age: ${pageBuilder.age}, email: ${pageBuilder.email}, weight: ${pageBuilder.weight} & name: ${pageBuilder.name}`);
        assert.isTrue(pageBuilder.age === 23, "Error, age does not match with expected age");

    });

})