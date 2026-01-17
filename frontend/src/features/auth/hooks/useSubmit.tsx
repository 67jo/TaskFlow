import api from "../../../app/service/api"


export async function useSubmit(name:string | undefined,email:string | undefined,password:string | undefined,op:string,e:any){
    e.preventDefault()
    if(op === "login"){
        await api.post("login/",{
            email:email,
            password:password
        }).then(res=>{
            const token = res.data.access
            const refresh = res.data.refresh
            localStorage.setItem("access", token)
            localStorage.setItem("refresh", refresh)
        }).catch(err=>{
            alert("Erro ao logar")
            console.log(err)
        })
    }
    else{
    await api.post("user/",{
        name:name,
        email:email,
        password:password,
        status:"ATIVO"
    }).then(() => alert("Cadastrado com sucesso!!!"))
    .catch(err=>{
        alert("erro ao cadastrar")
        console.log(err)
    })
    }
}