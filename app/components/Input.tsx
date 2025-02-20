/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

//komponen input 

interface InputProps {
    isError? : boolean;
    messageError? : string;
    id : string | number;
    name : string ;
    value : string | number | undefined;
}

function Input ({ isError ,messageError ,id ,name ,value , ...props} : InputProps & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <section>
            <input  
            {...props}
            className="w-full border rounded px-3 py-2 text-black" id={""} value={value}
            />
            {isError && <p className="text-red-500 mt-1">{messageError}</p>} 
        </section>
    )
}

export default Input

