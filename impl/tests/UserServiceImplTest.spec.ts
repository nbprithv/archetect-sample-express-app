import 'mocha';
import {assert} from "chai";
import {getUserImpl} from "../src/UserService";
import {IUser} from "../../api/src/IUser";

describe('User Service Impl tests', function () {
    it("Get user", function () {
        let user: IUser = getUserImpl(1);

        assert.equal(user.id, 1);
        assert.equal(user.name, "foo");
        assert.equal(user.email, "bar");
    })
});