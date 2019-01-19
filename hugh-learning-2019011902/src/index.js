import React from 'react';
import ReactDOM from 'react-dom';

import LogUtil from './utils/LogUtil';
import StorageUtil from './utils/StorageUtil';
import TextUtil from './utils/TextUtil';

import MainLayout from './layout/MainLayout';

ReactDOM.render(
    <MainLayout/> ,
    document.querySelector('#root')
);
