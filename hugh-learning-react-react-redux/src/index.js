import React , { Fragment } from 'react'
import ReactDom from 'react-dom'

import TodoList from './pages/TodoList';

import store from './store';
import { Provider } from 'react-redux';

ReactDom.render(
    <Provider store={store}>
        <TodoList/>
    </Provider>,
    document.querySelector('#root')
);
