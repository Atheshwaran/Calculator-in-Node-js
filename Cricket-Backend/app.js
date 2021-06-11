const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


// Score Counter

app.post('/addscore', (req, res) => {

    const score = req.body.score;  // current score
    const run = req.body.runs;   // current run

    const result = Number(score) + Number(run);  // updating score

    res.status(200).send({ result });  // updated score

})


// Wickets Counter

app.post('/addwicket', (req, res) => {

    const wicket = req.body.wicket;  // current wicket count

    const result = Number(wicket) + 1;  // updating wickets count

    res.status(200).send({ result });  // updated wickets count

})


// Balls Counter

app.post('/addball', (req, res) => {

    const ball = req.body.ball;   // current balls count

    const result = Number(ball) + 1;  // updating balls count

    res.status(200).send({ result });  // updated balls count

})


// Runs rate - Calculator

app.post('/runrate', (req, res) => {

    const score = req.body.Score;   // Current runs scored per over.

    let result = Number(score / 6);   // calculating run rate
    result = result.toFixed(2);  // Upadating calculated run rate with 2 decimal points.

    res.status(200).send({ result });  // updated balls count

})


// Result --> Finding Winner of the match.

app.post('/result', (req, res) => {

    const scoreA = req.body.scoreA;   // Total runs scored by Team - A.
    const scoreB = req.body.scoreB;   // Total runs scored by Team - B.

    console.log(" A = ", scoreA);
    console.log(" B = ", scoreB);

    let result = "";

    if (scoreA > scoreB)
        result = "A";
    else if (scoreB > scoreA)
        result = 'B';
    else if (Number(scoreB) === Number(scoreA))
        result = "Both";

    res.status(200).send({ result });  // Winner result

})


app.listen(8084, () => console.log("Server 8084 STARTED.........."));