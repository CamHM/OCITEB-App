<template>
    <v-row no-gutters>
        <v-col cols="2">
            <SideBar />
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-row>
                    <Header :items-breadc="itemsBreadc"/>
                </v-row>
                <v-row class="firstRow" v-if="showOptions">
                    <div class="select">
                        <v-select :items="charts" label="Tipo de gráfico" style="width: 200px" solo dense> </v-select>
                        <v-select :items="years" label="Año" solo dense style="margin-left: 20px; width: 120px"> </v-select>
                    </div>
                </v-row>
                <v-row class="secondRow">
                    <v-col cols="8" class="firstCol">
                        <v-row class="indicatorsFirstRow">
                            <v-col cols="6" v-for="(indicator, number) in selectedIndicators" :key="number">
                                <IndicatorCard :item="indicator" @on-options="changeShowOptions">
                                    <RadialBar />
                                </IndicatorCard>
                            </v-col>
                        </v-row>
                        <v-row class="indicatorsSecondRow">
                            <v-col cols="12">
                                <IndicatorCard :item="mainIndicator"/>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="4" class="secondCol">
                        <v-row class="panelRow" v-for="(indicator, number) in panelIndicators " :key="number">
                            <v-col>
                                <IndicatorCard :item="indicator"/>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <Footer />
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "../general/SideBar";
    import Header from "../general/Header";
    import Footer from "../general/Footer";
    import IndicatorCard from "../indicators/IndicatorCard";
    import RadialBar from "../charts/RadialBar";

    export default {
        name: "Faculty",
        components: {
            SideBar,
            Header,
            Footer,
            IndicatorCard,
            RadialBar,
        },
        data () {
            return {
                showOptions: false,
                charts: ['Tarta', 'Pie', 'Dona', 'Y todo tipo de comida más'],
                years: ['2016', '2017', '2018', '2019'],
                panelIndicators: [
                    {
                        title: 'I03 - Inversión en I+D por tipo de entidad',
                        icon: 'mdi-shopping-outline',
                        isPanel: true,
                        bgc: '#ffdfc2',
                        iconColor: '#ff9e43',
                        iconRGBColor: '255, 158, 67',
                    },
                    {
                        title: 'I06 - Ingresos por extensión y proyección social',
                        icon: 'mdi-cart-outline',
                        isPanel: true,
                        bgc: '#fceaea',
                        iconColor: '#ed5f5f',
                        iconRGBColor: '237, 95, 95',
                    },
                    {
                        title: 'F03 - Semilleros de investigación',
                        icon: 'mdi-currency-usd',
                        isPanel: true,
                        bgc: '#e6f7ee',
                        iconColor: '#2dcd7a',
                        iconRGBColor: '45, 205, 122',
                    },
                ],
                selectedIndicators: [
                    {
                        title: 'I02 - Inversión en I+D a nivel de proyectos',
                        icon: 'mdi-currency-usd',
                        isPanel: false,
                        bgc: '#e6f7ee',
                        iconColor: '#2dcd7a',
                    },
                    {
                        title: 'I01 - Número de proyectos de investigación según financiación',
                        icon: 'mdi-currency-usd',
                        isPanel: false,
                        bgc: '#e6f7ee',
                        iconColor: '#2dcd7a',
                    },
                ],
                mainIndicator: {
                    title: 'I05 - Ingresos recursos propios posgrados',
                    icon: 'mdi-currency-usd',
                    isPanel: false,
                    bgc: '#e6f7ee',
                    iconColor: '#2dcd7a',
                },
                faculties: [
                    'Facultad de Ingenieria' +
                    '',
                    'Facultad de Ciencias Agropecuarias',
                    'Facultad de Ciencias',
                    'Facultad de Ciencias de la salud',
                    'Facultad de Ciencias economicas y administrativas',
                    'Facultad de Ciencias de la educacion',
                    'Facultad de Derecho y ciencias Sociales',
                    'Facultad de Estudios a Distancia'
                ],
                itemsBreadc: [
                    {
                        text: '',
                        disabled: false,
                        href: '/'
                    },
                    {
                        text: 'Facultades',
                        disabled: false,
                        href: 'faculties',
                    },
                    {
                        text: `${this.$route.params.faculty}`,
                        disabled: true,
                        href: '',
                    }
                ],
            }
        },
        methods: {
            changeShowOptions() {
                this.showOptions = !this.showOptions
            }
        }
    }
</script>

<style scoped>
    .dark-back {
        background: #3f4a5b;
        height: 100vh;
        margin: 0;
        padding: 30px 30px 10px 30px;
        overflow-y: scroll;
    }
    .dark-back::-webkit-scrollbar {
        display: none;
    }
    .firstRow {
        display: flex;
        justify-content: flex-end;
        margin-top: 5px;
        height: 40px;
    }
    .select {
        width: auto;
        display: flex;
        margin-left: 12px;
        margin-right: 12px;
    }
    .secondRow {
        height: 120%;
    }
    .indicatorsFirstRow {
        height: 55%;
    }
    .indicatorsSecondRow {
        height: 45%;
        margin-top: 12px;
    }
    .panelRow {
        height: 33%;
    }
</style>