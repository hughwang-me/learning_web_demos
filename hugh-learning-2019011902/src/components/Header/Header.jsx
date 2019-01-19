import React , { Component } from 'react';
import ReactDOM from 'react-dom';

import LogUtil from '../../utils/LogUtil';
import StorageUtil from '../../utils/StorageUtil';
import TextUtil from '../../utils/TextUtil';

import './Header.css';

class Header extends Component{

    constructor(){
        super();
    }

    render(){
        return <div className='header-content'>
            Header
        </div>;
    }
}

export default Header;
