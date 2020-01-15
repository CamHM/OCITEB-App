<template>
    <v-card class="card mx-auto" elevation="5"
            v-bind:color="item.card_color" :height="item.card_height">
        <div class="text-left">
            <v-card-text>
                <h4>{{ item.title }}</h4>
                <b>{{ item.description }}</b>
                <v-row>
                    <v-col cols="6">
                        <v-btn color="primary" class="homeButton">
                            Conoce los indicadores
                        </v-btn>
                    </v-col>
                    <v-col cols="6">

                    </v-col>
                </v-row>
                <v-divider class="white"/>
                <v-row>
                    <v-col cols="6">
                        <ProgressIndicator v-bind:indicator="investment"/>
                        <!--                    <h6>{{investment.title}}</h6>-->
                        <!--                    <v-progress-linear rounded color="blue darken-3" background-color="white"-->
                        <!--                                       v-model="investment.num"/>-->
                    </v-col>
                    <v-col cols="6">
                        <h6>{{capacity.title}}</h6>
                        <v-progress-linear rounded color="blue darken-3" background-color="white"
                                           v-model="capacity.num"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <div>
                            <h6>{{formation.title}}</h6>
                            <v-progress-linear rounded color="blue darken-3" background-color="white"
                                               v-model="formation.num"/>
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <h6>{{production.title}}</h6>
                        <v-progress-linear rounded color="blue darken-3" background-color="white"
                                           v-model="production.num"/>
                    </v-col>
                </v-row>
            </v-card-text>
        </div>
    </v-card>
</template>

<script>
    import ProgressIndicator from "./ProgressIndicator";

    export default {
        name: "Card",
        props: [
            'item',
        ],
        components: [
            ProgressIndicator
        ],
        methods: {},
        data: () => {
            return {
                investment: {
                    title: "Inversión",
                    num: 12,
                    color: "deep-purple darken-1"
                },
                capacity: {
                    title: "Capacidad",
                    num: 35,
                    color: "deep-purple darken-1"
                },
                formation: {
                    title: "Formación",
                    num: 20,
                    color: "deep-purple darken-1"
                },
                production: {
                    title: "Producción bibliográfica",
                    num: 70,
                    color: "deep-purple darken-1"
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

    h6 {
        color: white;
        align-self: flex-start;
    }
</style>
