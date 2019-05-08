import { combineReducers } from 'redux';
import pizza from './pizza';
import order from './order';

const rootReducer = combineReducers({
  pizza,
  order
});

export default rootReducer;
