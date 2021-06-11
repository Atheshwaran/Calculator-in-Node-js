import ScoreReducerA from './ScoreA';
import WicketReducerA from './WicketA.js';
import StateAReducerA from './StateA';
import BallReducerA from './BallsA';
import ScoreReducerB from './ScoreB';
import WicketReducerB from './WicketB.js';
import StateAReducerB from './StateB';
import BallReducerB from './BallsB';
import RunRateReduserA from './RunRateA';
import RunRateReduserB from './RunRateB';
import { combineReducers } from 'redux';

const store = combineReducers(

    {
        scoreA: ScoreReducerA,
        wicketA: WicketReducerA,
        stateA: StateAReducerA,
        ballsA: BallReducerA,
        scoreB: ScoreReducerB,
        wicketB: WicketReducerB,
        stateB: StateAReducerB,
        ballsB: BallReducerB,
        runRateA: RunRateReduserA,
        runRateB: RunRateReduserB,

    }
)

export default store;