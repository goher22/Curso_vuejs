<template>
    <h1>Counter - vuex</h1>
    <h2>Direct acces: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputer }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomIn" :disabled="isLoading">Random</button>

    <h1>mapState</h1>
    <h2>mapStte: {{ count }}</h2>
    <h2>lastMutation {{ lastMutation }}</h2>

    <h2>Direct getter: {{  $store.getters.squareCount }}</h2>
</template>

<script>

    import { mapState, mapActions } from 'vuex';

    export default {
        name: "counter-components",
        computed: { 
            ...mapState('counter', {
                count: 'count',
                lastMutation: 'lastMutation',
                isLoading: 'isLoading'
            }),
            countComputer() {
                return this.$store.state.counter.count
            }
        },
        methods: {
            ...mapActions('counter', {
                randomIn: 'incrementRandomInt'
            }),
            increment() {
                this.$store.commit('counter/increment')               
            },
            incrementBy() {
                this.$store.commit('counter/incrementBy', 5)               
            },
        }
    }
</script>