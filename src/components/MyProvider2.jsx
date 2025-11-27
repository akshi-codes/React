import MyContext from "./MyContext";    
import React, {useState} from "react";

function MyProvider2(props) {
    const [state, setState] = useState(true)
    return (
        <MyContext.Provider2 value = {{state, setState}}>
            {props.children}
        </MyContext.Provider2>
    )
}

export default MyProvider2