<template>
    <VueApexCharts type="bar" height="270" :options="chartOptions" :series="series"> </VueApexCharts>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "BarChart",
        components: {
            VueApexCharts
        },
        data() {
            return {
                series: [{
                    data: [2.3, 3.1, 4.0]
                }],
                chartOptions: {
                    plotOptions: {
                        bar: {
                            columnWidth: '35%',
                            distributed: true,
                            dataLabels: {
                                position: 'top', // top, center, bottom
                            },
                        }
                    },
                    colors: ['#8770fa', '#ffa653', '#eb6262'],
                    dataLabels: {
                        enabled: true,
                        offsetY: -20,
                        style: {
                            fontSize: '12px',
                            colors: ["#fff"]
                        }
                    },
                    xaxis: {
                        categories: ["Jan", "Feb", "Mar"],
                        position: 'bottom',
                        labels: {
                            show: false,
                            offsetY: 0,
                        },
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        },
                        tooltip: {
                            enabled: true,
                            offsetY: -35,
                        }
                    },
                },
            }
        }
    }
</script>

<style scoped>

</style>