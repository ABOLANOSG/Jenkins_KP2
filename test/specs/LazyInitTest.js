import LazyDate from "../../lazyInitialization/LazyDate.js";
import { assert } from "chai";


describe('testing design patterns', function () {
    it("Test the lazy initialization", async function () {
        
        const lazyDate = new LazyDate();
        let startTimeL = new Date(); 
        console.log(startTimeL);
        await lazyDate.getValue();
        let endTimeL = new Date(); 
        const instanceCreationTime = endTimeL - startTimeL;
        console.log(instanceCreationTime);

        
        startTimeL = new Date(); 
        console.log(startTimeL);
        await lazyDate.getValue();
        endTimeL = new Date(); 
        const secondInstanceCallTime = endTimeL - startTimeL;
        console.log(secondInstanceCallTime);

        assert.isTrue(instanceCreationTime > secondInstanceCallTime, "First call to instance didn't take more time than second call to same instance method");

    });
});