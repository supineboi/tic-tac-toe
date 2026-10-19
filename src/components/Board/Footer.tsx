import { playerColors, type GameState } from "../../shared/utils";
import Button from "../../UI/Button";

const Footer = ({gameState, onReset, onEnd} : {
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
                disabled={gameState !== 'play'}
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
