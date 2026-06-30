import axios from "axios"

export const apiservice = axios.create({
    baseURL : 'https://dummyjson.com',
    timeout : 6000
    //if data get more than 6 second to fetch then you will get an error of timeout
})


