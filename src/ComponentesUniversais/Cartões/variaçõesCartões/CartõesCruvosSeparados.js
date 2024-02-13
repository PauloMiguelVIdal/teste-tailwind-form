import React from "react";
import CartãoBlack from "../CartãoBlack/CartãoBlack";
import CartãoStandart from "../CartãoStandart/CartãoStandart";

function CartõesCurvosSeparados() {
    return (
        <div className="flex justify-center items-center relative top-[180px]">
            <div className="rotate-[-25deg] z-20 relative right-[10px]">
            <CartãoBlack/>
            </div>
            <div className="rotate-[25deg] z-10 relative left-[10px]">

            <CartãoStandart/>
            </div>

        </div>
    )
}

export default CartõesCurvosSeparados