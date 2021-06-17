import NameReducer from './Name';
import StateReducer from './State'
import CounterReducer from './Counter';
import { combineReducers } from 'redux';

const store = combineReducers(

    {
        name: NameReducer,
        student: StateReducer,
        count: CounterReducer
    }
)

export default store;