import { useRef, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
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
    const playerInfo = info[player];
    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;

        if(newName.length > 10){
            return
        }

        setInfo( prevState => ({
            ...prevState,
            [player]: {
                ...prevState[player],
                name: newName
            }
        }))
    }

    const onBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value
        if(!name || !name.trim()){
            setInfo( prevState => ({
                ...prevState,
                [player]: {
                    ...prevState[player],
                    name: player == 'x' ? "Player - I" : "Player - II"
                }
            }))
        }
    }

    return ( 
        <>
            <span className="flex flex-col justify-center items-center">
                <span className="flex justify-center items-center gap-4">
                    <input 
                        ref={inputRef}
                        className="w-40 mb-2 focus:outline-none" 
                        value={playerInfo.name}
                        onChange={(e) => onChangeHandler(e)}
                        onBlur={(e) => onBlurHandler(e)}
                    />
                </span>
                <span 
                    className="rounded-full bg-white size-12"
                    style={{
                        color: textColor
                    }}
                >{playerInfo.points}</span>
            </span>
        </>
     );
}
 
export default PlayerPIll;