
export const statesT = (state) => {

    return { type: "UpdateT", payload: state };

}

export const counterT = () => {

    return { type: "IncrementT" };

}

export const statesS = (state) => {

    return { type: "UpdateS", payload: state };

}

export const counterS = () => {

    return { type: "IncrementS" };

}

export const showFormT = (show) => {

    return { type: "DisplayFormT", payload: show };

}

export const showFormS = (show) => {

    return { type: "DisplayFormS", payload: show };

}