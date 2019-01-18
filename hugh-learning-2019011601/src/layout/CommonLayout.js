import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import StorageUtil from '../utils/StorageUtil';
import LogUtil from '../utils/LogUtil';

// import NotFound from '../pages/NotFound';
import Login from '../pages/Login';

import Test from './Test.jsx';

class CommonLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            account : ''
        };
        LogUtil.debug('CommonLayout -> constructor');
    }

    componentDidMount() {
        LogUtil.debug('CommonLayout -> componentDidMount');
    }

    componentWillMount() {
        LogUtil.debug('CommonLayout -> componentWillMount');
        let account = StorageUtil.get("account");
        if(!account){
            LogUtil.debug("account is null");
        }else {
            LogUtil.debug("account is not null");
        }
    }

    componentWillUnmount() {
        LogUtil.debug('CommonLayout -> componentWillUnmount');
    }

    componentDidCatch(error, errorInfo) {
        LogUtil.debug('CommonLayout -> componentDidCatch');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogUtil.debug('CommonLayout -> componentDidUpdate');
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        LogUtil.debug('CommonLayout -> componentWillUpdate');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogUtil.debug('CommonLayout -> componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogUtil.debug('CommonLayout -> shouldComponentUpdate');
    }

    render() {
        LogUtil.debug('CommonLayout -> render');
        return <div>
            <Test/>
            <Login/>
            <DatePicker/>
        </div>
    }
}

export default CommonLayout;
