import { takeEvery , put } from 'redux-saga/effects';

import { GET_TODO_ITEMS_FROM_NET , getUpdateTodoItemsAction } from "./actions";

import axios from 'axios';

function* getItemsFromNet() {
    const url = 'http://localhost:8080/getTodoList';
    const resp = yield axios.get(url);
    const action = getUpdateTodoItemsAction(resp.data.data);
    yield put(action);
}

function* getTodoItemsFromNet() {
    yield takeEvery(GET_TODO_ITEMS_FROM_NET , getItemsFromNet);
}
export default getTodoItemsFromNet;
