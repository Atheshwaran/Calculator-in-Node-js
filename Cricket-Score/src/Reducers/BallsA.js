const ballsA = (balls = 0, action) => {

    switch (action.type) {

        case "IncrementBallsSagaA":
            return Number(action.ball);

        default:
            return balls;

    }
}

export default ballsA;