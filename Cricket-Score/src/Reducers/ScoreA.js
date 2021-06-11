const scoreA = (score = 0, action) => {

    switch (action.type) {

        case "IncrementSagaA":
            return Number(action.run);

        default:
            return score;
            
    }
}

export default scoreA;