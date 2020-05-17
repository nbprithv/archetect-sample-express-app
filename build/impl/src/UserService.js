"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserImpl = exports.addUserImpl = void 0;
exports.addUserImpl = function (name, email) {
    return build_user_dto(name, email);
};
exports.getUserImpl = function (id) {
    return fetch_user_info(id);
};
function build_user_dto(name, email) {
    return {
        id: 1,
        name: name,
        email: email
    };
}
function fetch_user_info(id) {
    return {
        id: id,
        name: "foo",
        email: "bar"
    };
}
