const scoreB = (score = 0, action) => {

    switch (action.type) {

        case "IncrementB":
            return Number(score) + Number(action.payload);

        default:
            return score;

    }
}

export default scoreB;