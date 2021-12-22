import {URL} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";
import store from "@/store";


export const getCityList = async (text) => {
    fetch(`${URL}api/city/?name=${text}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
        .then(checkResponse)
        .then(data => {
            store.commit('addCityList', data)
        })
        .catch(err => console.log(err))
}