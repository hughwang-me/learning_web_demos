import React , { Fragment } from 'react';
import ReactDOM from 'react-dom';

import TodoList from './pages/TodoList';

ReactDOM.render(
    <Fragment>
        <TodoList/>
    </Fragment>,
    document.querySelector("#root")
);
