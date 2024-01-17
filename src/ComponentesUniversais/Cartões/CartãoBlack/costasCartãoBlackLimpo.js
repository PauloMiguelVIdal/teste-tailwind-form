import React from "react";

function CostasCartãoBlackLimpo() {
    return (
        <div>
            <div className="origin-center flex justify-center items-center flex-row w-110 h-[37.5rem] bg-gradient-to-tl from-black from-35% to-roxoForte to-65% rounded-[40px] ml-10">
                <div className="w-[30px] h-[100px] bg-laranja rounded-[20px] relative bottom-[140px] left-[290px] rotate-180">
                    <div className="w-[27px] h-[95px] bg-laranjaFraco relative left-[2px] rounded-[20px]">
                        <div className="w-[32px] h-[55px] bg-roxoForte relative right-[2.5px] bott-[1px] rounded-[20px]">
                            <h4 className="text-white rotate-90 fonteBold text-[15px] relative  top-[17px]" >cvv</h4>
                        </div>
                    </div>
                </div>
                <div className="w-[70px] h-[600px] bg-black relative z-10 mr-[130px]"></div>
                <div className="w-[87px] h-16 origin-top-left top-[280px] right-[50px] rotate-[-91.79deg] z-10 relative bg-neutral-600 rounded-full">
                    <div className="w-[73px] h-16 origin-top-left z-20 relative bg-gradient-to-b from-black to-white rounded-full"></div>
                </div>
                <h4 className="text-laranja fonteBold text-[20px] -rotate-90 relative right-[90px] top-[205px]">BLACK</h4>
            </div>
        </div>
    )
}

export default CostasCartãoBlackLimpo