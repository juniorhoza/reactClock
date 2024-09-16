import React from "react";

export default function Holder(props) {
    return (
        
        <>
        <div className="
        w-96
        h-50 
        rounded-lg
        border-2
        border-gray-400
        border-solid
        p-9
        text-center
        ">
            
             <h1 className="text-7xl font-bold">{props.element}</h1>
             <p>{props.element>9?`${props.title}s`:props.title}</p>
        
        </div>

        </>
    );
}