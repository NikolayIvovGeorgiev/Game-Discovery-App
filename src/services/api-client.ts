import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api', 
    params: {
        key: 'a7701bcf38164a2f85780d2a7fb907c7'
    }
});
class APIClient<T>{
    endpoint:string;
    
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
    }
}
export default APIClient;