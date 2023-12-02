import React from "react";
import GooglePlay from "../../../src/ComponentesUniversais/GooglePlay"
import AppStore from "../../../src/ComponentesUniversais/AppStore"
function IconesDowload(){
    return(
        <div className="flex flex-col items-start ml-[200px]">
        <GooglePlay></GooglePlay>
       <AppStore></AppStore>
        </div>
    )
}

export default IconesDowload