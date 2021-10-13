import React from "react";
import "./Input.scss";

// const Input = (props) => (
//     <div className="Input">
//         <input onKeyDown={props.send} />
//     </div>
// )
const Input = (props) => {
    return (
        <div className="Input">
            <input onKeyDown={props.send} />
        </div>
    )
}

export default Input;