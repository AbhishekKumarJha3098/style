import {buttons,divs} from "./styled/button";

import {userState}  from "react";


function app() {

    const {theme, settheme} = useState("light")
    return 
    (
<div className = "app">

<divs>
    <p>Loram Islum</p>
</divs>
<buttons onclick = {() => {


console.log("Clicked");

}}
>
click me
</buttons>

    )
}

