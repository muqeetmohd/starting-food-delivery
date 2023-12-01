import { useRef } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

//how does a component unmount
export default function Modal({children, open, className = ''}) {

    const dialog = useRef(); 

    useEffect(() => {
        if(open) {
            console.log("before")
        dialog.current.showModal();
        }
        // else{
        //     dialog.current.close();
        // }
        
       console.log("after")
        return() => dialog.current.close();


    }, [open])

    return createPortal(
    <dialog ref = {dialog} className = {`modal ${className}`}>{children}</dialog>, 
    document.getElementById('modal')
    );
}