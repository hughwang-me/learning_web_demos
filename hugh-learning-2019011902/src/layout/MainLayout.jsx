import React , { Component } from 'react';
import ReactDOM from 'react-dom';

import LogUtil from '../utils/LogUtil';
import StorageUtil from '../utils/StorageUtil';
import TextUtil from '../utils/TextUtil';

import { Icon } from 'antd';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoList from '../pages/TodoList';

class MainLayout extends Component{

    constructor(){
        super();
        this.state = {
          todos:[]
        };
    }

    render(){
        return <div>
            <Header/>
            <Icon type="book" theme="twoTone" />TO-DO List :
            <TodoList/>
            <Footer/>
        </div>;
    }
}

export default MainLayout;
