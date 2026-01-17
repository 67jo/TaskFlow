import type React from "react"

interface props{
    setShowUp: React.Dispatch<React.SetStateAction<boolean>>
    setFilterState:React.Dispatch<React.SetStateAction<string>>
    filterState:string
}

const SelectModal = (props:props) =>{

    function show(state:string){
        props.setShowUp(false)
        props.setFilterState(state)
    }
    return(
        <section className="bg-white shadow-md absolute mt-1 p-2 border-2 w-full rounded-md">
            <div className="mb-2 hover:bg-blue-500 hover:shadow hover:shadow-blue-600 cursor-pointer flex justify-between rounded-md hover:pl-1 transition-all hover:font-medium hover:text-white" onClick={()=>show("Todas as tarefas")}>Todas as tarefas</div>
            <div className="mb-2 hover:bg-blue-500 hover:shadow hover:shadow-blue-600 cursor-pointer rounded-md hover:pl-1 transition-all hover:font-medium hover:text-white" onClick={()=>show("A Fazer")}>A Fazer</div>
            <div className="mb-2 hover:bg-blue-500 hover:shadow hover:shadow-blue-600 cursor-pointer rounded-md hover:pl-1 transition-all hover:font-medium hover:text-white" onClick={()=>show("Em Progresso")}>Em Progresso</div>
            <div className="mb-2 hover:bg-blue-500 hover:shadow hover:shadow-blue-600 cursor-pointer rounded-md hover:pl-1 transition-all hover:font-medium hover:text-white" onClick={()=>show("Concluído")}>Concluído</div>
        </section>
    )
}
export default SelectModal