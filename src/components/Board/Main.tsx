import { type Details, type GameState, type Players } from "../../shared/utils";
import Box from "./Box";
import Overlay from "./Overlay";

const Main = ({gameState, player, playerInfo, reset, onNext, onPlayerChange} : {
    gameState: GameState,
    player: Players,
    playerInfo: Details,
    reset: number,
    onNext: () => void,
    onPlayerChange: (index: number, player: Players) => void
}) => {
    const onChangeHandler = (index: number, player: Players) => {
        onPlayerChange(index, player);
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
                <div className={`[&>span]:size-37.5  grid grid-cols-3 py-10 [&>span]:shadow-[3px_4px_12px_black] ${gameState !== 'play' ? "opacity-45 pointer-events-none" : ""}`}>
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