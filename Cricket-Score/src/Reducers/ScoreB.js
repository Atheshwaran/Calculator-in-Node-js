const scoreB = (score = 0, action) => {

    switch (action.type) {

        case "IncrementSagaB":
            return Number(action.run);

        default:
            return score;

    }
}

export default scoreB;