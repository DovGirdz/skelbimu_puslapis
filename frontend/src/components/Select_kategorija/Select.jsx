import React from "react"

const Select = function (props)
{
    // props

    const state_kategorijos = props.state_kategorijos

    const ref_value = props.ref_value

    // components

    const components = [<option key={-1} hidden disabled value="default"> -- select an option -- </option>]

    for (var i = 0; i < state_kategorijos.length; i++)
    {
        const kategorija = state_kategorijos[i]

        components.push(
            <option
                key={i}
                value={kategorija.pavadinimas}
            >{kategorija.pavadinimas}</option>
        )
    }

    return <div
    >
        <select
            defaultValue={"default"}
            onChange=
            {
                function (param)
                {
                    const value = param.target.value
                    ref_value.current = value
                }
            }
        >{components}</select>
    </div>
}

export default Select