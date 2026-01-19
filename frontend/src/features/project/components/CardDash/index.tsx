import type { cardTypes } from "../../types/DashTypes"
import { CheckSquare, Calendar } from "lucide-react"


function CardDash({cardInfo}: {cardInfo: cardTypes[]}){
    return(
        <section className="flex gap-9 justify-between items-start max-sm:flex-wrap">
            {cardInfo.map((item,index)=>{
                return(
                        <div className="bg-white shadowcircle cursor-pointer rounded-2xl p-6 w-full hover:scale-[1.05]" key={index}>
                            <div className={`${item.color} p-6 mb-3 py-8 rounded-2xl shadow-md w-[65px]`}></div>
                            <h3 className="text-xl font-semibold font-sans">{item.title}</h3>
                            <p className="text-slate-500 mb-7 text-lg">{item.description}</p>
                            <div className="text-slate-500 flex justify-between">
                                <div className="flex gap-2 items-center font-medium">
                                    <CheckSquare size={20}/>
                                    <span>{item.taskNumbers} tarefas</span>
                                </div>
                                <div className="flex gap-2 items-center font-medium">
                                    <Calendar size={20}/> <span>{item.data}</span>
                                </div>
                            </div>
                        </div>
                )
            })}
        </section>
    )
}
export default CardDash