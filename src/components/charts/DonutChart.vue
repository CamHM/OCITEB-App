<template>
    <VueApexCharts type="donut"  height="270" :options="chartOptions" :series="series"> </VueApexCharts>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "DonutChart",
        components: {
            VueApexCharts
        },
        props: ['series', 'labels'],
        data () {
            return {
                chartOptions: {
                    chart: {
                        width: 250,
                        type: 'donut',
                    },
                    labels: this.labels,
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
                            colors: '#bdbdbd',
                            useSeriesColors: false
                        },
                        width: 200,
                    },
                    colors: ['#8770fa', '#eb6262', '#ffa653', '#2de0dd', '#e02dd4', '#ffee8f'],
                    stroke: {
                        show: false,
                        width: 0
                    }
                },
            }
        },
    }
</script>

<style scoped>

</style>