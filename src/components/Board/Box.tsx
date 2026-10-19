import { useEffect, useState } from "react";
import { getPlayerColor, type Players } from "../../shared/utils";

type Position = "top" | "bottom" | "right" | "left";
type Border = "borderTopColor" | "borderBottomColor" | "borderRightColor" | "borderLeftColor" 

const positionMapping : Record<number, Position[]> = {
    0: ["bottom", "right"],
    1: ["bottom"],
    2: ["bottom", "left"],
    3: ["right"],
    4: [],
    5: ["left"],
    6: ["right", "top"],
    7: ["top"],
    8: ["left", "top"]
}

const borderClasses: Record<Position, string> = {
    top: `border-t-10 border-t-[${getPlayerColor("o")}]`,
    bottom: `border-b-10 border-b-[${getPlayerColor("o")}]`,
    right: `border-r-10 border-r-[${getPlayerColor("x")}]`,
    left: `border-l-10 border-l-[${getPlayerColor("x")}]`,
}

const borderMapping: Record<Position, Border> = {
  top: "borderTopColor",
  bottom: "borderBottomColor",
  right: "borderRightColor",
  left: "borderLeftColor",
};


const borderColors: Record<Position, string> = {
    top: getPlayerColor("o"),
    bottom: getPlayerColor("o"),
    right: getPlayerColor("x"),
    left: getPlayerColor("x"),
}

const Box = ({index, player, reset, onPlayerChange}: {
    index: number,
    player: Players,
    reset: number,
    onPlayerChange: ( index: number, player: Players) => void
}) => {
    let applyClasses = 'flex justify-center items-center '
    let styles: Partial<Record<Border, string>> = {};

    if(positionMapping[index].length){
        const [
            posA,
            posB
        ]  = positionMapping[index];

        if(posA){
            applyClasses += borderClasses[posA]
            styles[borderMapping[posA]] = borderColors[posA]
        }
        if(posB){
            applyClasses += ` ${borderClasses[posB]}`
            styles[borderMapping[posB]] = borderColors[posB]
        }

    }

    const [activePlayer, setActivePlayer] = useState<Players>();

    const onClickHandler = () => {
        setActivePlayer(player);
        onPlayerChange(index, player);
    }

    useEffect( () => {
        setActivePlayer(undefined);
    }, [reset])

    return ( 
        <>
            <span 
                className={applyClasses}
                style={styles}
                {...(!activePlayer && {
                    onClick: () => onClickHandler(),
                })}
            >
                {
                    <span 
                        className={`size-[70%] rounded-[50%] flex justify-center items-center text-6xl font-bold`}
                        style={{
                            color: activePlayer ? getPlayerColor(activePlayer) : '',
                        }}
                    >{activePlayer?.toUpperCase()}
                    </span>
                }
            </span>
        </>
     );
}
 
export default Box;