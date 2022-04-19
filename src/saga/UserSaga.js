import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_CATEGORY, GET_USER, LOGIN_ACTION, SIGNIN_API } from "../redux/contants/CyberBug";
import { projectService } from '../services/ProjectService';
import { userService } from '../services/UserService';
import { TOKEN, USER_LOGIN } from "../util/constants/settingSystem";
import { history } from "../util/history";

// interator function
function* SignInSaga(action) {
    try {
        // call api
        const { data } = yield call(() => userService.signIn(action.userLogin));

        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
        // action.userLogin.history.push('/register');
        history.push('/home')
        yield put({
            type: LOGIN_ACTION,
            userLogin: data.content
        })

    } catch (error) {
        console.log(error);
    }
}
function* getUserSaga(action) {
    try {
        const { data } = yield call(() => userService.getUser(action.values));

        yield put({
            type: GET_USER,
            dataUser: data.content
        })
    } catch (error) {
        console.log(error.response.data);
    }
}
function* getForm(action) {
    try {
        const { data } = yield call(() => projectService.getCategory(action.getCategory));

        yield put({
            type: GET_CATEGORY,
            getCategory: data.content
        })
    } catch (error) {

    }
}

export function* followSignIn() {
    // nghe lan cuoi de tranh nguoi dung nhap nhieu lan
    yield takeLatest(SIGNIN_API, SignInSaga)
    yield takeLatest(GET_CATEGORY, getForm)
    yield takeLatest(GET_USER, getUserSaga)

}