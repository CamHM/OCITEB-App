<template>
    <v-row class="comparison" no-gutters>
        <v-col cols="2">
            <SideBar/>
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-row>
                    <Header :items-breadc="itemsBreadc"/>
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
                                        <LinePoints/>
                                        <div v-for="report in reports" v-bind:key="report.name">
                                            <ApolloQuery :query="report.query" :variables="{faculty: faculty}"
                                                         v-if="indicator === report.name">
                                                <template slot-scope="{ result: { loading, error, data } }">
                                                    <v-progress-linear indeterminate color="cyan" v-if="loading"/>
                                                    <span v-else-if="error">Error al cargar la información</span>
                                                    <section v-if="data">
                                                        <h5>{{data.Report + report.name}}</h5>
                                                    </section>
                                                </template>
                                            </ApolloQuery>
                                        </div>
                                    </div>
                                </IndicatorCard>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col v-if="indicators.length < 1 || faculties.length < 1" cols="9">
                        <LinePoints/>
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
    import BarCompare from "../charts/BarCompare";
    import {I01, I02, I03, I04, I05, I06, F01, F02, F03, C01, C02, C02_1} from "../../graphql/indicatorsQueries";

    export default {
        name: "Comparison",
        components: {
            SideBar,
            Header,
            Footer,
            SidebarComparison,
            IndicatorCard,
            LinePoints,
            BarCompare
        },
        data: function () {
            return {
                reports: [
                    {name: 'I01', query: I01},
                    {name: 'I02', query: I02},
                    {name: 'I03', query: I03},
                    {name: 'I04', query: I04},
                    {name: 'I05', query: I05},
                    {name: 'I06', query: I06},
                    {name: 'F01', query: F01},
                    {name: 'F02', query: F02},
                    {name: 'F03', query: F03},
                    {name: 'C01', query: C01},
                    {name: 'C02', query: C02},
                    {name: 'C02_1', query: C02_1}
                ],
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
                    }
                ],
                itemsBreadc: [
                    {
                        text: '',
                        disabled: false,
                        href: '/'
                    },
                    {
                        text: 'Comparación',
                        disabled: true,
                        href: '/comparison',
                    }
                ]
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