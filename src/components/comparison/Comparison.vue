<template>
    <v-row class="comparison" no-gutters>
        <v-col cols="2">
            <SideBar/>
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-row>
                    <Header/>
                </v-row>
                <v-row>
                    <v-col cols="2" offset-md="8">
                        <v-select :items="charts" label="Tipo de gráfico" solo dense/>
                    </v-col>
                    <v-col class="ml-auto" cols="2" offset-md="10">
                        <v-select :items="years" label="Año" solo dense/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-if="indicators.length > 0 && faculties.length > 0" cols="9"
                           class="firstCol">
                        <v-row class="indicatorsFirstRow">
                            <v-col v-for="faculty in faculties" :key="faculty" :cols="12/faculties.length">
                                <h4>{{faculty}}</h4>
                                <IndicatorCard :item="selectedIndicators[0]" v-for="indicator in indicators"
                                               :key="indicator">
                                    <div slot="indicator-header" class="indicator-header">
                                        <p>{{indicator}}</p>
                                        <BarCompare/>
                                        <ApolloQuery :query="queryI01" :variables="{faculty: faculty}" v-if="indicator = 'I01'" >
                                            <template slot-scope="{ result: { loading, error, data } }">
                                                <span v-if="loading">Loading...</span>
                                                <span v-else-if="error">{{error}}</span>
                                                <section v-if="data">
                                                    <h1>{{data}}</h1>
                                                </section>
                                            </template>
                                        </ApolloQuery>
                                    </div>
                                </IndicatorCard>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col v-if="indicators.length < 1 || faculties.length < 1" cols="9">
                        <LinePoints/>
                        <BarPointLine/>
                        <BarCompare/>
                    </v-col>
                    <v-col cols="3">
                        <SidebarComparison @selectFaculties="setFaculties" @selectIndicators="setIndicators"/>
                    </v-col>
                </v-row>
                <v-row>
                    <Footer/>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "../general/SideBar";
    import Header from "../general/Header";
    import Footer from "../general/Footer";
    import SidebarComparison from "./SidebarComparison";
    import IndicatorCard from "../indicators/IndicatorCard";
    import LinePoints from "../charts/LinePoints";
    import BarPointLine from "../charts/BarPointLine";
    import BarCompare from "../charts/BarCompare";
    import {I01} from "../../graphql/indicatorsQueries";

    export default {
        name: "Comparison",
        components: {
            SideBar,
            Header,
            Footer,
            SidebarComparison,
            IndicatorCard,
            LinePoints,
            BarPointLine,
            BarCompare
        },
        data: function () {
            return {
                queryI01: I01,
                charts: ['Tarta', 'Pie', 'Dona', 'Y todo tipo de comida más'],
                years: ['2016', '2017', '2018', '2019'],
                faculties: [],
                indicators: [],
                selectedIndicators: [
                    {
                        title: 'I02 - Inversión en I+D a nivel de proyectos',
                        icon: 'mdi-currency-usd',
                        isPanel: false,
                        bgc: '#e6f7ee',
                        iconColor: '#2dcd7a',
                    },
                    {
                        title: 'I01 - Número de proyectos de investigación según financiación',
                        icon: 'mdi-currency-usd',
                        isPanel: false,
                        bgc: '#e6f7ee',
                        iconColor: '#2dcd7a',
                    },
                ],
                mainIndicator: {
                    title: 'I05 - Ingresos recursos propios posgrados',
                    icon: 'mdi-currency-usd',
                    isPanel: false,
                    bgc: '#e6f7ee',
                    iconColor: '#2dcd7a',
                },
            }
        },
        methods: {
            setFaculties(list) {
                this.faculties = list;
            },
            setIndicators(list) {
                this.indicators = list;
            }
        }
    }
</script>

<style scoped>
    .comparison {
        width: 100%;
        background-color: #3f4a5b;
    }

    .dark-back {
        background: #3f4a5b;
        height: 100vh;
        margin: 0;
        padding: 30px 30px 10px 30px;
        overflow-y: scroll;
    }

    .dark-back::-webkit-scrollbar {
        display: none;
    }
</style>