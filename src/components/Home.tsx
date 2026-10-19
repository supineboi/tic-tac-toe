import Button from "../UI/Button";
import { useRef, useState } from "react";
import TicTacMusic from '../assets/tic-tac-anthem.mp3'
import { icons } from "../assets/icons";

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
                className="rounded-full border p-2 border-[#E7C027] shadow-[2px_2px_6px_black]"
            >
                {isMute ? icons.volumeMute : icons.volumeUp}
            </button>
            <img src="/logo.png" className="h-[500px] w-[750px]"/>
            <Button
                height="99px"
                width="365px"
                fontSize="32px" 
                bgColor="#E7C027" 
                border="50px"
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