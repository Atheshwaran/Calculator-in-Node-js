const wicketB = (wicket = 0, action) => {

    switch (action.type) {

        case "WicketB":
            return ++wicket;

        default:
            return wicket;

    }
}

export default wicketB;