import axios from 'axios'

export function callAPI(url:string) {
    axios.get(url)
        .then(function (response: any) {
            return response;
        })
        .catch(function (error: any) {
            console.log(error);
        })
}