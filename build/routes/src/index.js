"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService_1 = require("../../impl/src/UserService");
var indexRouter = function (req, res) {
    res.send(UserService_1.getUserImpl(1));
};
exports.default = indexRouter;
