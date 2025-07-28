import Page from "./Page.js";

export default class CreatePage {
    constructor() {
        this.page = new Page();
    }
                                   
    typeEmail(email) {
        this.page.email= email;
        return this;
    } 

    typeName(name) {
        this.page.name = name;
        return this;
    }

    typeAge(age) {
        this.page.age = age;
        return this;
    }

    typeWeight(weight) {
        this.page.weight = weight;
        return this;
    }

    buildPage() {
        return this.page;
    }

}