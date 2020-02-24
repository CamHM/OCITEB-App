<template>
    <IndicatorCard :item="selectedIndicators[0]" style="margin-top: 10px">
        <div slot="indicator-header" class="indicator-header">
            <p>{{name}}</p>
        </div>
        <RadialBar
                v-if="graphic === 'radial' || graphic === 'points'"
                :series="yearSeries(dataGraphic)"
                :labels="conceptLabels(dataGraphic)"
                slot="indicator-chart"/>
        <DonutChart v-if="graphic === 'pie'"
                    :series="yearSeries(dataGraphic)"
                    :labels="conceptLabels(dataGraphic)"
                    slot="indicator-chart"/>
        <BarChart v-if="graphic === 'bar'" :info="yearSeries(dataGraphic)"
                  :labels="conceptLabels(dataGraphic)"
                  slot="indicator-chart"/>
        <LineChart v-if="graphic === 'line' || graphic === 'area'" :report="dataGraphic" :type="graphic" slot="indicator-chart"></LineChart>
        <LineCompare v-if="graphic === 'line-compare'" :series="seriesCompare(dataGraphic)" :labels="yearsCompare(dataGraphic)" slot="indicator-chart"></LineCompare>
        <BarCompare v-if="graphic === 'bar-compare'" :series="seriesCompare(dataGraphic)" :labels="yearsCompare(dataGraphic)" type="area" slot="indicator-chart"></BarCompare>
        <BarPointLine v-if="graphic === 'bar-point-line'" :series="seriesCompare(dataGraphic)" :labels="yearsCompare(dataGraphic)" slot="indicator-chart"> </BarPointLine>
        <LinePoints v-if="graphic === 'line-points'" :series="seriesCompare(dataGraphic)" :labels="yearsCompare(dataGraphic)" slot="indicator-chart"> </LinePoints>

        <p>{{graphic}}</p>
    </IndicatorCard>
</template>

<script>
    import IndicatorCard from "../indicators/IndicatorCard";
    import LinePoints from "../charts/LinePoints";
    import RadialBar from "../charts/RadialBar";
    import DonutChart from "../charts/DonutChart";
    import LineChart from "../charts/LineChart";
    import BarCompare from "../charts/BarCompare";
    import BarPointLine from "../charts/BarPointLine";
    import BarChart from "../charts/BarChart";
    import LineCompare from "../charts/LineCompare";

    export default {
        name: "CardComparison",
        props: [
            'graphic',
            'dataGraphic',
            'name',
            'year'
        ],
        components: {
            IndicatorCard,
            LinePoints,
            RadialBar,
            DonutChart,
            LineChart,
            BarCompare,
            BarPointLine,
            BarChart,
            LineCompare
        },
        data: function () {
            return {
                selectedIndicators: [
                    {
                        title: 'I02 - Inversión en I+D a nivel de proyectos',
                        icon: 'mdi-currency-usd',
                        isPanel: false,
                        bgc: '#e6f7ee',
                        iconColor: '#2dcd7a',
                    }
                ],
            }
        },
        methods: {
            yearSeries: function (result) {
                return result.filter(r => r['year'] === this.year).map(r => r['total'])
            },
            conceptLabels: function (result) {
                return result.filter(r => r['year'] === this.year).map(r => r['concept'])
            },
            years: function (result) {
                return result.map(r => r['year'])
            },
            seriesCompare: function (result) {
                const newSeries = [];
                result.forEach(r => {
                    let item = newSeries.find(s => s.name === r.concept);
                    item ? item.data.push(r.total) : newSeries.push({ name: r.concept, data: [r.total]})
                });
                return newSeries
            },
            yearsCompare: function(result) {
                let years = [];
                result.forEach(r => {if(!years.includes(r.year)) years.push(r.year)});
                return years
            }
        }
    }
</script>

<style scoped>

</style>