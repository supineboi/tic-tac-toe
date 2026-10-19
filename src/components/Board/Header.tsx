import type { Dispatch, SetStateAction } from "react";
import { getPlayerColor, colorPanel, type PlayerDetails, type Players } from "../../shared/utils";
import Button from "../../UI/Button";
import PlayerPIll from "../../UI/PlayerPill";


const Header = ({activePlayer, playerDetails, setPlayerDetails}: {
    activePlayer: Players,
    playerDetails: PlayerDetails,
    setPlayerDetails: Dispatch<SetStateAction<PlayerDetails>>
}) => {
    const playerXColor = activePlayer == 'x' ? getPlayerColor("x") : colorPanel.lite;
    const playerOColor = activePlayer == 'o' ? getPlayerColor("o") : colorPanel.lite;
    const onPlayerNameChange = () => {

    }

    return ( 
        <div className="flex gap-16">
            <Button
                onClick={() => onPlayerNameChange}
                height="130px"
                width="250px"
                bgColor={playerXColor}
                border="50px"
                fontSize="32px"
            >
                <PlayerPIll
                    player="x" 
                    info={playerDetails}
                    setInfo={setPlayerDetails}
                    textColor={playerXColor}
                />
            </Button>
            <Button
                onClick={onPlayerNameChange}
                height="130px"
                width="250px"
                bgColor={playerOColor}
                border="50px"
                fontSize="32px"
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