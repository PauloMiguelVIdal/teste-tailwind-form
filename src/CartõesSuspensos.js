import React from "react";
import CartãoBlackS from "../src/ComponentesUniversais/Cartões/CartõesSvg/CARTÃO black s-nome.svg"
import CartãoStandartS from "../src/ComponentesUniversais/Cartões/CartõesSvg/CARTÃO standart s-nome.svg"
function CartõesSuspensos(){
    return(
        <div className="">
<img className="rotate-27 relative left-[1580px] bottom-[390px]" src={CartãoBlackS} alt="cartãoblack"></img>
<img className="-rotate-17 relative left-[1200px] bottom-[950px]"  src={CartãoStandartS} alt="cartãostandart"></img>
        </div>
    )
}

export default CartõesSuspensos