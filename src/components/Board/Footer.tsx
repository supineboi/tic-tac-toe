import { playerColors, type GameState } from "../../shared/utils";
import Button from "../../UI/Button";

const Footer = ({isNonOccupied, gameState, onReset, onEnd} : {
    isNonOccupied: boolean,
    gameState: GameState,
    onReset: () => void,
    onEnd: () => void
}) => {
    return ( 
        <div className="flex gap-10">
            <Button
                height="73px"
                width="162px"
                bgColor={playerColors.x}
                border="50px"
                fontSize="32px"
                onClick={onReset}
                disabled={gameState !== 'play' || isNonOccupied}
            >
                Reset
            </Button>                
            <Button
                height="73px"
                width="162px"
                bgColor={playerColors.o}
                border="50px"
                fontSize="32px"
                onClick={onEnd}
            >
                End
            </Button>
        </div>
     );
}
 
export default Footer;
