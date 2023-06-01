import React from "react"
import { set_state_skelbimas } from "../Skelbimas/Skelbimas.jsx"

const Line = function (props)
{
    // props

    const skelbimas = props.skelbimas

    return <div
        style=
        {
            {
                padding: "0.25em 0 0.25em 0",
                border: "0",
                margin: "0.25em 0 0.25em 0",
                backgroundColor: "rgb(230, 230, 230)",
                userSelect: "none"
            }
        }
        onClick=
        {
            function ()
            {
                set_state_skelbimas(skelbimas)
            }
        }
    >
        <span>{skelbimas.pavadinimas}</span>
    </div >
}

export default Line