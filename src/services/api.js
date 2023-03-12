import axios from "axios";

// 36800000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api