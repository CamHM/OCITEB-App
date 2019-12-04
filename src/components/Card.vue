<template>
    <v-card class="card" elevation="5"
        color="secondary">
        <br />
        <v-avatar color="orange" size="85">
            <v-icon class="text secondary--text headline font-weight-thin">{{ item.icon }}</v-icon>
        </v-avatar>
        <v-card-text>
            <h2 class="text title warning--text font-weight-thin">{{ item.title }}</h2>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Card",
        props: [
            'item',
        ],
        methods: {
        }
    }
</script>

<style scoped>
    .card {
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
        transition: all .3s ease-in-out;
        height: 230px;
    }
    .card:hover {
        transform: translate3d(0px, -18px, 0px);
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.1) !important;
    }
    .text {
        text-align: center;
        user-select: none;
    }

</style>
