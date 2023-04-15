import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api', 
    params: {
        key: 'a7701bcf38164a2f85780d2a7fb907c7'
    }
})