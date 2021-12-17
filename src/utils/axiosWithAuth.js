import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "http://localhost:5003/api"
    })
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth