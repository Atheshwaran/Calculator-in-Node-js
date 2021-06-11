const ballsB = (balls = 0, action) => {

    switch (action.type) {

        case "IncrementBallsB":
            return ++balls;

        default:
            return balls;

    }
}

export default ballsB;