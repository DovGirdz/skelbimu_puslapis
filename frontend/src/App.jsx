import React from "react"
import Header from "./Header.jsx"
import Page from "./Page.jsx"
import Overlay from "./Overlay.jsx"
import Alert from "./Alert.jsx"
import List from "./pages/page_kategorijos/List/List.jsx"

const App = function ()
{
    return <>
        <Header></Header>

        <Page></Page>

        <Overlay></Overlay>

        <Alert></Alert>
    </>
}

export default App