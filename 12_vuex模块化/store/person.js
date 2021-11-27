import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions: {
        addPeronW(context, value) {
            if (value.name.indexOf("W") === 0) {
                context.commit("ADD_PERSON", value)
            }
        },
        addPeronServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit("ADD_PERSON", { id: nanoid(), name: response.data })
                },
                error => {
                    console.log(error);
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: "001", name: "Tom" }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    }
}