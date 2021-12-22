import {checkResponse} from "@/http/checkResponse";
import {API} from "@/utils/const";
import store from "@/store";

export const getWeatherID = (id) => {
    return () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API}&units=metric`, {
            method: 'GET',
        })
            .then(checkResponse)
            .then(response => {
                store.commit('addWeather', response)
            })
            .catch(err => console.log(err))
    }
}