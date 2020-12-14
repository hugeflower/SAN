import axios from 'axios'

export function callAPI(url:string) {
    axios.get(url)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}