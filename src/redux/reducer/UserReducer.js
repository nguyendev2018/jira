import { USER_LOGIN } from "../../util/constants/settingSystem"
import { GET_USER, LOGIN_ACTION, USER_SEARCH } from "../contants/CyberBug"

let userLogin = {}
if (localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    stateUser: userLogin,
    userSearch: []
}
export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOGIN_ACTION: {
            state.stateUser = action.userLogin;
            return { ...state }
        }
        case GET_USER: {
            state.userSearch = action.dataUser;
            return { ...state }
        }
        default:
            return { ...state }
    }

}