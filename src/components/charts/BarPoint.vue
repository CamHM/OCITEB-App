<template>
    <VueApexCharts type="line" height="270" :options="chartOptions" :series="chartOptions.series"/>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "BarPoint",
        components: {
            VueApexCharts
        },
        // props: ['labels'],
        data() {
            return {
                chartOptions: {
                    series: [
                        {
                            name: 'Column A',
                            type: 'column',
                            data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
                        },
                        {
                            name: "Column B",
                            type: 'column',
                            data: [10, 19, 27, 26, 34, 35, 40, 38]
                        },
                        {
                            name: "Line C",
                            type: 'line',
                            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                        },
                    ],
                    chart: {
                        height: 350,
                        type: 'line',
                        toolbar: {
                            show: false
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
                    stroke: {
                        width: 4,
                        curve: 'smooth',
                        colors: ['#8770fa', '#ffa653', '#eb6262'],
                    },
                    legend: {
                        show: false
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            gradientToColors: ['#f7829f'],
                            shadeIntensity: 1,
                            type: 'horizontal',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100, 100, 100]
                        },
                    },
                    xaxis: {
                        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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
                    tooltip: {
                        enabled: true,
                        style: {
                            fontSize: '12px',
                        },
                        fillSeriesColor: true,
                        theme: 'dark',
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>