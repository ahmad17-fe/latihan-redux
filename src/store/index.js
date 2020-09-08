import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from '../reducers'

const store = createStore(reducer, applyMiddleware(logger, reduxThunk))

export default store