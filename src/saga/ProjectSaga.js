import { delay, call, takeLatest, put } from 'redux-saga/effects';
import { ALL, CLOSE_DRAWER, CREATE, DELETE_FORM, GET_DETAIL, PUT_DETAIL, UPDATE_FORM } from '../redux/contants/CyberBug';
import { projectService } from '../services/ProjectService';
import { history } from "../util/history";
import { notification } from 'antd';
function* getAll(action) {

    try {
        const { data } = yield call(() => projectService.allProjectAuthorization());
        yield put({
            type: ALL,
            dataAll: data.content
        })
    } catch (error) {
        console.log(error);
    }
}
function* create(action) {
    try {
        const { data } = yield call(() => projectService.createProjectAuthorization(action.createForm))
        yield delay(500)
        history.push('/all')
    } catch (error) {
        console.log(error);
    }
}
function* updateForm(action) {

    try {
        yield call(() => projectService.updateProject(action.values));
        yield put({
            type: CLOSE_DRAWER
        })
    } catch (error) {
        console.log(error.response.data);
    }
}
function* removeForm(action) {

    try {
        yield call(() => projectService.deleteProject(action.deleteId))
        notification.info({
            message: `Delete Success`,
        });

    } catch (error) {
        notification.info({
            message: `Delete Error`,
        });
    }
}
function* getDetail(action) {
    console.log(action);
    try {
        const { data } = yield call(() => {
            projectService.getDetailProject(action.projectId)
        })
        console.log(data);
        // yield put({
        //     type: PUT_DETAIL,
        //     projectDetail: data
        // })
    } catch (error) {
        console.log(error.response.data);
    }
}
export function* followProjectSaga() {
    yield takeLatest(ALL, getAll);
    yield takeLatest(CREATE, create)
    yield takeLatest(UPDATE_FORM, updateForm);
    yield takeLatest(DELETE_FORM, removeForm);
    yield takeLatest(GET_DETAIL, getDetail);

}