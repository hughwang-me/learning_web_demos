import { createStore , applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer'
import sages from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
                            applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sages);

export default store;
