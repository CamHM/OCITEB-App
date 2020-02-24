<template>
    <div>
        <VueApexCharts :series="series" :options="chartOptions" height="220"></VueApexCharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "AreaChart",
        components: {
            VueApexCharts
        },
        props: ['series', 'labels'],
        data() {
            return {
                chartOptions: {
                    chart: {
                        height: 350,
                        toolbar: {
                            show: false
                        }
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: '30%',
                        }
                    },
                    title: {
                        text: '',
                        align: 'left',
                        style: {
                            fontSize: "16px",
                            color: '#248a55',
                        }
                    },
                    dataLabels: {
                        enabled: false
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
                    colors: ['#8770fa', '#eb6262', '#ffa653', '#2de0dd', '#e02dd4', '#ffee8f'],
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
                }
            }
        }
    }
</script>

<style scoped>

</style>