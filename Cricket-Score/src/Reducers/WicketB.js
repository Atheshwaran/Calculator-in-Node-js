const wicketB = (wicket = 0, action) => {

    switch (action.type) {

        case "WicketSagaB":
            return Number(action.wicket);

        default:
            return wicket;

    }
}

export default wicketB;