import React from "react"
import Text from "../../../components/Text.jsx"

const Skelbimas_read_view = function (props)
{
    // props 

    const _id = props._id
    const kategorija = props.kategorija
    const autorius = props.autorius
    const pavadinimas = props.pavadinimas
    const aprasas = props.aprasas
    const image_base64 = props.image_base64

    //

    return <div
        style=
        {
            {
                maxWidth: "100%",
                width: "fit-content",
                padding: "2em",
                border: "0",
                margin: "auto",
                textAlign: "center",
                backgroundColor: "rgb(240, 240, 240)"
            }
        }
    >
        <Text
            label={"Skelbimo id: "}
            value={_id}
        ></Text>

        <Text
            label={"Autorius: "}
            value={autorius}
        ></Text>

        <Text
            label={"Kategorija: "}
            value={kategorija}
        ></Text>

        <Text
            label={"Pavadinimas: "}
            value={pavadinimas}
        ></Text>

        <Text
            label={"Aprasas: "}
            value={aprasas}
        ></Text>

        <div
            style=
            {
                {
                    display: "flex",
                    justifyContent: "center",
                    padding: "0.25em",
                    border: "0",
                    margin: "0 auto",
                    backgroundColor: "rgb(200, 200, 200)"
                }
            }
        >Nuotrauka</div>

        <img
            style=
            {
                {
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "50%"
                }
            }
            src={image_base64}></img>
    </div>
}

export default Skelbimas_read_view