import Button from "../UI/Button";
import { useRef, useState } from "react";
import TicTacMusic from '../assets/sound.mp3'
import { icons } from "../assets/icons";
import { colorPanel } from "../shared/utils";

const Home = ({startHandler} : {
    startHandler: () => void
}) => {
    const [isMute, setIsMute] = useState<boolean>(true);
    
    const audioRef = useRef<HTMLAudioElement>(null);

    const onClickHandler = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isMute) {
            try {
                await audio.play();
                setIsMute(false);
            } catch (error) {}
        } else {
            audio.pause();
            setIsMute(true);
        }
    };

    return ( 
        <>
            <button 
                onClick={onClickHandler}
                className="rounded-full border p-2 shadow-[2px_2px_6px_black]"
                style={{
                    borderColor: colorPanel.dark,
                    color: colorPanel.dark
                }}
            >
                {isMute ? icons.volumeMute : icons.volumeUp}
            </button>
            <img src="/logo.png" className="h-[250px] w-[450px] lg:h-[500px] lg:w-[750px]"/>
            <Button
                bgColor={colorPanel.lite}
                classes={`h-[50px] w-[260px] text-[24px] lg:h-[99px] lg:w-[356px] lg:text-[32px] rounded-[50px] !text-black`}
                onClick={startHandler}
            >🥊 Throw Hands 👊
            </Button>
            <audio   
                ref={audioRef} 
                src={TicTacMusic} 
                preload="auto"
                loop
            />
        </>
    );
}
 
export default Home;