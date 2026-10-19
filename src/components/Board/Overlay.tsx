import { colorPanel, getPlayerColor, type GameState, type Players } from "../../shared/utils";

const Overlay = ({
    name,
    player,
    gameState,
    onNext
} : {
    name: string
    player: Players,
    gameState: GameState,
    onNext: () => void
}) => {
    const onClickHandler = () => {
        onNext();
    }
    return ( 
        <div className="absolute inset-0 flex justify-center items-center z-10">
            <div
                className={`w-[80%] flex justify-center items-center flex-col py-10 px-14 rounded-full font-kalam text-white text-2xl leading-12 shadow-[2px_2px_5px_white]`}
                style={{
                    ...gameState === 'won' 
                    ? {
                        backgroundColor: getPlayerColor(player)
                    } : {
                        background: `linear-gradient(to right, ${getPlayerColor('x')} 50%, ${getPlayerColor('o')} 50%)`
                    }
                }}
            >
            <div>
                {gameState === "won" ? "🎉 VICTORY!" : "🤝 IT'S A DRAW!"}
            </div>

            <div className="text-center">
                {gameState === "won" ? (
                <>
                    The Board Belongs to{" "}
                    <span className="font-bold">{name}</span>
                </>
                ) : (
                "Neither player takes the crown!"
                )}
            </div>

            <button
                className="px-5 mt-2 rounded-full shadow-[2px_2px_5px_black]"
                onClick={onClickHandler}
                style={{
                    backgroundColor: gameState === 'won'
                        ? player === 'o' ? getPlayerColor('x')
                        : getPlayerColor('o')
                        : colorPanel.lite,
                    color: gameState === 'won'
                        ? "white"
                        : "black"
                }}
            >
                One More!
            </button>
            </div>
        </div>
    );
}
 
export default Overlay;