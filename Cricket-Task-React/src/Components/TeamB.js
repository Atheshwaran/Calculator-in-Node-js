import React, { useEffect } from 'react';
import { incrementB, stateB, wicketB, ballB } from '../Actions/Score';
import { useSelector, useDispatch } from 'react-redux';

function TeamB(props) {

    const dispatch = useDispatch();

    const state = props.state;
    const over = props.over;
    const wicket = props.wicket;
    const setValue = props.change;


    const ballsUsed = useSelector((state) => state.ballsB);

    let playerName = "";
    let run = "";

    let playerNameFunc = (e) => {
        playerName = e.target.value;
    }

    let scoreFunc = (e) => {
        run = e.target.value;
    }

    let playerChecker = (player) => {
        if (run > 0) {

            if (state[player].status) {

                setValue((prevState) => ({
                    player1: (playerName === "player1") ? { ...prevState.player1, runs: Number(prevState.player1.runs) + Number(run) } : { ...prevState.player1 },
                    player2: (playerName === "player2") ? { ...prevState.player2, runs: Number(prevState.player2.runs) + Number(run) } : { ...prevState.player2 },
                    player3: (playerName === "player3") ? { ...prevState.player3, runs: Number(prevState.player3.runs) + Number(run) } : { ...prevState.player3 },
                    player4: (playerName === "player4") ? { ...prevState.player4, runs: Number(prevState.player4.runs) + Number(run) } : { ...prevState.player4 },
                    player5: (playerName === "player5") ? { ...prevState.player5, runs: Number(prevState.player5.runs) + Number(run) } : { ...prevState.player5 },
                    player6: (playerName === "player6") ? { ...prevState.player6, runs: Number(prevState.player6.runs) + Number(run) } : { ...prevState.player6 },
                    player7: (playerName === "player7") ? { ...prevState.player7, runs: Number(prevState.player7.runs) + Number(run) } : { ...prevState.player7 },
                    player8: (playerName === "player8") ? { ...prevState.player8, runs: Number(prevState.player8.runs) + Number(run) } : { ...prevState.player8 },
                    player9: (playerName === "player9") ? { ...prevState.player9, runs: Number(prevState.player9.runs) + Number(run) } : { ...prevState.player9 },
                    player10: (playerName === "player10") ? { ...prevState.player10, runs: Number(prevState.player10.runs) + Number(run) } : { ...prevState.player10 }
                }))

                dispatch(incrementB(run));  // Incrementing score
                dispatch(ballB());   // Incrementing ball count

                console.log(playerName + " switch : ", state[player].runs);

            }

            else
                console.log(playerName + " is already OUT !!!");

        }

        else {

            if (state[player].status) {

                setValue((prevState) => ({
                    player1: (playerName === "player1") ? { ...prevState.player1, status: false } : { ...prevState.player1 },
                    player2: (playerName === "player2") ? { ...prevState.player2, status: false } : { ...prevState.player2 },
                    player3: (playerName === "player3") ? { ...prevState.player3, status: false } : { ...prevState.player3 },
                    player4: (playerName === "player4") ? { ...prevState.player4, status: false } : { ...prevState.player4 },
                    player5: (playerName === "player5") ? { ...prevState.player5, status: false } : { ...prevState.player5 },
                    player6: (playerName === "player6") ? { ...prevState.player6, status: false } : { ...prevState.player6 },
                    player7: (playerName === "player7") ? { ...prevState.player7, status: false } : { ...prevState.player7 },
                    player8: (playerName === "player8") ? { ...prevState.player8, status: false } : { ...prevState.player8 },
                    player9: (playerName === "player9") ? { ...prevState.player9, status: false } : { ...prevState.player9 },
                    player10: (playerName === "player10") ? { ...prevState.player10, status: false } : { ...prevState.player10 }
                }))

                dispatch(ballB());   // Incrementing ball count
                dispatch(wicketB());  // Incrementing wicket

                console.log(playerName + " status: ", state[player].status);

            }

            else
                console.log(playerName + " is already OUT !!!");

        }
    }

    let updateVal = () => {

        switch (playerName) {

            case "player1":
                playerChecker(playerName);
                break;

            case "player2":
                playerChecker(playerName);
                break;

            case "player3":
                playerChecker(playerName);
                break;

            case "player4":
                playerChecker(playerName);
                break;

            case "player5":
                playerChecker(playerName);
                break;

            case "player6":
                playerChecker(playerName);
                break;

            case "player7":
                playerChecker(playerName);
                break;

            case "player8":
                playerChecker(playerName);
                break;

            case "player9":
                playerChecker(playerName);
                break;

            case "player10":
                playerChecker(playerName);
                break;

            default: return "Enter player name correctly";

        }

        dispatch(stateB(state));

    }

    useEffect(() => {
        console.log(state);
    }, [state]);

    const keyPress = (e) => {

        if (e.keyCode === 13 && ballsUsed < (over * 6) && wicket < 10)
            updateVal();  // Updating state

    }


    return (
        <>
            Ball 1: <input type='dropdown' onKeyDown={keyPress} placeholder='Enter player name' onChange={playerNameFunc} /> <input type='text' placeholder="Enter runs scored" onKeyDown={keyPress} onChange={scoreFunc} />
            Ball 2: <input type='text' onKeyDown={keyPress} placeholder='Enter player name' onChange={playerNameFunc} /> <input type='text' placeholder="Enter runs scored" onKeyDown={keyPress} onChange={scoreFunc} /> <br />
            Ball 3: <input type='dropdown' onKeyDown={keyPress} placeholder='Enter player name' onChange={playerNameFunc} /> <input type='text' placeholder="Enter runs scored" onKeyDown={keyPress} onChange={scoreFunc} />
            Ball 4: <input type='text' onKeyDown={keyPress} placeholder='Enter player name' onChange={playerNameFunc} /> <input type='text' placeholder="Enter runs scored" onKeyDown={keyPress} onChange={scoreFunc} /> <br />
            Ball 5: <input type='dropdown' onKeyDown={keyPress} placeholder='Enter player name' onChange={playerNameFunc} /> <input type='text' placeholder="Enter runs scored" onKeyDown={keyPress} onChange={scoreFunc} />
            Ball 6: <input type='text' onKeyDown={keyPress} placeholder='Enter player name' onChange={playerNameFunc} /> <input type='text' placeholder="Enter runs scored" onKeyDown={keyPress} onChange={scoreFunc} />
        </>)
}



export default TeamB;