import {addUser, getUser} from "../../api/src/IUserService";
import {IUser} from "../../api/src/IUser";

export const addUserImpl: addUser = function (name: string, email: string): IUser {
    return build_user_dto(name, email);
};

export const getUserImpl: getUser = function(id: number): IUser {
    return fetch_user_info(id);
};

function build_user_dto(name: string, email: string): IUser {
    return {
        id: 1,
        name: name,
        email: email
    }
}

function fetch_user_info(id: number): IUser {
    return {
        id: id,
        name: "foo",
        email: "bar"
    }
}

