<template>
    <VueApexCharts type="bar" height="270" :options="chartOptions" :series="series"></VueApexCharts>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "LineCompare",
        components: {
            VueApexCharts
        },
        props: ['series', 'labels'],
        data () {
            return {
                chartOptions: {
                    plotOptions: {
                        bar: {
                            horizontal: false,
                        },
                    },
                    xaxis: {
                        categories: this.labels,
                        labels: {
                            show: true,
                            trim: true,
                            style: {
                                colors: '#bdbdbd',
                                fontSize: '12px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                            },
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
                        position: 'right',
                        offsetY: 40,
                        floating: true,
                        labels: {
                            colors: '#bdbdbd',
                            useSeriesColors: false
                        },
                    },
                    colors: ['#8770fa', '#eb6262', '#ffa653', '#2de0dd', '#e02dd4', '#ffee8f'],
                    tooltip: {
                        enabled: true,
                        style: {
                            fontSize: '12px',
                        },
                        theme: 'dark',
                        fillSeriesColor: true,
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>