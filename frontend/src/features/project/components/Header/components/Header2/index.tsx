import { ArrowLeft, Filter,ChevronDown } from "lucide-react"
import { useState } from "react"
import SelectModal from "./components/SelectModal"


const Header2 = () =>{
    const [showUp, setShowUp] = useState<boolean>(true)
    const [filterState, setFilterState] = useState<string>("Todas as tarefas")
    return(
        <section className="flex justify-between max-sm:items-center">
            <section>
                <section className="flex items-center mb-5 max-sm:mb-2">
                    <button className="flex mr-6 max-sm:mr-2 max-sm:gap-1 gap-3 items-center">
                        <ArrowLeft size={20}/>
                        <span className="text-sm font-medium">Voltar</span>
                    </button>
                    <section className="flex">
                        <div className="bg-blue-500 p-6 mr-4 w-12 rounded-xl shadow-md"></div>
                        <section>
                            <p className="max-sm:hidden">Projeto Website Redesign</p>
                            <p className="text-gray-600 max-sm:hidden">Redesig completo do website da empresa</p>
                        </section>
                    </section>
                </section>
                <section className="flex gap-2 max-sm:hidden">
                    <span className="bg-gray-200 rounded-md px-2 text-center align-middle font-semibold text-sm">3 listas</span>
                    <span className="bg-blue-200 text-blue-800 rounded-md px-2 text-center align-middle font-semibold text-sm">4 tarefas</span>
                </section>
            </section>
            <section className="w-fit relative">
                <div className="flex items-center justify-center max-sm:gap-1 gap-2 cursor-pointer bg-gray-200 py-1 px-2 rounded-md" onClick={()=>setShowUp(!showUp)}>
                    <Filter className="text-gray-400" size={20}/>
                    <span className="font-medium text-gray-700">{filterState}</span>
                    <ChevronDown className="text-gray-400" size={18}/>
                </div>
                {showUp && <SelectModal setShowUp={setShowUp} filterState={filterState} setFilterState={setFilterState}/>}
            </section>
        </section>
    )
}
export default Header2