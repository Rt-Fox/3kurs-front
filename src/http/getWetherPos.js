import {checkResponse} from "@/http/checkResponse";
import {API} from "@/utils/const";
import store from "@/store";

export const getWeatherPos = (lat,lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`, {

        method: 'GET',

    })
        .then(checkResponse)
        .then(response => {
            store.commit('addCurrentWeather', response)
        })
        .catch(err => console.log(err))

}