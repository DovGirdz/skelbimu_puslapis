import React from "react"
import { set_state_alert_message } from "../../Alert.jsx"
import { set_state_overlay_message } from "../../Overlay.jsx"
import service_kategorijos_find from "../../services/service_kategorijos_find.mjs"
import Select from "./Select.jsx"

const Select_kategorija = function (props)
{
    // props

    const ref_value = props.ref_value

    // states

    const [state_kategorijos, set_state_kategorijos] = React.useState([])

    // update

    const update = async function ()
    {
        set_state_overlay_message("service_kategorijos_find...")

        const result_of_service_kategorijos_find =
            await service_kategorijos_find()

        set_state_overlay_message(null)

        // error:

        if (result_of_service_kategorijos_find.status === "error")
        {
            set_state_alert_message(
                result_of_service_kategorijos_find.message
            )
            return
        }

        // success

        const kategorjos = result_of_service_kategorijos_find.kategorijos

        set_state_kategorijos(kategorjos)
    }

    // effects

    React.useEffect(
        function ()
        {
            update()
            ref_value.current = ""
        },
        []
    )

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                padding: "0 0.25em",
                border: "0",
                margin: "0 0.25em",
                textAlign: "left",
                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >
        <div>Kategorija</div>

        <Select
            state_kategorijos={state_kategorijos}
            ref_value={ref_value}
        ></Select>
    </div>
}

export default Select_kategorija