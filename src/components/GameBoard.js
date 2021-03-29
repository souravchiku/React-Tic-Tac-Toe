import React, { useEffect, useState } from 'react';
import Square from './Square'
const GameBoard = () => {

    //2 states variables-1.Current Player 2. Game State
    const [currentPlayer, setCurrentPlayer] = useState("X");

    // for draw checking
    const [moves, setMoves] = useState(0)
    const emptyGame = [
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },
        { value: null },

    ]

    const [gameState, setGameState] = useState(emptyGame)

    console.log(gameState)
    useEffect(()=>{

    },[gameState])
    
    const executeMove = index => {

        //set the current mark
        let newGameState = gameState;
        //check for new move
        if (newGameState[index].value === null) {
            newGameState[index].value = currentPlayer;
            setGameState(newGameState)

            // change the current player

            let nextPlayer = currentPlayer === "X" ? "O" : "X"
            setCurrentPlayer(nextPlayer)
            console.table(gameState)
            //check win or draw
            

            let MoveCount = moves + 1;
            setMoves(MoveCount)
            if (MoveCount === 9){
                alert('Its a Draw')
                setGameState(emptyGame)
                setMoves(0)
                setCurrentPlayer("X")
            }
            let result = chechWinOrDraw()
            if (result !== false) {
                alert(`Player ${result} wins`)
                let x = 0
                setMoves(x)
                setGameState(emptyGame)
                setCurrentPlayer("X")
            }
                

                
                
        }

    }
    //set the current mark

    //change the current player
    //check the winning condition
    //if full draw

    const chechWinOrDraw = () => {
        let win = false;

        if (gameState[0].value === gameState[1].value &&
            gameState[1].value === gameState[2].value && gameState[0].value !=null
        ) {
            win = gameState[0].value;
        }
         if (gameState[3].value === gameState[4].value &&
            gameState[4].value === gameState[5].value && gameState[3].value!=null
        ) {
            win = gameState[3].value;
        }
         if (gameState[6].value === gameState[7].value &&
            gameState[7].value === gameState[8].value && gameState[6].value !=null
        ) {
            win = gameState[6].value;
        }
         if (gameState[0].value === gameState[3].value &&
            gameState[3].value === gameState[6].value && gameState[0].value !=null
        ) {
            win = gameState[3].value;
        }
         if (gameState[1].value === gameState[4].value &&
            gameState[4].value === gameState[7].value && gameState[1].value !=null
        ) {
            win = gameState[1].value;
        }
         if (gameState[2].value === gameState[5].value &&
            gameState[5].value == gameState[8].value && gameState[2].value !=null
        ) {
            win = gameState[2].value;
        }
        if (gameState[2].value === gameState[4].value &&
            gameState[4].value == gameState[6].value && gameState[2].value !=null
        ) {
            win = gameState[2].value;
        }
        if (gameState[0].value === gameState[4].value &&
            gameState[4].value == gameState[8].value && gameState[0].value !=null
        ) {
            win = gameState[0].value;
        }
        


        return win;

    }
    function restart(){
        setGameState(emptyGame)
        setCurrentPlayer("X")
    }

    return (
        <>
            <div className="col-md-12 col-12 text-center">
                <h2>Current Player : {currentPlayer}</h2>
                <button onClick={() => restart() }> Restart </button>
            </div>

            <div className="bg-white col-md-6 offset-md-3 
        gameBoard shadow-sm row p-4 mb-2">
                {
                    gameState.map((item, key) => (
                        <Square key={key} index={key} executor={executeMove} gameState={gameState} />
                    ))
                }

            </div>
        </>
    );
};

export default GameBoard;