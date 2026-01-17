import { CheckSquare,LogOut } from "lucide-react"



const Header1 = () =>{
    return(
        <section className="flex justify-between">
            <section className="flex items-center max-sm:gap-2 gap-3">
                <CheckSquare className="bg-blue-500 text-white p-2 rounded-lg shadow-md" size={40}/> 
                <h1 className="font-semibold text-2xl text-gray-800">TaskFlow</h1>
            </section>
            <button className="flex items-center max-sm:gap-2 gap-3">
                <LogOut className="text-gray-600 size-5"/>
                <span className="text-gray-600 ">Saír</span>
            </button>
        </section>
    )
}
export default Header1