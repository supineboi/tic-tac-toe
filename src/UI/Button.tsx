import type {ReactNode} from "react";
import { offColor } from "../shared/utils";

interface ButtonType {
    height: string,
    width: string,
    fontSize: string,
    bgColor: string,
    border: string,
    children: ReactNode,
    disabled?: boolean,
    onClick?: () => void,
}

const Button: React.FC<ButtonType> = ({onClick, height, width, fontSize, bgColor, border, disabled = false, children}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                height: height,
                width: width,
                backgroundColor: disabled ? offColor : bgColor,
                borderRadius: border,
                fontSize: fontSize,
                // cursor: disabled ? 'not-allowed' : 'pointer'
            }}
            className="flex justify-center items-center font-kalam text-white p-5 shadow-[5px_5px_14px_black]">
            {children}
        </button>
    );
}
 
export default Button;