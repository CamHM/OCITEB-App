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
        props: ['series', 'labels'],
        data() {
            return {
                chartOptions: {
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
                        curve: 'straight',
                        colors: ['#8770fa', '#eb6262', '#ffa653', '#2de0dd', '#e02dd4', '#ffee8f'],
                    },
                    fill: {
                        colors: ['#8770fa', '#eb6262', '#ffa653', '#2de0dd', '#e02dd4', '#ffee8f']
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
                        intersect: true,
                        style: {
                            fontSize: '12px',
                        },
                        fillSeriesColor: true,
                        theme: 'dark',
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
                    },
                }
            }
        }
    }
</script>

<style scoped>

</style>