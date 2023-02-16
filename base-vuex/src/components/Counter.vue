<template>
    <h1>Counter - vuex</h1>
    <h2>Direct acces: {{ $store.state.count }}</h2>
    <h2>Computed: {{ countComputer }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomIn" :disabled="isLoading">Random</button>

    <h1>mapState</h1>
    <h2>mapStte: {{ count }}</h2>
    <h2>lastMutation {{ lastMutation }}</h2>
</template>

<script>

    import { mapState, mapActions } from 'vuex';

    export default {
        name: "counter-components",
        computed: {
            ...mapState({
                count: 'count',
                lastMutation: 'lastMutation',
                isLoading: 'isLoading'
            }),
            countComputer() {
                return this.$store.state.count
            }
        },
        methods: {
            ...mapActions({
                randomIn: 'incrementRandomInt'
            }),
            increment() {
                this.$store.commit('increment')               
            },
            incrementBy() {
                this.$store.commit('incrementBy', 5)               
            },
        }
    }
</script>