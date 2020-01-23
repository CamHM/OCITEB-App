<template>
    <div>
        <VueApexCharts type="area" :series="series" :options="chartOptions" height="220"> </VueApexCharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "AreaChart",
        components: {
            VueApexCharts
        },
        data() {
            return {
                series: [ {
                    name: 'Promedio',
                    data: [34, 45, 38, 46, 32, 39]
                }],
                chartOptions: {
                    chart: {
                        type: 'area',
                        toolbar: {
                            show: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth',
                        colors: ['#8770fa', '#ffa653', '#eb6262'],
                    },
                    legend: {
                        show: false
                    },
                    title: {
                        text: '$658,980,000 - $386,589,000',
                        align: 'left',
                        style: {
                            fontSize: "16px",
                            color: '#fff'
                        }
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
                    fill: {
                        opacity: 0
                    },
                    colors: ['#8770fa', '#ffa653', '#eb6262'],
                }
            }
        }
    }
</script>

<style scoped>

</style>