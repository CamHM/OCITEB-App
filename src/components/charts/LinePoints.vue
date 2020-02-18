<template>
    <div>
        <VueApexCharts type="line" :series="series" :options="chartOptions" height="220"/>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "Line-Points",
        components: {
            VueApexCharts
        },
        data() {
            return {
                series: [
                    {
                        name: 'Total',
                        data: [31, 40, 28, 51, 42, 49]
                    },
                    {
                        name: 'Otro',
                        data: [49, 31, 100, 200, 50, 20]
                    },
                    {
                        name: 'Linea',
                        data: [10, 50, 40, 70, 20, 89]
                    }
                ],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'line',
                        toolbar: {
                            show: false
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
                        colors: ['#8770fa', '#ffa653', '#eb6262'],
                    },
                    legend: {
                        show: false
                    },
                    fill: {
                        colors: ['#8770fa', '#ffa653', '#eb6262']
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
                    markers: {
                        size: 5,
                        colors: undefined,
                        strokeColors: '#fff',
                        strokeWidth: 2,
                        strokeOpacity: 0.9,
                        strokeDashArray: 0,
                        fillOpacity: 1,
                        discrete: [],
                        shape: "circle",
                        radius: 2,
                        offsetX: 0,
                        offsetY: 0,
                        hover: {
                            size: undefined,
                            sizeOffset: 3
                        }
                    },
                    tooltip: {
                        shared: false,
                        intersect: true
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>