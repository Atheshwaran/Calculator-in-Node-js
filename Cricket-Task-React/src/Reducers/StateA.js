const stateA = (state, action) => {

    switch (action.type) {

        case "UpdateA":
            return { state: action.payload };

        default:
            return stateA;

    }
}

export default stateA;