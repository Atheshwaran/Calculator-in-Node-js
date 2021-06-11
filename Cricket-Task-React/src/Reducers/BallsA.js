const ballsA = (balls = 0, action) => {

    switch (action.type) {

        case "IncrementBallsA":
            return ++balls;

        default:
            return balls;

    }
}

export default ballsA;