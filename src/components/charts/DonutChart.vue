<template>
    <VueApexCharts type="donut" :options="chartOptions" :series="series"> </VueApexCharts>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "DonutChart",
        components: {
            VueApexCharts
        },
        data () {
            return {
                series: [23043, 14658, 4758],
                chartOptions: {
                    chart: {
                        width: 250,
                        type: 'donut',
                    },
                    labels: ['Contrapartida ', 'Sin finaniación ', 'Capital Semilla '],
                    dataLabels: {
                        enabled: false
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                show: false
                            }
                        }
                    }],
                    legend: {
                        position: 'bottom',
                        horizontalAlign: 'left',
                        fontSize: '12px',
                        floating: true,
                        labels: {
                            colors: ['#bdbdbd', '#bdbdbd', '#bdbdbd'],
                            useSeriesColors: false
                        },
                        width: 200,
                    },
                    colors: ['#8770fa', '#ffa653', '#eb6262'],
                    stroke: {
                        show: false,
                        width: 0
                    }
                },
            }
        }
    }
</script>

<style scoped>

</style>