import type {ReactNode} from "react";
import { colorPanel } from "../shared/utils";

interface ButtonType {
    height: string,
    width: string,
    fontSize: string,
    bgColor: string,
    textColor?: string,
    border: string,
    children: ReactNode,
    disabled?: boolean,
    onClick?: () => void,
}

const Button: React.FC<ButtonType> = ({onClick, height, width, fontSize, bgColor, textColor, border, disabled = false, children}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                height: height,
                width: width,
                backgroundColor: disabled ? colorPanel.lite : bgColor,
                borderRadius: border,
                fontSize: fontSize,
                ...textColor ? {color: textColor} : {}
                // cursor: disabled ? 'not-allowed' : 'pointer'
            }}
            className="flex justify-center items-center font-kalam text-white p-5 shadow-[5px_5px_14px_black]">
            {children}
        </button>
    );
}
 
export default Button;