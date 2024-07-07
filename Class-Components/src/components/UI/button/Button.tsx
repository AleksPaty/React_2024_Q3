import { Component, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface BtnProps extends PropsWithChildren {
    type: 'button' | 'submit';
}

class Button extends Component<BtnProps> {

    render() {
        return (
            <button type={this.props.type} className={styles.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;