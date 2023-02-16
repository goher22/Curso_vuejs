import getRamdomInt from "@/herlpers/getRandomint";
import { createStore } from "vuex";

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRamdomInt: 0
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
        }
    },
    actions: {
        async incrementRandomInt({commit}) {
            const randomInt = await getRamdomInt();
            
            commit('incrementBy', randomInt);
        }
    }
});