<template>
    <div>
        <VueApexCharts type="radialBar" height="270" :options="chartOptions" :series="series"> </VueApexCharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "RadialBar",
        components: {
            VueApexCharts
        },
        data () {
            return {
                chartOptions: {
                    chart: {
                        height: 270,
                        type: 'radialbar',
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                margin: 2,
                                size: '30%',
                            },
                            track: {
                                show: true,
                                background: '#2b3253',
                                margin: 7,
                                strokeWidth: '100%',
                            },
                            dataLabels: {
                                name: {
                                    show: true,
                                    fontSize: '15px',
                                },
                                value: {
                                    fontSize: '14px',
                                    color: 'lightgray',
                                    offsetY: -2,
                                },
                                total: {
                                    show: true,
                                    label: 'Total',
                                    formatter: function () {
                                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                        return 42459
                                    },
                                    color: 'white',
                                }
                            },
                        }
                    },
                    labels: ['Aporte UPTC Especie', 'Aporte UPTC Efectivo', 'Aporte UPTC Externo'],
                    colors: ['#8770fa', '#ffa653', '#eb6262'],
                    fill: {
                        opacity: 1,
                    },/*
                    legend: {
                        show: true,
                        showForSingleSeries: false,
                        position: 'bottom',
                        horizontalAlign: 'left',
                        fontSize: '12px',
                        floating: true,
                        labels: {
                            colors: ['#bdbdbd', '#bdbdbd', '#bdbdbd'],
                            useSeriesColors: false
                        },
                        onItemClick: {
                            toggleDataSeries: true
                        },
                        onItemHover: {
                            highlightDataSeries: true
                        },
                    },*/
                    stroke: {
                        lineCap: "round",
                    }
                },
                series: [77, 65, 53],
            }
        }
    }
</script>

<style scoped>

</style>