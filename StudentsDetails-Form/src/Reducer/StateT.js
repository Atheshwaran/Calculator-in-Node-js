const stateT = (state=[], action) => {

    switch (action.type) {

        case "UpdateT":
            return  action.payload ;

        default:
            return state;

    }
}

export default stateT;