const scoreA = (score = 0, action) => {

    switch (action.type) {

        case "IncrementA":
            return Number(score) + Number(action.payload);

        default:
            return score;
            
    }
}

export default scoreA;