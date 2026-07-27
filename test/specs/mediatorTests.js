import { assert } from "chai";
import ConcreteChatRoom from "../../mediator/ConcreteMediator.js";
import User from "../../mediator/User.js";

describe("Testing Mediator Pattern", function () {
    let chatRoom;
    let ana;
    let carlos;
    let maria;

    beforeEach(function () {
        chatRoom = new ConcreteChatRoom();
        ana = new User("Ana");
        carlos = new User("Carlos");
        maria = new User("Maria");

        chatRoom.register(ana);
        chatRoom.register(carlos);
        chatRoom.register(maria);
    });

    it("should register and connect users to the mediator", function () {
        assert.lengthOf(chatRoom.users, 3);
        assert.strictEqual(ana.mediator, chatRoom);
        assert.strictEqual(carlos.mediator, chatRoom);
        assert.strictEqual(maria.mediator, chatRoom);
    });

    it("should reject a duplicated username", function () {
        const anotherAna = new User("Ana");
        const result = chatRoom.register(anotherAna);

        assert.isFalse(result);
        assert.lengthOf(chatRoom.users, 3);
        assert.isNull(anotherAna.mediator);
    })
});