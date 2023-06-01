import React from "react"
import Line from "./Line.jsx"

var state_results
export var set_state_results

const Results = function ()
{
    // states

    [state_results, set_state_results] = React.useState([])

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "1em",
                border: "0",
                margin: "1em auto 0 auto",
                textAlign: "left",
                backgroundColor: "rgb(240, 240, 240)"
            }
        }
    >
        {
            function ()
            {
                const components = []

                for (var i = 0; i < state_results.length; i++)
                {
                    const skelbimas = state_results[i]

                    components.push(
                        <Line
                            key={i}
                            skelbimas={skelbimas}
                        ></Line>
                    )
                }

                return components
            }()
        }
    </div>
}

export default Results