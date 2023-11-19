import React from "react";
import googlePlay from "../src/IconDowloadApp/google-play-badge-logo-svgrepo-com.svg"
import appStore from "../src/IconDowloadApp/App_Store_(iOS)-Badge-Logo.wine.svg"
function IconesDowload(){
    return(
        <div className="flex flex-col items-start ml-[200px]">
        <img className="w-[304px] h-[304px] mt-[-60px]" src={googlePlay} alt="googlePlay"></img>
        <img className="w-[358px] h-[238px] ml-[-41px] mt-[-160px]" src={appStore} alt="appStore"></img>
        </div>
    )
}

export default IconesDowload