import React from "react"
import Results from "./Results/Results.jsx"
import Search from "./Search.jsx"
import Skelbimas from "./Skelbimas/Skelbimas.jsx"

const Page_skelbimai_find = function ()
{
    //

    return <main
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
        <Search
        ></Search>

        <Results
        ></Results>

        <Skelbimas
        ></Skelbimas>

    </main>
}

export default Page_skelbimai_find