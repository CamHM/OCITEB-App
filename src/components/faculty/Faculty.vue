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
                <v-row class="firstRow">
                    <v-col cols="4">
                        <v-select :items="indicators" v-model="value" label="Indicadores" solo dense></v-select>
                    </v-col>
                    <div v-if="currentResult && indicator && !(currentResult && currentResult.length === 0)" class="select">
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-btn class="mx-2" fab dark small color="cyan" v-on="on" @click="showTable">
                                    <v-icon dark>mdi-table-large</v-icon>
                                </v-btn>
                                <IndicatorTable :open="isTableOpen" :title="indicator.value" :items="getTableData" @close-table="showTable"> </IndicatorTable>
                            </template>
                            <span>Ver datos</span>
                        </v-tooltip>
                        <v-select :items="years" v-model="currentYear" label="Año" solo dense
                                  style="margin-left: 20px; width: 120px"></v-select>
                    </div>
                </v-row>
                <v-row class="secondRow">
                    <v-col v-if="!indicator"> </v-col>
                    <v-col v-if="indicator" cols="8" class="firstCol">
                        <v-row v-if="!currentYear">
                            <v-col>
                                <p>Seleccione un año</p>
                            </v-col>
                        </v-row>
                       <v-row v-if="currentResult && currentResult.length === 0">
                            <v-col>
                                <p>Por el momento no tenemos información de este indicador.</p>
                            </v-col>
                        </v-row>
                        <v-row v-else class="indicatorsFirstRow">
                            <v-col :cols="(graphic === 'bar' || graphic === 'pie' || graphic === 'radial') ? 12 : 12"
                                   v-for="graphic in indicator.graphic" :key="graphic">
                                <IndicatorCard v-if="currentYear" :item="selectedIndicators[0]">
                                    <div slot="indicator-header" class="indicator-header">
                                        <p>{{ indicator.code}} - {{indicator.value}}</p>
                                    </div>
                                    <RadialBar v-if="graphic === 'radial'"
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
                                    <LineCompare v-if="graphic === 'line-compare'" :series="seriesCompare" :labels="yearsCompare" slot="indicator-chart"></LineCompare>
                                    <BarCompare v-if="graphic === 'bar-compare'" :series="seriesCompare" :labels="yearsCompare" type="area" slot="indicator-chart"></BarCompare>
                                    <BarPointLine v-if="graphic === 'bar-point-line'" :series="seriesCompare" :labels="yearsCompare" slot="indicator-chart"> </BarPointLine>
                                    <LinePoints v-if="graphic === 'line-points'" :series="seriesCompare" :labels="yearsCompare" slot="indicator-chart"> </LinePoints>
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
                                    <v-row v-for="report in data.Indicator.reports" :key="report.code"
                                           :class="{'panelRow': indicator !== report, 'panelRowSelected': indicator === report}"
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
    import IndicatorTable from "../general/IndicatorTable";
    import LineCompare from "../charts/LineCompare";
    import gql from "graphql-tag";
    import { I01, I02, I03, I04, I05, I06, F01, F02, F03, C01, C02, C02_1, PB01, PB021, PB022, PB03} from "../../graphql/indicatorsQueries";

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
            IndicatorTable,
            LineCompare,
        },
        data() {
            return {
                Faculty: {},
                value: 'Inversión',
                indicators: ['Inversión', 'Formación', 'Capacidades', 'Producción Bibliografica'],
                indicator: null,
                currentIndicator: 'I01',
                currentResult: null,
                currentYear: null,
                isTableOpen: false,
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
            showActualIndicator(indicator) {
                this.indicator = indicator;
                this.currentIndicator = indicator.code;
                this.currentYear = null
            },
            showTable() {
                this.isTableOpen = !this.isTableOpen
            },
        },
        computed: {
            yearSeries: function () {
                return this.transformIndicator.filter(r => r['year'] === this.currentYear).map(r => r['total'])
            },
            conceptLabels: function () {
                return this.transformIndicator.filter(r => r['year'] === this.currentYear).map(r => r['concept'])
            },
            years: function () {
                return this.transformIndicator.map(r => r['year']);
            },
            seriesCompare: function () {
                const newSeries = [];
                this.transformIndicator.forEach(r => {
                    let item = newSeries.find(s => s.name === r.concept);
                    item ? item.data.push(r.total) : newSeries.push({ name: r.concept, data: [r.total]})
                });
                return newSeries
            },
            yearsCompare: function() {
                let years = [];
                this.transformIndicator.forEach(r => {if(!years.includes(r.year)) years.push(r.year)});
                return years
            },
            transformIndicator: function () {
                let newI02 = [];
                if(this.currentIndicator === 'I02') {
                    this.currentResult.forEach(r => {
                        newI02.push({ year: r.year, concept: "Monto especie interno", total: r.internalS_amount });
                        newI02.push({ year: r.year, concept: "Monto efectivo interno", total: r.internalE_amount });
                        newI02.push({ year: r.year, concept: "Monto externo", total: r.external_amount });
                    });
                } else if(this.currentIndicator === 'C01') {
                    this.currentResult.forEach(r => newI02.concat(r))
                } else
                    newI02 = this.currentResult;
                return newI02
            },
            getTableData: function () {
                if(this.currentIndicator === 'I02' || this.currentIndicator === 'C01') return this.transformIndicator;
                else return this.currentResult
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
                    else if (this.currentIndicator === 'F01') { return F01 }
                    else if (this.currentIndicator === 'F02') { return F02 }
                    else if (this.currentIndicator === 'F03') { return F03 }
                    else if (this.currentIndicator === 'C01') { return C01 }
                    else if (this.currentIndicator === 'C02') { return C02 }
                    else if (this.currentIndicator === 'C02.1') { return C02_1 }
                    else if (this.currentIndicator === 'PB01') { return PB01 }
                    else if (this.currentIndicator === 'PB02.1') { return PB021 }
                    else if (this.currentIndicator === 'PB02.2') { return PB022 }
                    else if (this.currentIndicator === 'PB03') { return PB03 }
                },
                variables () {
                    return {
                        faculty: this.Faculty.report
                    }
                },
                update: data => data.ReportI01 || data.ReportI02 || data.ReportI03 || data.ReportI04withYear || data.ReportI05 || data.ReportI06
                        || data.ReportF01 || data.ReportF02 || data.ReportF03 || data.ReportC01 || data.ReportC02 || data.ReportC02_1
                        || data.ReportPB01 || data.ReportPB021 || data.ReportPB022 || data.ReportPB03
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
        height: 100%;
        margin-top: 20px;
        float: right;
    }
    .secondCol::-webkit-scrollbar {
        width: 5px;
        height: 0;
    }
    .secondCol::-webkit-scrollbar-thumb {
        background: #4abfd4;
        border-radius: 4px;
    }
    .secondCol::-webkit-scrollbar-track {
        background: #2d394d;
        border-radius: 4px;
    }
    .panelRow {
        height: 33%;
    }
    .panelRowSelected {
        background-color: #727b8a;
        border-radius: 8px;
    }
    .indicator-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
</style>