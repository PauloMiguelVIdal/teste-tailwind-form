import React, { useState } from "react";
import FormFAQS from "../../ComponentesUniversais/modelosfuncionalidades/FormFAQS";
function PaginaFAQs() {
    return (
        <div className="w-full h-[1024px] flex justify-center items-center flex-col">
            <h1 className="text-center text-[60px] fonteBold text-roxo mt-[115px] mb-[100px]">FAQS</h1>
            <div className="flex justify-center items-center flex-col m-auto " >
                <FormFAQS></FormFAQS>
                
            </div>
        </div>
    )
}

export default PaginaFAQs