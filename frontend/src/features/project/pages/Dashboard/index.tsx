import Headers from "../../components/Header"
import CardDash from "../../components/CardDash"
import { Plus } from "lucide-react"
import { Search } from "lucide-react"
import { useState } from "react"


function Dashboard(){
    const  cardInfo = [
    {
        color:"bg-blue-500",
        title:"Projeto Website Redesign",
        description:"Redesign completo do website da empresa",
        taskNumbers:4,
        data:"15 de jan. de 2024",

    },{
        color:"bg-violet-500",
        title:"App Mobile",
        description:"Desenvolvimento do aplicativo mobile",
        taskNumbers:1,
        data:"1 de fev. de 2024",

    },{
        color:"bg-green-500",
        title:"Marketing Q1",
        description:"Campanhas de marketing do primeiro trimestre",
        taskNumbers:0,
        data:"20 de jan. de 2024",

    },
]
    return(
        <div id="dashgrid">
            <Headers page={true}/>
            <main className="w-[92%]">
                <section className="mb-9">
                    <h2 className="font-semibold text-2xl text-gray-800 mb-2 font-sans">Meus Projetos</h2>
                    <p className="text-slate-500 text-lg font-sans font-medium">Gerencie todos os seus projetos em um só lugar</p>
                </section>
                <section className="flex mb-10 items-center justify-between gap-2">
                    <div className="relative max-sm:w-[100%] w-[87%] align-middle">
                        <Search className="absolute bottom-[25%] left-3 text-slate-400" size={20}/>
                        <input type="text" className="bg-[#ececec] rounded-md py-2 pl-11 w-full" placeholder="Buscar projetos..."/>
                    </div>
                    <button className="flex items-center min-w-[150px] font-medium max-sm:hidden justify-center gap-3 bg-blue-500 text-white py-2 px-2 rounded-xl cursor-pointer"><Plus /> Novo Projeto</button>
                </section>
                    <CardDash cardInfo={cardInfo}/>
            </main>
        </div>
    )
}

export default Dashboard