import Header1 from "./components/Header1"
import Header2 from "./components/Header2"

const Headers = (props:any) =>{
    return(
            <header className="bg-white max-sm:px-5 py-3 px-7 w-screen shadow shadow-slate-400">
                {props.page 
                ?
                <Header1/>
                :
                <Header2/>}
            </header>
    )
}

export default Headers