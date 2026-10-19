import { useState, type Dispatch, type SetStateAction } from "react";
import Header from "./Header";
import { type GameState, type PlayerDetails, type Players } from "../../shared/utils";
import Main from "./Main";
import Footer from "./Footer";

interface PlayerPositions {
    x: number[],
    o: number[]
}

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
    const [info, setInfo] = useState<PlayerDetails>({
        x: {
            name: "Player - I",
            points: 0
        },
        o: {
            name: "Player - II",
            points: 0
        }
    });
    const initialPlayerPos: Record<Players, number[]> = {
        x: [],
        o: []
    }
    
    const [playerPositions, setPlayerPositions] = useState<PlayerPositions>(initialPlayerPos);
    const totalOccupiedPos = playerPositions.x.length + playerPositions.o.length;
    const activePlayer: Players = totalOccupiedPos%2 === 0 ? 'x' : 'o';
    const isNonOccupied = !totalOccupiedPos
    const [reset, setReset] = useState<number>(0);

    const onPlayerHandler  =  (
        index: number, 
        player: Players
    ) => {
        const positions = {
            ...playerPositions,
            [player]: [
                ...playerPositions[player],
                index
            ]
        }
        const winner = winningPatterns.some(
            pattern => pattern.every(
                box => positions[player].includes(box)
            )
        )

        if(winner){
            setGameState("won")
            setInfo( prevState => ({
                ...prevState,
                [player]: {
                    ...prevState[player],
                    points: prevState[player].points + 1
                }
            }))
            return
        }

        const totalOccupiedPos = [
            ...positions.x,
            ...positions.o
        ]

        if(totalOccupiedPos.length === 9){
            setGameState("draw")
            return
        }

        setPlayerPositions(positions)
    }

    const onResetHandler = () => {
        setReset(prevState => prevState + 1);
        setPlayerPositions(initialPlayerPos)
    }

    const onNextHandler = () => {
        setGameState("play")
        setPlayerPositions(initialPlayerPos)
        onResetHandler()
    }

    return ( 
        <>
            <Header 
                activePlayer={activePlayer}
                info={info}
                setInfo={setInfo}
            />
            <Main 
                gameState={gameState}
                playerInfo={info[activePlayer]}
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