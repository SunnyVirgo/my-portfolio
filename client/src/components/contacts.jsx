import React from "react";

function Contacts() {
    return(

        <div className="h-screen bg-slate-900">
            <br /><br /><br />
            <div>
                <div className="flex justify-center">
                    <span className="text-3xl uppercase text-white font-bold text-center">Get in Touch</span>
                </div>
                    <div className="grid grid-cols-3 p-8">
                        <div><span className="text-base font-semibold text-green-600 uppercase tracking-tighter leading-relaxed text-center">address</span></div>
                        <div><span className="text-base font-semibold text-green-600 uppercase tracking-tighter leading-relaxed text-center">address</span></div>
                        <div><span className="text-base font-semibold text-green-600 uppercase tracking-tighter leading-relaxed text-center">address</span></div>
                    </div>
            </div>
        
        </div>
    )
}
export default Contacts