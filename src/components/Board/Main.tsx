import type { Dispatch, SetStateAction } from "react";
import { type Details, type GameState, type Players } from "../../shared/utils";
import Box from "./Box";
import Overlay from "./Overlay";

const Main = ({ gameState, player, playerInfo, reset, onNext, onPlayerChange, onChangeCursor }: {
    gameState: GameState,
    player: Players,
    playerInfo: Details,
    reset: number,
    onNext: () => void,
    onPlayerChange: (index: number, player: Players) => void,
    onChangeCursor: Dispatch<SetStateAction<Players | null>>
}) => {
    const onChangeHandler = (index: number, player: Players) => {
        onPlayerChange(index, player);
        const cursorSymbol = player === 'x' ? "o" : "x"
        onChangeCursor(cursorSymbol)
    }
    const onMouseEnterHandler = () => {
        onChangeCursor(player)
    }
    const onMouseLeaveHandler = () => {
        onChangeCursor(null)
    }

    return (
        <>
            <div className="relative flex justify-center items-center">
                {(gameState === "won" || gameState === "draw") && (
                    <Overlay
                        name={playerInfo.name}
                        player={player}
                        gameState={gameState}
                        onNext={onNext}
                    />
                )}
                <div 
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                    className={`[&>span]:size-37.5  grid grid-cols-3 my-10 [&>span]:shadow-[3px_4px_12px_black] ${gameState !== 'play' ? "opacity-45 pointer-events-none" : ""}`}
                >
                    {
                        Array.from({ length: 9 }).map((_, index) => (
                            <Box
                                key={index}
                                player={player}
                                index={index}
                                reset={reset}
                                onPlayerChange={onChangeHandler}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Main;