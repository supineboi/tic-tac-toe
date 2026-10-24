import { colorPanel, playerColors, type GameState } from "../../shared/utils";
import Button from "../../UI/Button";

const Footer = ({isNonOccupied, gameState, onReset, onEnd} : {
    isNonOccupied: boolean,
    gameState: GameState,
    onReset: () => void,
    onEnd: () => void
}) => {

    const commonClasses = 'h-[60px] w-[150px] text-[32px] rounded-[50px]';
    return ( 
        <div className="flex gap-10">
            <Button
                bgColor={gameState !== 'play' || isNonOccupied ? colorPanel.lite : playerColors.x}
                classes={`${commonClasses}`}
                onClick={onReset}
                disabled={gameState !== 'play' || isNonOccupied}                
            >
                Reset
            </Button>                
            <Button
                bgColor={playerColors.o}
                classes={`${commonClasses} hover:bg-black`}
                onClick={onEnd}
            >
                End
            </Button>
        </div>
     );
}
 
export default Footer;
