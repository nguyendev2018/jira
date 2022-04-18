import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
//middeware saga
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../saga/rootSaga';
import { UserReducer } from "./reducer/UserReducer";
import { CategoryReducer } from "./reducer/CatergoryReducer";
import { ProjectReducer } from "./reducer/ProjectReducer";
import { DrawerReducer } from "./reducer/DrawerReducer";

const middleWareSaga = createSagaMiddleware();

const rootReducer = combineReducers({
    UserReducer,
    CategoryReducer,
    ProjectReducer,
    DrawerReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, middleWareSaga))
// call saga
middleWareSaga.run(rootSaga)
export default store