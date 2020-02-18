<template>
    <VueApexCharts type="bar" height="270" :options="chartOptions" :series="series"></VueApexCharts>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "BarCompare",
        components: {
            VueApexCharts
        },
        data() {
            return {
                series: [
                    {
                        name: 'One',
                        data: [2.3, 3.1, 4.0]
                    },
                    {
                        name: 'Two',
                        data: [1, 3, 5]
                    }
                ],
                chartOptions: {
                    plotOptions: {
                        bar: {
                            columnWidth: '35%',
                            dataLabels: {
                                position: 'top', // top, center, bottom
                            }
                        }
                    },
                    colors: ['#8770fa', '#eb6262', '#ffa653'],
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
                    yaxis: {
                        labels: {
                            show: true,
                            align: 'right',
                            maxWidth: 160,
                            style: {
                                color: '#bdbdbd',
                                fontSize: '12px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                            }
                        }
                    },
                    legend: {
                        show: true,
                        showForSingleSeries: true,
                        showForNullSeries: true,
                        showForZeroSeries: true,
                        position: 'bottom',
                        horizontalAlign: 'center',
                        floating: false,
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        labels: {
                            colors: '#fff',
                            useSeriesColors: false
                        }
                    }
                },
            }
        }
    }
</script>

<style scoped>

</style>