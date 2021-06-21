import NameReducer from './Name';
import TeacherReducer from './StateT'
import CounterReducerT from './CounterT';
import StudentReducer from './StateS'
import CounterReducerS from './CounterS';
import ShowFormReducerT from './ShowFormT';
import ShowFormReducerS from './ShowFormS';
import { combineReducers } from 'redux';


const store = combineReducers(

    {
        name: NameReducer,
        teacher: TeacherReducer,
        countT: CounterReducerT,
        student: StudentReducer,
        countS: CounterReducerS,
        showT: ShowFormReducerT,
        showS: ShowFormReducerS
    }
)

export default store;