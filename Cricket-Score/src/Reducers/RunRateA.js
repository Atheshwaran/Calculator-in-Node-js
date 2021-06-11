
const runRateA = (runRate = 0, action) => {

    switch (action.type) {

        case "RunRateSagaA":
            return action.rate;

        default:
            return runRate;

    }
}

export default runRateA;