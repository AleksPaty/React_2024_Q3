import { PropsWithChildren } from "react";

interface BtnProps extends PropsWithChildren {
    type: 'button' | 'submit';
    style: string,
    onClick?: () => void
}

function Button(props: BtnProps) {

    return (
        <button type={props.type} className={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;