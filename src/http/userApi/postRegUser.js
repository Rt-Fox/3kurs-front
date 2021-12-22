import {URL} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";
import {postToken} from "@/http/userApi/postToken";


export const postRegUser= async (username, password,re_password) => {
    fetch(`${URL}auth/users/`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            "username": username,
            "password": password,
            "re_password": re_password
        })
    })
        .then(checkResponse)
        .then(data => {
            console.log('Hello, ', data.username)
            postToken(username, password)
        })
        .catch(err => console.log(err))
}