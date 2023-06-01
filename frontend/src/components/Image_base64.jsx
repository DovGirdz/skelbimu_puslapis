import React from "react"
import encode_image_to_base64 from "../utls/encode_image_to_base64.mjs"

const Image_base64 = function (props)
{
    // props 

    const ref_value = props.ref_value

    // refs

    const ref_img_image_base64 = React.useRef()

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
        <img
            ref={ref_img_image_base64}
            style=
            {
                {
                    display: "block",
                    maxWidth: "80%",
                    width:"fit-content",
                    margin: "0 auto 0 auto"
                }
            }
        ></img>

        <input
            type="file"
            onChange=
            {
                async function (param)
                {
                    // inputs

                    const file = param.target.files[0]

                    const result_of_encode_image_to_base64 =
                        await encode_image_to_base64(file)

                    const image_base64 = result_of_encode_image_to_base64.file

                    ref_img_image_base64.current.src = image_base64

                    ref_value.current = image_base64
                }
            }
        ></input>
    </div>
}

export default Image_base64