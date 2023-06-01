import React from "react"

const Textarea = function (props)
{
    // props

    const label = props.label

    const init_value = props.init_value

    const ref_value = props.ref_value

    // refs

    const ref_textarea = React.useRef()

    // resize_texarea

    const resize_texarea = function ()
    {
        ref_textarea.current.style.width = "10em"
        ref_textarea.current.style.height = "1.25em"

        if (ref_textarea.current.scrollWidth > ref_textarea.current.clientWidth)
        {
            ref_textarea.current.style.width = `${ref_textarea.current.scrollWidth}px`
        }

        if (ref_textarea.current.scrollHeight > ref_textarea.current.clientHeight)
        {
            ref_textarea.current.style.height = `${ref_textarea.current.scrollHeight}px`
        }
    }

    // efects

    React.useEffect(
        function ()
        {
            ref_textarea.current.value = init_value
            ref_value.current = init_value
            resize_texarea()
        },
        []
    )

    //

    return <div
        style=
        {
            {
                width: "fit-content",
                height: "fit-content",
                padding: "0.25em",
                border: "0",
                margin: "0.25em",
                backgroundColor: "rgb(230, 230, 230)"
            }
        }
    >
        <div>{label}</div>

        <textarea
            ref={ref_textarea}
            style=
            {
                {
                    width: "10em",
                    height: "1.25em",
                    whiteSpace: "nowrap",
                    resize: "none"
                }
            }
            onChange=
            {
                function (param)
                {
                    // inputs

                    resize_texarea()

                    const value = param.target.value

                    ref_value.current = value
                }
            }
        ></textarea>
    </div>
}

export default Textarea