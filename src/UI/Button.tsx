import type {ReactNode} from "react";

interface ButtonType {
    bgColor: string,
    classes?: string,
    children: ReactNode,
    disabled?: boolean,
    onClick?: () => void,
}

const Button: React.FC<ButtonType> = ({bgColor, classes = "", onClick, disabled = false, children}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`flex justify-center items-center font-kalam text-white p-5 shadow-[5px_5px_14px_black] ${classes} ${disabled ? "" : "hover:brightness-110"}`}
            style={{
                backgroundColor: bgColor
            }}
        >
            {children}
        </button>
    );
}
 
export default Button;