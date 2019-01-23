import React , { Component } from 'react';

import { Input , Button , List } from "antd";

import store from '../../store/store';
import {
        getOnIuputChangeAction,
        getAddTodoItemAction,
        getTodoItemClickAction
        } from "../../store/actions";

import './TodoList.css';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        TodoList.onInputChange = TodoList.onInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        TodoList.onAddTodoItem = TodoList.onAddTodoItem.bind(this);

        store.subscribe(this.handleStoreChange);
    }

    handleStoreChange = () => {
        this.setState(store.getState());
    };

    static onInputChange = e => {
        const action = getOnIuputChangeAction(e.target.value);
        store.dispatch(action);
    };

    static onAddTodoItem = () => {
        const action = getAddTodoItemAction();
        store.dispatch(action)
    };

    static onItemClick = index => {
        const action = getTodoItemClickAction(index);
        store.dispatch(action);
    };

    render() {
        return (<div>
            <Input
                className='todo-list-input'
                placeholder='添加 Todo Item'
                value={this.state.inputValue}
                onChange={TodoList.onInputChange}
            />
                <Button
                    className='todo-list-button'
                    type='primary'
                    onClick={TodoList.onAddTodoItem}
                >
                    添加
                </Button>
            <List
                className='todo-list-list'
                bordered
                dataSource={this.state.todos}
                renderItem={
                    (item , index) => (
                        <List.Item
                            onClick={TodoList.onItemClick.bind(this , index)}
                        >
                            {item}
                        </List.Item>)
                }
            />
        </div>);
    }
}

export default TodoList;
