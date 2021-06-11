const stateB = (state, action) => {

    switch (action.type) {

        case "Update":
            return { state: action.payload };

        default:
            return stateB;

    }
}

export default stateB;