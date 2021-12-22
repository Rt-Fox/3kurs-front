import {URL} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";
import store from "@/store";
import router from "@/router";


export const postToken = async (username, password) => {
    fetch(`${URL}token/`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
        .then(checkResponse)
        .then(data => {
            store.commit('addToken', data)
            localStorage.setItem('token', JSON.stringify(data))
            store.dispatch('addUser');
            router.push('profile')
        })
        .catch(err => console.log(err))
}