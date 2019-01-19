import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LogUtil from '../../utils/LogUtil';
import StorageUtil from '../../utils/StorageUtil';
import TextUtil from '../../utils/TextUtil';

import {Button, Input, List} from 'antd';

import TodoItem from './TodoItem';

import './TodoList.css';

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            todo: ''
        };
        this.addItem = this.addItem.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
        this.todoItemClicked = this.todoItemClicked.bind(this);
    }

    addItem() {
        LogUtil.debug(this.state.todo);
        this.setState({
            todos: [...this.state.todos, this.state.todo],
            todo: ''
        });
    }

    inputChanged(e) {
        let todo = e.target.value;
        this.setState({
            todo: todo
        });
    }

    todoItemClicked(index) {
        let todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({
            todos: todos
        });
    }

    getItems() {
        return (
            this.state.todos.map((item, index) => {
                return (
                    <TodoItem
                        key={index}
                        text={item}
                        item={index}
                        todoItemClicked={this.todoItemClicked}/>
                );
            })
        );
    }

    render() {
        return <div>
            <div>
                <Input
                    className='addInput'
                    placeholder="增加一个 TODO"
                    value={this.state.todo}
                    onChange={this.inputChanged}
                />
                <Button
                    className='addBtn'
                    type='primary'
                    onClick={this.addItem}
                >
                    增加
                </Button>
            </div>
            {
                this.getItems()
            }
        </div>;
    }
}

export default TodoList;
