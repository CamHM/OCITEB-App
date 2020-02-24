<template>
    <v-row no-gutters>
        <v-col cols="2">
            <SideBar/>
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
                        <v-select :items="indicators" v-model="value" label="Indicadores" solo dense></v-select>
                    </v-col>
                    <div v-if="currentResult && indicator" class="select">
                        <v-select :items="currentResult.map(r => r['year'])" v-model="currentYear" label="Año" solo dense
                                  style="margin-left: 20px; width: 120px"></v-select>
                    </div>
                </v-row>
                <v-row class="secondRow">
                    <v-col v-if="indicator" cols="8" class="firstCol">
                        <v-row v-if="currentResult && currentResult.length === 0">
                            <v-col>
                                <p>Por el momento no tenemos información de este indicador.</p>
                            </v-col>
                        </v-row>
                        <v-row v-else class="indicatorsFirstRow">
                            <v-col :cols="(graphic === 'bar' || graphic === 'pie' || graphic === 'radial') ? 6 : 12"
                                   v-for="graphic in indicator.graphic" :key="graphic">
                                <IndicatorCard v-if="currentYear" :item="selectedIndicators[0]">
                                    <div slot="indicator-header" class="indicator-header">
                                        <p>{{ indicator.code}} - {{indicator.value}}</p>
                                        <v-icon color="white" @click="changeShowOptions">mdi-dots-vertical</v-icon>
                                    </div>
                                    <RadialBar v-if="graphic === 'radial' || graphic === 'points'"
                                               :series="yearSeries"
                                               :labels="conceptLabels"
                                               slot="indicator-chart">
                                    </RadialBar>
                                    <DonutChart v-if="graphic === 'pie'"
                                                :series="yearSeries"
                                                :labels="conceptLabels"
                                                slot="indicator-chart">
                                    </DonutChart>
                                    <BarChart v-if="graphic === 'bar'" :info="yearSeries" :labels="conceptLabels" slot="indicator-chart"></BarChart>
                                    <LineChart v-if="graphic === 'line' || graphic === 'area'" :report="currentResult" :type="graphic" slot="indicator-chart"></LineChart>
                                    <LineChart v-if="graphic === 'line-compare'" :report="currentResult" type="line" slot="indicator-chart"></LineChart>
                                    <BarCompare v-if="graphic === 'bar-compare'" type="area" slot="indicator-chart"></BarCompare>
                                    <BarPointLine v-if="graphic === 'bar-point-line'" slot="indicator-chart"> </BarPointLine>
                                    <LinePoints v-if="graphic === 'line-points'" slot="indicator-chart"> </LinePoints>
                                    <p>{{graphic}}</p>
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
                                    <v-progress-linear indeterminate color="cyan"></v-progress-linear>
                                </div>
                                <div v-else-if="error">
                                    {{error.message}}
                                </div>
                                <div v-else-if="data" class="panel">
                                    <v-row v-for="report in data.Indicator.reports" :key="report.code" class="panelRow"
                                           @click="showActualIndicator(report)">
                                        <v-col>
                                            <IndicatorCard :item="report" panel="true"/>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-else class="no-result apollo">Selecciona un Indicador para empezar</div>
                            </template>
                        </ApolloQuery>
                    </v-col>
                </v-row>
                <v-row>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "../general/SideBar";
    import Header from "../general/Header";
    // import Footer from "../general/Footer";
    import IndicatorCard from "../indicators/IndicatorCard";
    import RadialBar from "../charts/RadialBar";
    import DonutChart from "../charts/DonutChart";
    import BarChart from "../charts/BarChart";
    import LineChart from "../charts/LineChart";
    import LinePoints from "../charts/LinePoints";
    import BarCompare from "../charts/BarCompare";
    import BarPointLine from "../charts/BarPointLine";
    import gql from "graphql-tag";
    import { I01, I02, I03, I04, I05, I06} from "../../graphql/indicatorsQueries";

    export default {
        name: "Faculty",
        components: {
            SideBar,
            Header,
            // Footer,
            IndicatorCard,
            RadialBar,
            DonutChart,
            BarChart,
            LineChart,
            LinePoints,
            BarCompare,
            BarPointLine,
        },
        data() {
            return {
                Faculty: {},
                value: 'Inversión',
                showOptions: true,
                indicators: ['Inversión', 'Formación', 'Capacidades', 'Producción Bibliografica'],
                indicator: null,
                currentIndicator: 'I01',
                currentResult: null,
                years: ['2016'],
                currentYear: null,
                selectedIndicators: [
                    {
                        title: 'I02 - Inversión en I+D a nivel de proyectos',
                        icon: 'mdi-currency-usd',
                        isPanel: false,
                        bgc: '#e6f7ee',
                        iconColor: '#2dcd7a',
                    },
                ],
                itemsBreadc: [
                    {
                        text: '',
                        disabled: false,
                        href: '/'
                    },
                    {
                        text: 'Facultades',
                        disabled: false,
                        href: '/faculties',
                    },
                ],
            }
        },
        methods: {
            changeShowOptions() {
                this.showOptions = !this.showOptions
            },
            showActualIndicator(indicator) {
                this.indicator = indicator;
                this.currentIndicator = indicator.code;
            },
        },
        computed: {
            yearSeries: function () {
                return this.currentResult.filter(r => r['year'] === this.currentYear).map(r => r['total'])
            },
            conceptLabels: function () {
                return this.currentResult.filter(r => r['year'] === this.currentYear).map(r => r['concept'])
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
                variables() {
                    return {
                        _id: this.$route.params.faculty
                    }
                }
            },
            currentResult: {
                query () {
                    if (this.currentIndicator === 'I01') { return I01 }
                    else if (this.currentIndicator === 'I02') { return I02 }
                    else if (this.currentIndicator === 'I03') { return I03 }
                    else if (this.currentIndicator === 'I04') { return I04 }
                    else if (this.currentIndicator === 'I05') { return I05 }
                    else if (this.currentIndicator === 'I06') { return I06 }
                },
                variables () {
                    return {
                        faculty: this.Faculty.report
                    }
                },
                update: data => data.ReportI01 || data.ReportI02 || data.ReportI03 || data.ReportI04 || data.ReportI05 || data.ReportI06
            }
        }
    }
</script>

<style scoped>
    .dark-back {
        background: #3f4a5b;
        height: 100vh;
        margin: 0;
        padding: 30px 30px 30px 30px;
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

    .secondCol {
        overflow-y: scroll;
        overflow-x: auto;
        padding: 20px 10px;
        height: 110vh;
        margin-top: 20px;
        float: right;
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