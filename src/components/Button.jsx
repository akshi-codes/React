import React from "react";

const Button = (props) => {
    const {name, color} = props
    return(
        <button style={{color}}>{name}</button>
    );
}

export default Button