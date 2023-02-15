<template>
    <div>
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    export default {
        data() {
            return {
                links: [
                    {to: '/home', name: 'pokemons'},
                    {to: '/pokemon-id/50', name: 'Por ID'},
                    {to: '/about', name: 'About'},
                    {to: 'https//google.com', name: 'Google'}
                ]
            }
        },
        components: {
            CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
        }
    }
</script>

<style scoped>

div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}
    
</style>