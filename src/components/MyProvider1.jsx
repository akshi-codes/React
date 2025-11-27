import MyContext from "./MyContext";    
import React, {useState} from "react";

function MyProvider1(props) {
    const [value, setValue] = useState('hello');
    return (
        <MyContext.Provider1 value = {{value, setValue}}>
            {props.children}
        </MyContext.Provider1>
        

    )
}

export default MyProvider1