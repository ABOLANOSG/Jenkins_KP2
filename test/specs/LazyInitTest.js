import LazyDate from "../../lazyInitialization/LazyDate.js";
import { assert } from "chai";


describe('testing design patterns', function () {
    it("Test the lazy initialization", async function () {
        const before = new Date(); //memorize actual date
        const lazyDate = new LazyDate();

        setTimeout(() => {
            const memorized = lazyDate.value; //get lazy date
            assert.isTrue(memorized > before, `Lazy date: ${memorized} is higher than first memorized date: ${before}`);
        }, 100);//wait 100ms to ensure time difference

    });
});