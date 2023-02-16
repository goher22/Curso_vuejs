<template>
    <h1>Counter - vuex</h1>
    <h2>Direct acces: {{ $store.state.count }}</h2>
    <h2>Computed: {{ countComputer }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button>Random</button>

    <h1>mapState</h1>
    <h2>mapStte: {{ count }}</h2>
    <h2>lastMutation {{ lastMutation }}</h2>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: "counter-components",
        computed: {
            countComputer() {
                return this.$store.state.count
            },
            ...mapState({
                count: state => state.count,
                lastMutation: state => state.lastMutation,
            })
        },
        methods: {
            increment() {
                this.$store.commit('increment')               
            },
            incrementBy() {
                this.$store.commit('incrementBy', 5)               
            }
        }
    }
</script>