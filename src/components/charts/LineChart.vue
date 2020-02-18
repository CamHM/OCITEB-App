<template>
    <div>
        <VueApexCharts :type="type" :series="series" :options="chartOptions" height="220"> </VueApexCharts>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "AreaChart",
        components: {
            VueApexCharts
        },
        props: ['type'],
        data() {
            return {
                series: [{
                    name: 'Total',
                    data: [31, 40, 28, 51, 42, 49]
                }],
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
                }
            }
        }
    }
</script>

<style scoped>

</style>