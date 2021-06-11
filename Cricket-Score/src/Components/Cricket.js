import React, { useState } from 'react';
import { stateA, stateB, runsRateA, runsRateB, result } from '../Actions/Score';
import { useSelector, useDispatch } from 'react-redux';
import TeamA from './TeamA';
import TeamB from './TeamB';
import TeamAboard from './TeamAboard';
import TeamBboard from './TeamBboard';


function Cricket() {

    const [over, updateOver] = useState(1);

    const dispatch = useDispatch();

    const [statea, setValueA] = useState(
        {
            player1: { id: 1, runs: 0, status: true },
            player2: { id: 2, runs: 0, status: true },
            player3: { id: 3, runs: 0, status: true },
            player4: { id: 4, runs: 0, status: true },
            player5: { id: 5, runs: 0, status: true },
            player6: { id: 6, runs: 0, status: true },
            player7: { id: 7, runs: 0, status: true },
            player8: { id: 8, runs: 0, status: true },
            player9: { id: 9, runs: 0, status: true },
            player10: { id: 10, runs: 0, status: true }
        })

    const [stateb, setValueB] = useState(
        {
            player1: { id: 1, runs: 0, status: true },
            player2: { id: 2, runs: 0, status: true },
            player3: { id: 3, runs: 0, status: true },
            player4: { id: 4, runs: 0, status: true },
            player5: { id: 5, runs: 0, status: true },
            player6: { id: 6, runs: 0, status: true },
            player7: { id: 7, runs: 0, status: true },
            player8: { id: 8, runs: 0, status: true },
            player9: { id: 9, runs: 0, status: true },
            player10: { id: 10, runs: 0, status: true }
        })

    dispatch(stateA(statea));  // Storing the above default  "statea" to redux store.
    dispatch(stateB(stateb));  // Storing the above default  "stateb" to redux store.


    const scoreA = useSelector((state) => state.scoreA);
    const wicketA = useSelector((state) => state.wicketA);
    const ballsA = useSelector((state) => state.ballsA);
    let runRateA = useSelector((state) => state.runRateA);

    const scoreB = useSelector((state) => state.scoreB);
    const wicketB = useSelector((state) => state.wicketB);
    const ballsB = useSelector((state) => state.ballsB);
    let runRateB = useSelector((state) => state.runRateB);

    const results = useSelector((state) => state.result)


    const OverFunc = (e) => updateOver(e.target.value);
    console.log("Total no.of overs :  ", over);

    const TeamAFunc = () => {

        let arr = [];
        let i = 1;

        for (i; i <= over; i++) {

            arr.push(
                <>
                    <h1> Over No : {i} </h1>
                    <TeamA over={over} state={statea} change={setValueA} score={scoreA} wicket={wicketA} ball={ballsA} runrate={runRateA} />
                </>
            )
        }

        return arr;

    }

    if (ballsA >= 6 && ballsA % 6 === 0) {

        const rateA = dispatch(runsRateA(scoreA));
        console.log("Run rate A = ", rateA);

    }

    const TeamBFunc = () => {

        let arr = [];
        let i = 1;

        for (i; i <= over; i++) {

            arr.push(
                <>
                    <h1> Over No : {i} </h1>
                    <TeamB over={over} state={stateb} change={setValueB} score={scoreB} wicket={wicketB} ball={ballsB} runrate={runRateB} />
                </>
            )
        }

        return arr;

    }


    if (ballsB >= 6 && ballsB % 6 === 0) {

        const rateB = dispatch(runsRateB(scoreB));
        console.log("Run rate B = ", rateB);

    }


    const Result = () => {

        if (ballsA === over * 6 && (scoreB > scoreA || wicketB === 10 || ballsB === over * 6)) {

            dispatch(result(scoreA, scoreB));

            const winner = results;

            console.log(" Cricket Winner ===  ", winner);

            if (winner === "A") {
                return <p> *********  Congratulations ^^^ TEAM - A ^^^  You  -- WON THE MATCH --   *********  </p>
            }

            else if (winner === "B") {
                return <p> *********  Congratulations ^^^ TEAM - B ^^^  You  -- WON THE MATCH --   *********  </p>
            }

            else {
                return <p> *********  Good Play Both ^^^ TEAM - A & B ^^^   -- THE MATCH WAS DRAWN --   *********  </p>
            }
        }

        else
            return [];
    }

    return (
        <>
            Enter number of Overs : <input type='text' value={over} onChange={OverFunc} />
            <TeamAboard over={over} score={scoreA} wicket={wicketA} balls={ballsA} runRate={runRateA} />

            <div>
                {

                    TeamAFunc().map((overs, index) => {
                        return (<div key={index}> {overs}</div>)
                    })

                }
            </div>

            <h1> TARGET : {scoreA + 1} </h1>

            <TeamBboard over={over} score={scoreB} wicket={wicketB} balls={ballsB} runRate={runRateB} />

            <div>
                {

                    TeamBFunc().map((overs, index) => {
                        return (<div key={index}> {overs}</div>)
                    })

                }
            </div>

            <h1> RESULT :) <Result />  </h1>


        </>
    )

}

export default Cricket;