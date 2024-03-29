import React from "react";
import CartãoStandart from "../../ComponentesUniversais/Cartões/CartãoStandart/CartãoStandart";
import CostasCartãoStandartLimpo from "../../ComponentesUniversais/Cartões/CartãoStandart/costasCartãoStandartLimpo";
function CartõesStandartUnidos() {
    return (
        <div className="relative flex items-center justify-center mt-[200px]">
            <div className=" -rotate-[40deg] relative z-20 left-[220px] top-[-370px]">
            <CartãoStandart></CartãoStandart>
            </div>
            <div className="rotate-[50deg] relative z-10 right-[200px] top-[-440px]">
            <CostasCartãoStandartLimpo></CostasCartãoStandartLimpo>
            </div>
        </div>
    )
}

export default CartõesStandartUnidos