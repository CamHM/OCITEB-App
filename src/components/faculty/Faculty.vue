<template>
    <v-row no-gutters>
        <v-col cols="2">
            <SideBar />
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-row>
                    <Header :items-breadc="itemsBreadc.concat({
                        text: `${Faculty.name}`,
                        disabled: true,
                        href: '',
                    })"/>
                </v-row>
                <v-row class="firstRow" v-if="showOptions">
                    <v-col cols="4">
                        <v-select :items="indicators" v-model="value" label="Indicadores" solo dense> </v-select>
                    </v-col>
                    <div class="select">
                        <v-select :items="charts" label="Tipo de gráfico" style="width: 200px" solo dense> </v-select>
                        <v-select :items="years" label="Año" solo dense style="margin-left: 20px; width: 120px"> </v-select>
                    </div>
                </v-row>
                <v-row class="secondRow">
                    <v-col cols="8" class="firstCol">
                        <v-row class="indicatorsFirstRow">
                            <v-col cols="6">
                                <IndicatorCard :item="selectedIndicators[0]">
                                    <div slot="indicator-header" class="indicator-header">
                                        <p>I01 - Número de proyectos de investigación según financiación</p>
                                        <v-icon color="white" @click="changeShowOptions">mdi-dots-vertical</v-icon>
                                    </div>
                                    <RadialBar slot="indicator-chart"> </RadialBar>
                                </IndicatorCard>
                            </v-col>
                            <v-col cols="6">
                                <IndicatorCard :item="selectedIndicators[1]">
                                    <div slot="indicator-header">
                                        <p>I01 - Número de proyectos de investigación según financiación</p>
                                    </div>
                                    <DonutChart slot="indicator-chart"> </DonutChart>
                                </IndicatorCard>
                            </v-col>
                        </v-row>
                        <v-row class="indicatorsSecondRow">
                            <v-col cols="12">
                                <IndicatorCard :item="mainIndicator">
                                    <div slot="indicator-header">
                                        <p>I01 - Número de proyectos de investigación según financiación</p>
                                    </div>
                                    <LineChart slot="indicator-chart"> </LineChart>
                                </IndicatorCard>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="4" class="secondCol">
                        <ApolloQuery
                                :query="require('../../graphql/Reports.gql')"
                                :variables="{ value }"
                        >
                            <template slot-scope="{ result: { loading, data, error }}">
                                <div v-if="loading">
                                    <v-progress-linear indeterminate color="cyan"> </v-progress-linear>
                                </div>
                                <div v-else-if="error">
                                    {{error.message}}
                                </div>
                                <div v-else-if="data" class="panel">
                                    <v-row v-for="report in data.Indicator.reports" :key="report.code" class="panelRow">
                                        <v-col>
                                            <IndicatorCard :item="report" panel="true"/>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-else class="no-result apollo">Selecciona un Indicador para empezar </div>
                            </template>
                        </ApolloQuery>
                    </v-col>
                </v-row>
                <v-row>
                    <Footer />
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "../general/SideBar";
    import Header from "../general/Header";
    import Footer from "../general/Footer";
    import IndicatorCard from "../indicators/IndicatorCard";
    import RadialBar from "../charts/RadialBar";
    import DonutChart from "../charts/DonutChart";
    import LineChart from "../charts/LineChart";
    import gql from "graphql-tag";

    export default {
        name: "Faculty",
        components: {
            SideBar,
            Header,
            Footer,
            IndicatorCard,
            RadialBar,
            DonutChart,
            LineChart,
        },
        data () {
            return {
                Faculty: {},
                value: '',
                showOptions: true,
                indicators: ['Inversión', 'Formación', 'Capacidades', 'Producción Bibliografica'],
                Indicator: { },
                charts: ['Tarta', 'Pie', 'Dona', 'Y todo tipo de comida más'],
                years: ['2016', '2017', '2018', '2019'],
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
                itemsBreadc: [
                    {
                        text: '',
                        disabled: false,
                        href: '/'
                    },
                    {
                        text: 'Facultades',
                        disabled: false,
                        href: 'faculties',
                    },
                ],
            }
        },
        methods: {
            changeShowOptions() {
                this.showOptions = !this.showOptions
            }
        },
        apollo: {
            Faculty: {
                query: gql`
                    query findFaculty ($_id: String!) {
                        Faculty(_id: $_id) {
                            _id
                            name
                            abbreviation
                            report
                            type
                        }
                    }`,
                variables () {
                    return {
                        _id: this.$route.params.faculty
                    }
                }
            },
        }
    }
</script>

<style scoped>
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
    .firstRow {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        height: 40px;
    }
    .select {
        width: auto;
        display: flex;
        margin-left: 12px;
        margin-right: 12px;
    }
    .secondRow {
        height: 120%;
    }
    .indicatorsFirstRow {
        height: 55%;
    }
    .indicatorsSecondRow {
        height: 45%;
        margin-top: 10px;
    }
    .secondCol {
        overflow-y: scroll;
        overflow-x: auto;
        padding: 20px 10px;
        height: 110vh;
        margin-top: 20px;
    }
    .secondCol::-webkit-scrollbar {
        display: none;
    }
    .panelRow {
        height: 33%;
    }
    .indicator-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
</style>