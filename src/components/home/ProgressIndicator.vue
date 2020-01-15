<template>
    <div>
        <h6>OCITEB</h6>
<!--        <h6>{{indicator.title}}</h6>-->
<!--        <v-progress-linear rounded v-bind:color="indicator.color" background-color="white"-->
<!--                           v-model="indicator.num"/>-->
    </div>
</template>

<script>
    export default {
        name: "ProgressIndicator",
        props: [
            'indicator'
        ]
    }
</script>

<style scoped>
    h6 {
        color: white;
        align-self: flex-start;
    }
</style>