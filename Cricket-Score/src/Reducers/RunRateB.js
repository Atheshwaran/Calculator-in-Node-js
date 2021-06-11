
const runRateB = (runRate = 0, action) => {

    switch (action.type) {

        case "RunRateSagaB":
            return action.rate;

        default:
            return runRate;

    }
}

export default runRateB;