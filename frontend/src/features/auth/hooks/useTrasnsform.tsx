import React, { useEffect, useRef } from "react"
import type { transformType } from "../types"



export const useTransfromLog = (ref1:React.RefObject<HTMLButtonElement>, ref2:React.RefObject<HTMLButtonElement>, status:string,e:any) =>{
       function mover(){
            e.preventDefault()
            const btn1 = ref1.current
            const btn2 = ref2.current
            if(status === "Login"){
                btn1.style.transform = "translateX(0%)"
                btn2.style.transform = "translateX(0%)"
                return
            }
        }
        mover()
    
}
export const useTransfromSig = (ref1:React.RefObject<HTMLButtonElement>, ref2:React.RefObject<HTMLButtonElement>, status:string,e:any) =>{
    function mover(){
        e.preventDefault()
        const btn1 = ref1.current
        const btn2 = ref2.current
        if(status === "SigIn"){
            btn1.style.transform = "translateX(100%)"
            btn2.style.transform = "translateX(-100%)"
            return
        }
    }
    mover()
}