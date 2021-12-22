import {API} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";

export const moduleMetcast = {
    state: () => ({
        metcasts: [],
        metcastCurrent: false

    }),
    mutations: {
        addWeather (state, payload) {
            state.metcasts = [...state.metcasts, payload]
        },
        clearWeather (state) {
            state.metcasts = []
        },
        addCurrentWeather (state, payload) {
            state.metcastCurrent =  payload
        }
    },
    actions: {
        addWeather({ commit }, payload) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=${payload.city_cod}&appid=${API}&units=metric`, {
                method: 'GET',
            })
                .then(checkResponse)
                .then(response => {
                    response['city_id'] = payload.id;
                    commit('addWeather', response)
                })
                .catch(err => console.log(err))
        },
        addCurrentWeather({ commit }, payload) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=${payload}&appid=${API}&units=metric`, {
                method: 'GET',
            })
                .then(checkResponse)
                .then(response => {
                    commit('addCurrentWeather', response)
                })
                .catch(err => console.log(err))
        },
    },
    getters: {
        metcastCurrent (state) {
            return state.metcastCurrent
        }
    }
}
