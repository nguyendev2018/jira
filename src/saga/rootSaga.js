import { all } from "redux-saga/effects"
import * as UserSaga from './UserSaga'
import * as ProjectSaga from './ProjectSaga'

export function* rootSaga() {
    yield all([
        // follow action saga cyber
        UserSaga.followSignIn(),
        ProjectSaga.followProjectSaga()
    ])
}