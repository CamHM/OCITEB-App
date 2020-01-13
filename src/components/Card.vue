<template>
    <v-card class="card mx-auto" elevation="5"
        v-bind:color="item.card_color" :height="item.card_height">
        <div class="text-center">
            <v-avatar v-bind:color="item.avatar_color" :size="item.avatar_size">
                <v-icon v-bind:color="item.icon_color">{{ item.icon }}</v-icon>
            </v-avatar>
        </div>
        <v-card-text>
            <h4 class="text title white--text font-weight-light">{{ item.title }}</h4>
            <h5 class="text white--text font-weight-light">{{ item.description }}</h5>
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
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        transition: all .3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .card:hover {
        cursor: pointer;
    }
    .text {
        text-align: center;
        user-select: none;
    }

</style>
