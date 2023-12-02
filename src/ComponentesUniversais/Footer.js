import React from "react";
import googlePlay from "../IconDowloadApp/google-play-badge-logo-svgrepo-com.svg";
import appStore from "../IconDowloadApp/App_Store_(iOS)-Badge-Logo.wine.svg";

function Footer() {
    return (
        <div className="flex flex-col">
            <div className=" bg-gradient-to-b from-roxoForte to-marinho flex place-content-evenly h-[1024px] w-full rounded-t-[40px]">
                <div className="pt-[100px]">
                    <h2 className="text-center text-[25px] fonteBold text-white opacity-50">
                        Git hub
                    </h2>
                    <h2 className="text-center text-[25px] fonteBold text-white opacity-50">
                        Linkedin
                    </h2>
                    <h2 className="text-center text-[25px] fonteBold text-white opacity-50">
                        Currículo
                    </h2>
                    <h2 className="text-center text-[25px] fonteBold text-white opacity-50">
                        Portifólio
                    </h2>
                </div>
                <div className="pt-[100px]">
                    <h2 className="text-center text-[25px] fonteBold text-white opacity-50">
                        Ouvidoria:
                        ouvidoria @OBank.com.br
                        0800 887 0463
                    </h2>
                    <h2 className="text-center text-[25px] fonteBold text-white opacity-50">
                        Fale com a gente
                        08005912117
                    </h2>
                    <h2 className="text-center text-[25px] fonteBold text-white opacity-50">
                        Outside Brazil
                        1636 722 7111
                    </h2>
                </div>
                <div className="pt-[100px]">
                    <h2 className="text-center text-[25px] fonteBold text-white opacity-50">
                        Baixe o app
                    </h2>
                    <img className="w-[200px] h-[200px] m-auto" src={googlePlay} alt="googlePlay"></img>
                    <img className="w-[250px] h-[200px] m-auto mt-[-100px]" src={appStore} alt="AppStore"></img>
                </div>
                <div className="h-[350px] w-full bg-marinho absolute mt-[674px] z-50 flex justify-center items-center">
                <h4 className="text-center text-black fonteBold text-[25px]">© 2023 OBank S.A <br />
                    Instituição de Pagamento. 21.343.138/0001-48 <br />
                    Rua Groelandia Ribeiro, 2213 - Amazonas, AM - 03213-234</h4>
                </div>

            </div>
        </div>
    )
}

export default Footer