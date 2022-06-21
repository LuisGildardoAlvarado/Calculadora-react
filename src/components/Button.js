import React from "react";
import '../styles/Button.css'

function Button(props){

    const isOperator = value => {
        return isNaN(value) && (value !== ".") && (value !== "=");
    };

    return(
        <div className={`container-button ${isOperator(props.children) ? "operator" : ""}`.trim()}
        onClick={() => props.controlClic(props.children)}>
           {props.children}
        </div>
    )
}

export default Button