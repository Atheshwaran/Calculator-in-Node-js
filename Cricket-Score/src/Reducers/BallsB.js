const ballsB = (balls = 0, action) => {

    switch (action.type) {

        case "IncrementBallsSagaB":
            return Number(action.ball);

        default:
            return balls;

    }
}

export default ballsB;