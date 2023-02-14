<template>
    <div>
        <h1>Pokemon page <span>{{ id  }}</span></h1>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            nomber: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                // id: this.$route.params,
            }
        },
        created() {
            // console.log(this.$route.params)
            // this.id = id;
        }
    }
</script>