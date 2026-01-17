import { useRef, useState } from "react"
import { CheckSquare } from "lucide-react"
 import { useTransfromLog, useTransfromSig } from "../../hooks/useTrasnsform"
 import { useSubmit } from "../../hooks/useSubmit"


export default function Card(){
    const btnRef1 = useRef<HTMLButtonElement | any>(null) 
    const btnRef2 = useRef<HTMLButtonElement | any>(null)
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [op, setOp] = useState<string>("login")

    function login(e:any){
        setOp("login")
        useTransfromLog(btnRef1,btnRef2,"Login",e)
    }

    function sig(e:any){
        setOp("sigin")
        useTransfromSig(btnRef1,btnRef2,"SigIn",e)

    }

   
    return(
        <>
            {op === "login"
            
            ?
            <div className="mt-6 max-md:mt-4">
            <div className="flex flex-col items-center text-xl mb-4 max-md:mb-1">
                <span><CheckSquare className="bg-blue-500 mb-4 max-md:mb-1 text-white size-20 p-5 rounded-2xl shadow-lg"/></span>
                <h1 className="mb-4 max-md:mb-1">TaskFlow</h1>
                <p className="text-gray-500 mb-4 max-sm:hidden font-medium">Organize seus projetos de forma simples e eficiente</p>
            </div>
            <form onSubmit={e=>useSubmit(name,email,password,op,e)} className="bg-white rounded-xl transition-all mx-3 duration-300 border-gray-200 text-lg p-6 w-99 max-sm:w-fit border-2 shadow-lg font-medium">
                <div className="mb-7">
                    <span className="text-black">Bem-vindo</span>
                    <p className="text-gray-400">Entre na sua conta ou crie um nova para começar</p>
                </div>
                <div className="flex bg-gray-300 px-1 py-1 mb-2 rounded-2xl justify-around">
                    <button ref={btnRef1} onClick={e=>login(e)} className="bg-white w-1/2 rounded-2xl py-1 transition-all duration-300" id="btn1">LogIn</button>
                    <button ref={btnRef2} className="bg-transparent w-1/2 transition-all duration-300" onClick={e=>sig(e)}>SigIn</button>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" className=" mb-3 bg-gray-300 rounded-xl py-2" onChange={e=>setEmail(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" className=" mb-3 bg-gray-300 rounded-xl py-2" onChange={e=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <div className="flex justify-between">
                        <div className="mb-3">
                                <input type="checkbox" name="lembrar" id="lembrar" className="" />
                                <span>Lembrar-me</span>
                        </div>
                        <span className="font-normal text-blue-500">Esqueceu a senha</span>
                    </div>
                </div>
                <button className="bg-blue-600 w-full text-center py-2 rounded-xl text-white font-medium">LogIn</button>
            </form>
        </div>
        :
        <div className="mt-6 max-md:mt-4">
                <div className="flex flex-col items-center text-xl mb-4 max-md:mb-1">
                    <span><CheckSquare className="bg-blue-500 mb-4 max-md:mb-1 text-white size-20 p-5 rounded-2xl shadow-lg"/></span>
                    <h1 className="mb-4 max-md:mb-1">TaskFlow</h1>
                    <p className="text-gray-500 mb-4 max-sm:hidden font-medium">Organize seus projetos de forma simples e eficiente</p>
                </div>
                <form onSubmit={e=>useSubmit(name,email,password,op,e)} className="bg-white rounded-xl transition-all mx-3 duration-300 border-gray-200 text-lg p-6 w-99 max-sm:w-fit border-2 shadow-lg font-medium">
                    <div className="mb-7 max-md:mb-1">
                        <span className="text-black">Bem-vindo</span>
                        <p className="text-gray-400">Entre na sua conta ou crie um nova para começar</p>
                    </div>
                    <div className="flex bg-gray-300 px-1 py-1 mb-2 rounded-2xl justify-around">
                        <button ref={btnRef1} onClick={e=>login(e)} className="w-1/2 transition-all duration-300" id="btn1">LogIn</button>
                        <button ref={btnRef2} className="bg-white rounded-2xl w-1/2 py-1 transition-all duration-300" onClick={e=>sig(e)}>SigIn</button>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" className=" mb-3 bg-gray-300 rounded-xl py-2" onChange={e=>setName(e.target.value)}/>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className=" mb-3 bg-gray-300 rounded-xl py-2" onChange={e=>setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" className=" mb-3 bg-gray-300 rounded-xl py-2" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <div className="mb-3">
                                    <input type="checkbox" name="lembrar" id="lembrar" className="" />
                                    <span>Lembrar-me</span>
                            </div>
                            <span className="font-normal text-blue-500">Esqueceu a senha</span>
                        </div>
                    </div>
                    <button className="bg-blue-600 w-full text-center py-2 rounded-xl text-white font-medium">SigIn</button>
                </form>
            </div>}
        </>
    )
}