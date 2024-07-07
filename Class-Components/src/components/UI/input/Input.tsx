import { Component, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

class Input extends Component<InputHTMLAttributes<HTMLInputElement>> {

    render() {
        return (
            <input {...this.props} className={styles.input} onChange={this.props.onChange}/>
        )
    }
}

export default Input;