import type { Dispatch, SetStateAction } from "react";
import { getPlayerColor, colorPanel, type PlayerDetails, type Players } from "../../shared/utils";
import Button from "../../UI/Button";
import PlayerPIll from "../../UI/PlayerPill";


const Header = ({activePlayer, playerDetails, setPlayerDetails}: {
    activePlayer: Players,
    playerDetails: PlayerDetails,
    setPlayerDetails: Dispatch<SetStateAction<PlayerDetails>>
}) => {
    const commonClasses = 'h-[60px] w-[300px] text-[24px] lg:h-[130px] lg:w-[250px] lg:text-[32px] rounded-[50px]'
    const playerXColor = activePlayer == 'x' ? getPlayerColor("x") : colorPanel.lite;
    const playerOColor = activePlayer == 'o' ? getPlayerColor("o") : colorPanel.lite;
    
    const onPlayerNameChange = () => {}

    return ( 
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
            <Button
                bgColor={playerXColor}
                classes={`${commonClasses}`}
                onClick={() => onPlayerNameChange}
            >
                <PlayerPIll
                    player="x" 
                    info={playerDetails}
                    setInfo={setPlayerDetails}
                    textColor={playerXColor}
                />
            </Button>
            <Button
                bgColor={playerOColor}
                classes={`${commonClasses}`}
                onClick={onPlayerNameChange}
            >
                <PlayerPIll
                    player="o"
                    info={playerDetails}
                    setInfo={setPlayerDetails}
                    textColor={playerOColor}
                />
            </Button>
        </div>
    );
}
 
export default Header;