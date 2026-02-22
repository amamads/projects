import { useState, useRef, useEffect } from "react";
import Dice from "./dice";

function GamePlace({ p1Scores, setP1Scores, p2Scores, setP2Scores }) {
    const [round, setRound] = useState(() => {
        const storageData = JSON.parse(localStorage.getItem('round'));
        return storageData ? storageData : 1;
    })
    const maxRounds = 3;

    const [playerTurn, setPlayerTurn] = useState(() => {
        const storageData = JSON.parse(localStorage.getItem('playerTurn'));
        return storageData ? storageData : 1;
    });
    const [isPlaying, setIsPlaying] = useState(false)

    const [p1CurentScore, setP1CurentScore] = useState(0)
    const [p2CurentScore, setP2CurentScore] = useState(0)


    const dice1El = useRef();
    const dice2El = useRef();

    // *______ set data to local storage ______*

    useEffect(() => { localStorage.setItem('round', round) }, [round])
    useEffect(() => { localStorage.setItem('playerTurn', playerTurn) }, [playerTurn])

    function rollDice(diceEl, setScores, curentScore, setCurentScore) {
        if (round > maxRounds) return;
        return () => {
            function throwDice() {
                const range = 6;
                const maxValid = Math.floor(0xFFFFFFFF / range) * range;
                const u32 = new Uint32Array(1);
                let val;
                do {
                    crypto.getRandomValues(u32);
                    val = u32[0];
                } while (val >= maxValid);
                return 1 + (val % range);
            }
            // var diceNum = 1;
            var diceNum = throwDice();
            for (var i = 1; i <= 6; i++) {
                diceEl.current.classList.remove('show-' + i);
                if (diceNum === i) {
                    
                    // ______ when the dice number is duplicate give it animation ______*
                    if (curentScore === diceNum) {
                        const index = i;
                        diceEl.current.classList.add('show-rotate');
                        setTimeout(() => {
                            diceEl.current.classList.remove('show-rotate');
                            diceEl.current.classList.add('show-' + index);
                        }, 500)
                    } else {
                        const tranNum = (i + 9) % 6;
                        diceEl.current.classList.add('show-' + i);
                    }

                    setTimeout(() => {
                        setCurentScore(diceNum);

                        setScores(prev => {
                            const newScore = [...prev];
                            newScore[round - 1] += diceNum
                            return newScore;
                        })
                    }, 1000);
                }
            }
            const diceAudio = new Audio('./dice-audio.mp3');
            diceAudio.play();
        }
    }
    const rollDice1 = rollDice(dice1El, setP1Scores, p1CurentScore, setP1CurentScore);
    const rollDice2 = rollDice(dice2El, setP2Scores, p2CurentScore, setP2CurentScore);



    // *______ for test ______*
    function doTurn(dice) {
        if (isPlaying) return;
        setIsPlaying(true);
        dice();
        setTimeout(() => {
            dice();
        }, 100);
        setTimeout(() => {
            dice();
        }, 300);
        setTimeout(() => {
            if (playerTurn === 2) setRound(prev => prev + 1)

            setPlayerTurn((playerTurn + 1) % 2 || 2)
            setIsPlaying(false);
        }, 300);
    }

    // function doTurn(dice) {
    //     if (isPlaying) return;
    //     setIsPlaying(true);
    //     dice();
    //     setTimeout(() => {
    //         dice();
    //     }, 2000);
    //     setTimeout(() => {
    //         dice();
    //     }, 4000);
    //     setTimeout(() => {
    //         if (playerTurn === 2) setRound(prev => prev + 1)
    //         setPlayerTurn((playerTurn + 1) % 2 || 2)
    //         setIsPlaying(false);
    //     }, 6000);
    // }

    function reStart() {
        localStorage.clear()
        setTimeout(() => location.reload(), 10);
    }

    return (
        <section id='gamePlace'
            className='flex overflow-hidden rounded-xl shadow-2xl relative'>
            <div className={`player ${playerTurn === 1 ? 'bg-itemBgActive' : ''}`}>
                <h3>player 1</h3>
                <h1 className='score'>{round > maxRounds ? 0 : p1Scores[round - 1]}</h1>
                <div className="dice-con">
                    <Dice ref={dice1El} />
                </div>
                <div className={`score-box ${playerTurn === 1 ? 'bg-primary' : ''}`}>
                    <h4 className='current'>current</h4>
                    <p className='sumNumber'>{p1CurentScore}</p>
                </div>
            </div>

            <div className={`player ${playerTurn === 2 ? 'bg-itemBgActive' : ''}`}>
                <h3>player 2</h3>
                <h1 className='score'>{round > maxRounds ? 0 : p2Scores[round - 1]}</h1>
                <div className="dice-con">
                    <Dice ref={dice2El} />
                </div>
                <div className={`score-box ${playerTurn === 2 ? 'bg-primary' : ''}`}>
                    <h4 className='current'>current</h4>
                    <p className='sumNumber'>{p2CurentScore}</p>
                </div>
            </div>

            <div id="btns"
                className="absolute grid justify-items-center left-[50%] translate-x-[-50%] h-full w-full">
                <button className="btn top-[5%]"
                    onClick={reStart}>🔁 NEW GAME</button>
                <button className="btn bottom-[25%]"
                    onClick={() => playerTurn === 1 ? doTurn(rollDice1) : doTurn(rollDice2)}
                >🎲 ROLL DICE</button>
            </div>
        </section>
    )
}
export default GamePlace;