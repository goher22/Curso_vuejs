import { createStore } from "vuex";

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none'
    },
    mutations: {
        increment(state) {
            state.count++;
            state.lastMutation = 'increment'
        },
        incrementBy(state, val) {
            state.count+=val;
            state.lastMutation = 'incrementBy'
        }
    }
});