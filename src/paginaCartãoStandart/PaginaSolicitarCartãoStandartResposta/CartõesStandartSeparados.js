import React from "react";
import CartãoStandart from "../../ComponentesUniversais/Cartões/CartãoStandart/CartãoStandart";
import CostasCartãoStandartLimpo from "../../ComponentesUniversais/Cartões/CartãoStandart/costasCartãoStandartLimpo";

function CartõesStandartSeparados() {
    return (
        <div className="relative flex items-center place-content-around mt-[200px]">
            <div className=" relative z-20 left-[140px] top-[-370px]">
                <CartãoStandart></CartãoStandart>
            </div>
            <div className=" relative z-10 right-[160px] top-[-370px]">
                <CostasCartãoStandartLimpo></CostasCartãoStandartLimpo>
            </div>
        </div>
    )
}

export default CartõesStandartSeparados