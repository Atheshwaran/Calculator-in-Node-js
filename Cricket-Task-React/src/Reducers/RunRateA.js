
const runRateA = (runRate = 0, action) => {

    switch (action.type) {

        case "CalculateA":
            let rate = Number(action.runs / 6);
            return rate.toFixed(2);

        default:
            return runRate;

    }
}

export default runRateA;