import React from "react"
import Komentarai, { update } from "./Komentarai/Komentarai.jsx"
import Skelbimas_read_view from "./Skelbimas_read_view.jsx"
import { state_username } from "../../../Header.jsx"

var state_skelbimas

export var set_state_skelbimas

const Skelbimas = function ()
{
    // states

    [state_skelbimas, set_state_skelbimas] = React.useState(null)

    //

    if (state_skelbimas === null) return

    return <div
        style=
        {
            {
                position: "fixed",
                inset: "0 0 0 0",
                backgroundColor: "rgba(100, 100, 100, 0.9)",
            }
        }
    >
        <div
            style=
            {
                {
                    overflow: "auto",
                    maxHeight: "100%",
                    width: "fit-content",
                    textAlign: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgb(240, 240, 240)"
                }
            }
        >
            <Skelbimas_read_view
                _id={state_skelbimas._id}
                kategorija={state_skelbimas.kategorija}
                autorius={state_skelbimas.autorius}
                pavadinimas={state_skelbimas.pavadinimas}
                aprasas={state_skelbimas.aprasas}
                image_base64={state_skelbimas.image_base64}
            ></Skelbimas_read_view>

            <Komentarai
                _id={state_skelbimas._id}
                komentarai={state_skelbimas.komentarai}
            ></Komentarai>

            <button
                onClick=
                {
                    function ()
                    {
                        set_state_skelbimas(null)
                    }
                }
            >Uzdaryti</button>

            <button
                onClick=
                {
                    function ()
                    {

                    }
                }
            >Trinti</button>

            <br></br>
        </div>
    </div>
}

export default Skelbimas