import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {Input, Button, List} from 'antd'

import './TodoList.css';

import store from '../../store';
import {
    getInputChangeAction,
    getAddClickedAction,
    getRequestTodoListAction
} from "../../store/actions";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddClicked = this.handleAddClicked.bind(this);

        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        store.dispatch(getRequestTodoListAction());
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleInputChange(e) {
        store.dispatch(getInputChangeAction(e.target.value));
    }

    handleAddClicked() {
        store.dispatch(getAddClickedAction());
    }

    render() {
        return (<div>
            <Input
                className='todo-list-input'
                placeholder='输入 Item'
                value={this.state.inputValue}
                onChange={this.handleInputChange}
            />
            <Button
                className='todo-list-button'
                type='primary'
                onClick={this.handleAddClicked}
            >
                添加
            </Button>
            <div>
                <List
                    className='todo-list-list'
                    bordered
                    dataSource={this.state.todos}
                    renderItem={(item) => (<List.Item>{item}</List.Item>)}
                />
            </div>
        </div>)
    }

}

export default TodoList;
