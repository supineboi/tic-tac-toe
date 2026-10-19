import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';

const useCustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP( () => {
        const handleMouseMove = (dets: MouseEvent) => {
            gsap.to(cursorRef.current, {
                x: dets.x - 20,
                y: dets.y - 20,
                duration: 0
            })
        }
        document.body?.addEventListener("mousemove", handleMouseMove)

        return () => {
        document.body?.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])

    return cursorRef;
}
 
export default useCustomCursor;