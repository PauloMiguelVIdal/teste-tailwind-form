import React from "react";
import CartãoBlack from "../../ComponentesUniversais/Cartões/CartãoBlack/CartãoBlack";
import CostasCartãoBlackLimpo from "../../ComponentesUniversais/Cartões/CartãoBlack/costasCartãoBlackLimpo";
function CartõesBlackUnidos() {
    return (
        <div className="relative flex items-center justify-center mt-[200px]">
            <div className=" -rotate-[40deg] relative z-20 left-[140px] top-[-370px]">
            <CartãoBlack></CartãoBlack>
            </div>
            <div className="rotate-[50deg] relative z-10 right-[160px] top-[-388px]">
            <CostasCartãoBlackLimpo></CostasCartãoBlackLimpo>
            </div>
        </div>
    )
}

export default CartõesBlackUnidos