import React , { Fragment } from 'react'
import ReactDom from 'react-dom'

import TodoList from './pages/TodoList';

ReactDom.render(
    <Fragment>
        <TodoList/>
    </Fragment>,
    document.querySelector('#root')
);
