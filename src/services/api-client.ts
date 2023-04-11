import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api', 
    params: {
        key: '495096ca15fe42dbb79d57a68aed6393'
    }
})