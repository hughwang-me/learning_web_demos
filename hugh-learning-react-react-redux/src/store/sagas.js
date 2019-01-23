import {takeEvery, put} from 'redux-saga/effects';

import {
    REQUEST_TODO_LIST_ACTION,
    getUpdateTodoListAction
} from "./actions";

import axios from 'axios';

function* requestTodoList() {
    try {
        const url = "http://localhost:8080/getTodoList";
        const resp = yield axios.get(url);
        const action = getUpdateTodoListAction(resp.data.data);
        yield put(action);
    } catch (e) {
        console.log('net error')
    }
}

function* sagas() {
    yield takeEvery(REQUEST_TODO_LIST_ACTION, requestTodoList);
}

export default sagas;
