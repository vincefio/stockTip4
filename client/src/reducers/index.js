import { combineReducers } from 'redux';
import postReducer from './postReducer';
import chartReducer from './chartReducer';

export default combineReducers({
    stocks: postReducer,
    chartData: chartReducer
});