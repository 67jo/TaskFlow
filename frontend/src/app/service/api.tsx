import axios from "axios";

const api = axios.create({
    baseURL:"http://127.0.0.1:8000/api/"
})

// enviando token de forma automatica para o backend
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("access")

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// configuracao do axios para o refresh automatico
api.interceptors.response.use(
    (response)=>response, 
    async (error) => {
        const originalRequest = error.config

        // verificando erro 401 e a segunda tentiva
        if(error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true

            const refresh = localStorage.getItem("refresh")
            if(refresh){
                try{
                    const res = await api.post("http://localhost:8000/api/refresh",
                    {
                        refresh:refresh
                    })
                    localStorage.setItem("access", res.data.access)

                    originalRequest.headers[
                        "Authorization"
                    ] =  `Bearer ${res.data.access}`

                    return axios(originalRequest)
                }catch(err){
                    console.log("Refresh token Expirado")
                }
            }
        }
        return Promise.reject(error);
    })
export default api