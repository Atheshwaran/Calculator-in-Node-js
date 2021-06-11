export const incrementA = (score, run) => {

    const obj = { score, run };
    return { type: "IncrementA", payload: obj };

}

export const wicketA = (prevWicket) => {

    return { type: "WicketA", payload: prevWicket };

}

export const stateA = (stateA) => {

    return { type: "UpdateA", payload: stateA };

}

export const ballA = (prevBall) => {

    return { type: "IncrementBallsA", payload: prevBall };

}

export const incrementB = (score, run) => {

    const obj = { score, run };
    return { type: "IncrementB", payload: obj };

}

export const wicketB = (prevWicket) => {

    return { type: "WicketB", payload: prevWicket };

}

export const stateB = (stateB) => {

    return { type: "Update", payload: stateB };

}

export const ballB = (prevBall) => {

    return { type: "IncrementBallsB", payload: prevBall };

}

export const runsRateA = (num) => {

    return { type: "CalculateA", runs: num };

}

export const runsRateB = (num) => {

    return { type: "CalculateB", runs: num };

}

export const result = (scorea, scoreb) => {

    const obj = { scorea, scoreb };
    return { type: "displayResult", payload: obj };

}