import React from 'react';

function TeamBboard(props) {

    const totalBall = (props.over) * 6;

    return (
        <>
            <h1> Score : {props.score}  ||   Wickets : {props.wicket}/10    ||    Balls : {props.balls}/{totalBall}   || Run-Rate : {props.runRate} </h1>
            <h1> Team B - Batting </h1>
        </>
    )
}

export default TeamBboard;