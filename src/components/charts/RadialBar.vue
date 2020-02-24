<template>
    <div>
        <VueApexCharts type="radialBar" height="270" :options="chartOptions" :series="series"></VueApexCharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "RadialBar",
        components: {
            VueApexCharts
        },
        data() {
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
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce((a, b) => {return a + b}, 0);
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
                    },
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
                        markers: {
                            width: 12,
                            height: 12,
                            strokeWidth: 2,
                            strokeColor: '#fff',
                            fillColors: undefined,
                            radius: 12,
                            customHTML: function () {
                                return '<span class="custom-marker"><i class="custom-i"></i></span>'
                            },
                            onClick: undefined,
                            offsetX: 0,
                            offsetY: 0
                        },
                        onItemClick: {
                            toggleDataSeries: true
                        },
                        onItemHover: {
                            highlightDataSeries: true
                        },
                    },
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