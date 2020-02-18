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
                    <v-col cols="9">
                        <v-row>
                            <v-col cols="6">
                                <IndicatorCard :item="selectedIndicators[0]">
                                    <div slot="indicator-header" class="indicator-header">
                                        <p>I01 - Número de proyectos de investigación según financiación</p>
                                        <v-icon color="white">mdi-dots-vertical</v-icon>
                                    </div>
                                    <RadialBar slot="indicator-chart"/>
                                </IndicatorCard>
                            </v-col>
                            <v-col cols="6">
                                <IndicatorCard :item="selectedIndicators[1]">
                                    <div slot="indicator-header">
                                        <p>I01 - Número de proyectos de investigación según financiación</p>
                                    </div>
                                    <DonutChart slot="indicator-chart"/>
                                </IndicatorCard>
                            </v-col>
                        </v-row>
                        <v-row class="indicatorsSecondRow">
                            <v-col cols="12">
                                <IndicatorCard :item="mainIndicator">
                                    <div slot="indicator-header">
                                        <p>I01 - Número de proyectos de investigación según financiación</p>
                                    </div>
                                    <LineChart slot="indicator-chart"/>
                                </IndicatorCard>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3">
                        <SidebarComparison/>
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
    import RadialBar from "../charts/RadialBar";
    import DonutChart from "../charts/DonutChart";
    import LineChart from "../charts/LineChart";

    export default {
        name: "Comparison",
        components: {
            SideBar,
            Header,
            Footer,
            SidebarComparison,
            IndicatorCard,
            RadialBar,
            DonutChart,
            LineChart
        },
        data: function () {
            return {
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
                }
            }
        },
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