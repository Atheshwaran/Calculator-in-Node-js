export const incrementA = (run) => {

    return { type: "IncrementA", payload: run };

}

export const wicketA = () => {

    return { type: "WicketA" };

}

export const stateA = (stateA) => {

    return { type: "UpdateA", payload: stateA };

}

export const ballA = () => {

    return { type: "IncrementBallsA" };

}

export const incrementB = (run) => {

    return { type: "IncrementB", payload: run };

}

export const wicketB = () => {

    return { type: "WicketB" };

}

export const stateB = (stateB) => {

    return { type: "Update", payload: stateB };

}

export const ballB = () => {

    return { type: "IncrementBallsB" };

}

export const runsRateA = (num) => {

    return { type: "CalculateA", runs: num };

}

export const runsRateB = (num) => {

    return { type: "CalculateB", runs: num };

}
