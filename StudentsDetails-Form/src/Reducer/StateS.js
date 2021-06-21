const stateS = (state=[], action) => {

    switch (action.type) {

        case "UpdateS":
            return  action.payload ;

        default:
            return state;

    }
}

export default stateS;