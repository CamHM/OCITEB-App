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
        props: [],
        data() {
            return {
                series: [
                    {
                        name: 'Total',
                        type: 'line',
                        data: [31, 40, 28, 51, 42, 49]
                    },
                    {
                        name: 'Total',
                        type: 'bar',
                        data: [31, 40, 28, 51, 42, 49]
                    }
                ],
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
                        text: '$658,980,000',
                        align: 'left',
                        style: {
                            fontSize: "16px",
                            color: '#248a55',
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: 4,
                        curve: 'straight',
                        colors: ['#8770fa', '#eb6262', '#ffa653'],
                    },
                    fill: {
                        color: ['#8770fa', '#eb6262', '#ffa653']
                    },
                    xaxis: {
                        categories: ['2014', '2015', '2016', '2017', '2018', '2019'],
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
                    colors: ['#8770fa', '#ffa653', '#eb6262'],
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