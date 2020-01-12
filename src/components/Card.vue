<template>
    <v-card class="card" elevation="5"
        v-bind:color="item.card_color">
        <br />
        <div class="text-center">
            <v-avatar v-bind:color="item.avatar_color" size="85">
                <v-icon v-bind:color="item.icon_color">{{ item.icon }}</v-icon>
            </v-avatar>
        </div>
        <v-card-text>
            <h2 class="text title white--text font-weight-medium">{{ item.title }}</h2>
            <h5 class="text white--text font-weight-thin">{{ item.description }}</h5>
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
