import getRamdomInt from "@/herlpers/getRandomint";
import { createStore } from "vuex";

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRamdomInt: 0
    },
    getters: {
        squareCount(state) {
            return state.count * state.count;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
            state.lastMutation = 'increment'
        },
        incrementBy(state, val) {
            state.count+=val;
            state.lastMutation = 'incrementBy'
            state.lastRamdomInt = val;
        },
        setLoading(state, val){
            state.isLoading = val;
            state.lastMutation = 'setLoading ' + val
        }
    },
    actions: {
        async incrementRandomInt({commit}) {
            commit('setLoading', true)
            const randomInt = await getRamdomInt();
            
            commit('incrementBy', randomInt);
            commit('setLoading', false)
        }
    }
});