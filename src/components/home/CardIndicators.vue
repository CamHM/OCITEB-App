<template>
    <v-card class="card mx-auto" elevation="5"
            v-bind:color="item.card_color" :height="item.card_height">
        <div class="text-left">
            <v-card-text>
                <h4>{{ item.title }}</h4>
                <b>{{ item.description }}</b>
            </v-card-text>
            <v-row>
                <v-col cols="6">
                    <v-btn color="primary" class="homeButton">
                        Conoce los indicadores
                    </v-btn>
                </v-col>
                <v-col cols="6">

                </v-col>
            </v-row>
            <v-divider light></v-divider>
            <v-row>
                <v-col cols="6">
                    <h6 class="text-left">{{investment.title}}</h6>
                    <v-progress-linear rounded color="deep-purple darken-1" background-color="white"
                                       v-model="investment.num"></v-progress-linear>
                </v-col>
                <v-col cols="6">
                    <h6 class="text-left">{{capacity.title}}</h6>
                    <v-progress-linear rounded color="blue darken-3" background-color="white"
                                       v-model="capacity.num"></v-progress-linear>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <h6 class="text-left">{{formation.title}}</h6>
                    <v-progress-linear rounded color="blue darken-3" background-color="white"
                                       v-model="formation.num"></v-progress-linear>
                </v-col>
                <v-col cols="6">
                    <h6 class="text-left">{{production.title}}</h6>
                    <v-progress-linear rounded color="blue darken-3" background-color="white"
                                       v-model="production.num"></v-progress-linear>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "Card",
        props: [
            'item',
        ],
        methods: {},
        data: () => {
            return {
                investment: {
                    title: "Inversión",
                    num: 12
                },
                capacity: {
                    title: "Capacidad",
                    num: 35
                },
                formation: {
                    title: "Formación",
                    num: 20
                },
                production: {
                    title: "Producción bibliográfica",
                    num: 70
                }
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

    .homeButton {
        text-transform: capitalize;
        width: 90%;
        padding: 0;
        font-family: Calibri, Serif, sans-serif;
        display: flex;
        margin-left: 10px;
    }
</style>
