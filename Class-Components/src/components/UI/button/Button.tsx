import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface BtnProps extends PropsWithChildren {
    type: 'button' | 'submit';
}

function Button({children, type}: BtnProps) {

    return (
        <button type={type} className={styles.button}>
            {children}
        </button>
    )
}

export default Button;