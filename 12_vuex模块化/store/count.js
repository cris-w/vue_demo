export default {
    namespaced: true,
    actions: {
        addOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 1000);
        }
    },
    mutations: {
        ADD(state, value) {
            state.sum += value;
        },
        DECRE(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        school: "浙江理工",
        subject: "vue",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}