import { useState, type Dispatch, type SetStateAction } from "react";
import Header from "./Header";
import { type GameState, type PlayerDetails, type Players } from "../../shared/utils";
import Main from "./Main";
import Footer from "./Footer";

type WinningPatterns = number[][]

const winningPatterns: WinningPatterns= [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal
    [2, 4, 6], // Reverse diagonal
];

const Board = ({onChangeCursor, onEndHandler} : {
    onChangeCursor: Dispatch<SetStateAction<Players | null>>,
    onEndHandler: () => void
}) => {
    const [gameState, setGameState] = useState<GameState>("play");
    const [playerDetails, setPlayerDetails] = useState<PlayerDetails>({
        x: {
            name: "Player - I",
            points: 0,
            positions: []
        },
        o: {
            name: "Player - II",
            points: 0,
            positions: []
        }
    });
    const [reset, setReset] = useState<number>(0);

    const totalOccupiedPos = playerDetails.x.positions.length + playerDetails.o.positions.length;
    const activePlayer: Players = totalOccupiedPos%2 === 0 ? 'x' : 'o';
    const isNonOccupied = !totalOccupiedPos

    const onPlayerHandler  =  (
        index: number, 
        player: Players
    ) => {
        const details = {
            ...playerDetails,
            [player]: {
                ...playerDetails[player],
                positions: [
                    ...playerDetails[player].positions,
                    index
                ]
            }
        }
        const winner = winningPatterns.some(
            pattern => pattern.every(
                box => details[player].positions.includes(box)
            )
        )

        if(winner){
            setGameState("won")
            setPlayerDetails( prevState => ({
                ...prevState,
                [player]: {
                    ...prevState[player],
                    points: prevState[player].points + 1
                }
            }))
            return
        }

        if((totalOccupiedPos + 1) === 9){
            setGameState("draw")
            return
        }
        setPlayerDetails(details)
    }
    const onResetHandler = () => {
        setReset(prevState => prevState + 1);
        setPlayerDetails( prevState => ({
            x: {
                ...prevState.x,
                positions: []
            },
            o: {
                ...prevState.o,
                positions: []
            }
        }))
    }
    const onNextHandler = () => {
        setGameState("play")
        setPlayerDetails( prevState => ({
            x: {
                ...prevState.x,
                positions: []
            },
            o: {
                ...prevState.o,
                positions: []
            }
        }))
        onResetHandler()
    }

    return ( 
        <>
            <Header 
                activePlayer={activePlayer}
                playerDetails={playerDetails}
                setPlayerDetails={setPlayerDetails}
            />
            <Main 
                gameState={gameState}
                playerInfo={playerDetails[activePlayer]}
                player={activePlayer} 
                reset={reset} 
                onPlayerChange={onPlayerHandler} 
                onNext={onNextHandler}
                onChangeCursor={onChangeCursor}
            />
            <Footer 
                isNonOccupied={isNonOccupied}
                gameState={gameState}
                onEnd={onEndHandler} 
                onReset={onResetHandler} 
            />
        </>
    );
}
 
export default Board;