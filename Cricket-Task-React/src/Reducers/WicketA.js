const wicketA = (wicket = 0, action) => {

    switch (action.type) {

        case "WicketA":
            return ++wicket;

        default:
            return wicket;

    }
}

export default wicketA;