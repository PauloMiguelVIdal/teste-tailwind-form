import React from "react";
import CartãoBlack from "../../ComponentesUniversais/Cartões/CartãoBlack/CartãoBlack";
import CostasCartãoBlackLimpo from "../../ComponentesUniversais/Cartões/CartãoBlack/costasCartãoBlackLimpo";

function CartõesSeparados() {
    return (
        <div className="relative flex items-center place-content-around mt-[200px]">
            <div className=" relative z-20 left-[140px] top-[-370px]">
                <CartãoBlack></CartãoBlack>
            </div>
            <div className=" relative z-10 right-[160px] top-[-370px]">
                <CostasCartãoBlackLimpo></CostasCartãoBlackLimpo>
            </div>
        </div>
    )
}

export default CartõesSeparados