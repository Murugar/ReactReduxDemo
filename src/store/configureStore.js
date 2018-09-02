import postReducer  from '../reducers/postReducer';
import { createStore } from 'redux';

const store = createStore(postReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;