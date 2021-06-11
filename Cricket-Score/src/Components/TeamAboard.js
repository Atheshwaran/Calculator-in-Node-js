import React from 'react';

function TeamAboard(props) {

    const totalBall = (props.over) * 6;

    return (
        <>
            <h1> Score : {props.score}  ||   Wickets : {props.wicket}/10    ||    Balls : {props.balls}/{totalBall}   || Run-Rate : {props.runRate} </h1>
            <h1> Team A - Batting </h1>
        </>
    )
}

export default TeamAboard;