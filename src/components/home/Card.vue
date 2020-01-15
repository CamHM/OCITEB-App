<template>
    <v-card class="card mx-auto" elevation="5"
        v-bind:color="item.card_color" :height="item.card_height" @click="navigate">
        <div>
            <div class="text-center">
                <v-avatar v-bind:color="item.avatar_color" :size="item.avatar_size">
                    <v-icon v-bind:color="item.icon_color">{{ item.icon }}</v-icon>
                </v-avatar>
            </div>
            <v-card-text>
                <h4>{{ item.title }}</h4>
                <b>{{ item.description }}</b>
            </v-card-text>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "Card",
        props: [
            'item',
        ],
        methods: {
            navigate() {
                this.$router.push(this.item.path);
            }
        }
    }
</script>

<style scoped>
    .card {
        text-align: center;
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
    h4 {
        font-size: 18px;
        font-weight: 600;
        color: white;
        margin-bottom: 10px;
    }
    b {
        color: white;
        font-size: 10px;
        font-weight: lighter;
    }
</style>
