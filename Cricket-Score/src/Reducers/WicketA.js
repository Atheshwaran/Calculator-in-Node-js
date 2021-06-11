const wicketA = (wicket = 0, action) => {

    switch (action.type) {

        case "WicketSagaA":
            return Number(action.wicket);

        default:
            return wicket;

    }
}

export default wicketA;