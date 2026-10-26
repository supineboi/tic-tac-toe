import { useRef, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import type { PlayerDetails, Players } from "../shared/utils";

const PlayerPIll = ({
    player,
    info,
    setInfo,
    textColor
} : {
    player: Players, 
    info: PlayerDetails,
    setInfo: Dispatch<SetStateAction<PlayerDetails>>,
    textColor: string
}) => {
    const playerRomanMap =  {
        x: "I",
        o: "II"
    }
    const [playerName, setPlayerName] = useState<string>(
        `Player - ${playerRomanMap[player]}`
    );

    const inputRef = useRef<HTMLInputElement>(null);
    
    const playerInfo = info[player];

    const onClickHandler = () => {
        inputRef.current?.focus()
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;

        if(newName.length > 10){
            return
        }
        setPlayerName(newName)
    }
    const onBlurHandler = () => {
        let newName = playerName;
        if(!newName || !newName.trim()) {
            newName = player == 'x' ? "Player - I" : "Player - II";
        }
        console.log("on blur player setting name :: ", newName)
        setPlayerName(newName)
        setInfo( prevState => ({
            ...prevState,
            [player]: {
                ...prevState[player],
                name: newName
            }
        }))
    }

    return ( 
        <>
            <div 
                className="flex lg:flex-col justify-center items-center"
                onClick={() => onClickHandler()}
            >
                <span className="flex justify-center items-center gap-4">
                    <input 
                        id={`playerName-${player}`}
                        ref={inputRef}
                        className="w-40 mb-2 focus:outline-none text-center" 
                        value={playerName}
                        onChange={(e) => onChangeHandler(e)}
                        onBlur={onBlurHandler}
                    />
                </span>
                <span 
                    className="rounded-full bg-white size-12 flex justify-center items-center"
                    style={{
                        color: textColor
                    }}
                >{playerInfo.points}</span>
            </div>
        </>
     );
}
 
export default PlayerPIll;