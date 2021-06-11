import { put, call, takeLatest } from "redux-saga/effects";
import scoreA from '../Axios/ScoreA';
import scoreB from '../Axios/ScoreB';
import WicketA from '../Axios/WicketA';
import WicketB from '../Axios/WicketB';
import ballsA from '../Axios/BallsA';
import ballsB from '../Axios/BallsB';
import getRunRateA from '../Axios/RunRateA';
import getRunRateB from '../Axios/RunRateB';
import getResult from '../Axios/Result';

import { incrementA, incrementB, wicketA, wicketB, ballA, ballB, runsRateA, runsRateB, result } from '../Actions/Score';



// scoreA state updator

export function* increaseSagaA({ payload }) {

    console.log("Current score - A  =  ", payload);
    const a = yield call(scoreA, payload);   // calling axios file for updating
    console.log("Updated score - A  =  ", a.result);
    yield put({ type: "IncrementSagaA", run: Number(a.result) }); // passing updated value to update state value in reducer.

}

// dispatched action increment-A triggred function for Score A increasing

export function* incrementSagaA() {

    console.log("I am incrementSaga - A on process .......");
    yield takeLatest(incrementA().type, increaseSagaA);   // Saga calling increaseSagaA

}


// scoreB state updator

export function* increaseSagaB({ payload }) {

    console.log("Current score - B  =  ", payload);
    const b = yield call(scoreB, payload);   // calling axios file for updating
    console.log("Updated score - B  =  ", b.result);
    yield put({ type: "IncrementSagaB", run: Number(b.result) });  // passing updated value to update state value in reducer

}

// dispatched action increment-B triggred function for Score B increasing

export function* incrementSagaB() {

    console.log("I am incrementSaga - B on process .......");
    yield takeLatest(incrementB().type, increaseSagaB);  // Saga calling increaseSagaB

}


// Wicket A state updater

export function* wicketSagaA({ payload }) {

    console.log("Current Wicket - A  =  ", payload);
    const a = yield call(WicketA, payload);   // calling axios file for updating
    console.log("Updated Wicket - A  =  ", a.result);
    yield put({ type: "WicketSagaA", wicket: Number(a.result) });   // passing updated value to update state value in reducer

}

// dispatched action wicket-A triggred function for Wicket A increasing

export function* incrementWicketSagaA() {

    console.log("I am incrementWicketSaga - A on process .......");
    yield takeLatest(wicketA().type, wicketSagaA);

}


// Wicket B state updater

export function* wicketSagaB({ payload }) {

    console.log("Current Wicket - B  =  ", payload);
    const b = yield call(WicketB, payload);   // calling axios file for updating
    console.log("Updated Wicket - B  =  ", b.result);
    yield put({ type: "WicketSagaB", wicket: Number(b.result) });  // passing updated value to update state value in reducer

}


// dispatched action wicket-B triggred function for Wicket B increasing

export function* incrementWicketSagaB() {

    console.log("I am incrementWicketSaga - B on process .......");
    yield takeLatest(wicketB().type, wicketSagaB);

}


// Balls A state updater

export function* ballsSagaA({ payload }) {

    console.log("Current Ball - A  =  ", payload);
    const a = yield call(ballsA, payload);   // calling axios file for updating
    console.log("Updated Ball - A  =  ", a.result);
    yield put({ type: "IncrementBallsSagaA", ball: Number(a.result) });   // passing updated value to update state value in reducer

}

// dispatched action balls-A triggred function for balls A increasing

export function* incrementBallsSagaA() {

    console.log("I am incrementBallsSaga - A on process .......");
    yield takeLatest(ballA().type, ballsSagaA);

}

// Balls B state updater

export function* ballsSagaB({ payload }) {

    console.log("Current Ball - B  = ", payload);
    const a = yield call(ballsB, payload);       // calling axios file for updating
    console.log("Updated Ball - B  = ", a.result);
    yield put({ type: "IncrementBallsSagaB", ball: Number(a.result) });   // passing updated value to update state value in reducer

}

// dispatched action balls-B triggred function for balls B increasing

export function* incrementBallsSagaB() {

    console.log("I am incrementBallsSaga - B on process .......");
    yield takeLatest(ballB().type, ballsSagaB);

}



// Resullt state updater

export function* resultUpdation( payload ) {

    console.log("Total runs Scored by Team A & B  = ", payload);
    const a = yield call(getResult, payload);       // calling axios file for updating
    console.log("Updated result for winner =  ", a.result);
    yield put({ type: "DisplayResult", Result: a.result });   // passing updated value to update state value in reducer

}

// dispatched action result triggred function for finding result

export function* showResult() {

    console.log("I am showResult on process .......");
    yield takeLatest(result().type, resultUpdation);

}


// Run rate A state updater

export function* runsRateSagaA( payload ) {

    console.log("Current run rate - A  =  ", payload);
    const a = yield call(getRunRateA, payload);   // calling axios file for updating
    console.log("Updated run rate - A  =  ", a.result);
    yield put({ type: "RunRateSagaA", rate: Number(a.result) });   // passing updated value to update state value in reducer

}

// dispatched action runsRate-A triggred function for run rate A increasing

export function* incRunsRateSagaA() {

    console.log("I am incRunsRateSaga - A on process .......");
    yield takeLatest(runsRateA().type, runsRateSagaA);

}


// Run rate B state updater

export function* runsRateSagaB( payload ) {

    console.log("Current run rate - B  =  ", payload);
    const a = yield call(getRunRateB, payload);   // calling axios file for updating
    console.log("Updated run rate - B  =  ", a.result);
    yield put({ type: "RunRateSagaB", rate: Number(a.result) });   // passing updated value to update state value in reducer

}

// dispatched action runsRate-B triggred function for run rate B increasing

export function* incRunsRateSagaB() {

    console.log("I am incRunsRateSaga - B on process .......");
    yield takeLatest(runsRateB().type, runsRateSagaB);

}