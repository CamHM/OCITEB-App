<template>
    <v-card class="card mx-auto" elevation="5"
            v-bind:color="item.card_color" :height="item.card_height">
        <v-row class="firstRow" no-gutters>
            <v-col cols="6" class="firstCol">
                <div>
                    <h4><b>{{ item.title }}</b></h4>
                    <p>{{ item.description }}</p>
                </div>
                <v-btn small color="primary" class="homeButton" @click="goComparison">
                    Conoce los indicadores
                </v-btn>
            </v-col>
            <v-col cols="6" class="secondCol">
                <img src="../../assets/indicators.jpg" width="235">
            </v-col>
        </v-row>
        <v-divider class="darken-2 grey"/>
        <v-row class="secondRow" no-gutters>
            <v-col cols="6" class="thirdCol endPosition">
                <div class="indicatorProgress">
                    <h6>{{investment.title}}</h6>
                    <v-progress-linear rounded color="#7567f0" background-color="white"
                                       v-model="investment.num"/>
                </div>
                <div class="indicatorProgress">
                    <h6>{{formation.title}}</h6>
                    <v-progress-linear rounded color="#ff9e43" background-color="white"
                                       v-model="formation.num"/>
                </div>
            </v-col>
            <v-col cols="6" class="fourthCol endPosition">
                <div class="indicatorProgress">
                    <h6>{{capacity.title}}</h6>
                    <v-progress-linear rounded color="#ea5454" background-color="white"
                                       v-model="capacity.num"/>
                </div>
                <div class="indicatorProgress">
                    <h6>{{production.title}}</h6>
                    <v-progress-linear rounded color="#28c76f" background-color="white"
                                       v-model="production.num"/>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>

    export default {
        name: "Card",
        props: [
            'item',
        ],
        components: [],
        data: () => {
            return {
                investment: {
                    title: "Inversión",
                    num: 50,
                    color: "#7567f0"
                },
                capacity: {
                    title: "Capacidad",
                    num: 50,
                    color: "deep-purple darken-1"
                },
                formation: {
                    title: "Formación",
                    num: 50,
                    color: "deep-purple darken-1"
                },
                production: {
                    title: "Producción bibliográfica",
                    num: 50,
                    color: "deep-purple darken-1"
                }
            }
        },
        methods: {
            goComparison () {
                this.$router.push('/comparison').catch(() => {});
            }
        }
    }
</script>

<style scoped>
    .card {
        padding: 20px;
        color: white;
    }

    .card:hover {
        cursor: context-menu;
    }

    .firstRow {
        height: 75%;
        padding-bottom: 10px;
    }

    .secondRow {
        height: 25%;
    }

    .firstCol {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 5px;
        padding-right: 10px;
    }

    .secondCol {
        display: flex;
        padding-left: 10px;
    }

    .thirdCol {
        padding-right: 10px;
    }

    .fourthCol {
        padding-left: 10px;
    }

    .endPosition {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .indicatorProgress {
        margin-bottom: 5px;
    }

    .homeButton {
        font-size: 11px;
        text-transform: lowercase;
    }

    h4 {
        font-size: 17px;
    }

    p {
        color: lightgray;
        font-size: 11px;
    }

    h6 {
        color: lightgray;
        font-size: 11px;
        font-weight: lighter;
    }
</style>
