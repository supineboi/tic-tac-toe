import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';

const useCustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useGSAP( () => {
        const handleMouseMove = (dets: MouseEvent) => {
            gsap.set(cursorRef.current, {
                x: dets.clientX - 20,
                y: dets.clientY - 20,
            });
        }
        document.body?.addEventListener("mousemove", handleMouseMove)

        return () => {
        document.body?.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])

    return cursorRef;
}
 
export default useCustomCursor;