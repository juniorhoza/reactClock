import React,{useState,useEffect} from "react";
import Holder from "./Holder";

export default function Clock(){

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div className="container w-screen h-screen flex flex-col items-center justify-center relative p-2">
                <div className="bg-black opacity-80 absolute w-full h-full -z-50 m-auto rounded-xl"></div>
                <div className="w-1/2 m-auto flex gap-6 ">
                    
            <Holder title="Hour" element={date.getHours()}/>
            <Holder title="Minute" element={date.getMinutes()}/>

            <Holder title="Second" element={date.getSeconds()}/>



      
                
                    
                </div>

                <div className="justify-self-start text-left font-bold	">
                    <p>Technologies : React + Tailwind</p>
                </div>
            </div>


            
        </>
    );
}