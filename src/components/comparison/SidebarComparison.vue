<template>
    <v-card color="secondary">
        <v-progress-linear indeterminate color="cyan"
                           v-if="$apollo.queries.Faculties.loading && $apollo.queries.Indicators.loading"/>
        <v-container v-if="!$apollo.queries.Faculties.loading && !$apollo.queries.Indicators.loading">
            <h5 class="white--text">Comparar</h5>
            <v-divider class="white"/>
            <v-list color="secondary" dense>
                <MenuItemGroup v-bind:key="titleFaculties" v-bind:title="titleFaculties"
                               v-bind:items="Faculties.filter(faculty => faculty.type === 'F')"
                               type="O" @selected="setFaculty"/>
                <MenuItemGroup v-bind:key="titleSectionals" v-bind:title="titleSectionals"
                               v-bind:items="Faculties.filter(faculty => faculty.type === 'S')"
                               type="O" @selected="setFaculty"/>
<!--                <MenuItemGroup v-bind:key="titleSchools" v-bind:title="titleSchools" v-bind:items="Schools"-->
<!--                               type="O"/>-->
<!--                <MenuItemGroup v-bind:key="titleGroups" v-bind:title="titleGroups" v-bind:items="Groups"-->
<!--                               type="O"/>-->
            </v-list>
            <h5 class="white--text">Indicadores</h5>
            <v-divider class="white"/>
            <v-list color="secondary" dense>
                <MenuItemGroup v-bind:key="titleInvertion" v-bind:title="titleInvertion"
                               v-bind:items="Indicators.find(indicator => indicator.name === 'Inversión').reports"
                               type="I" @selected="setIndicator"/>
                <MenuItemGroup v-bind:key="titleFormation" v-bind:title="titleFormation"
                               v-bind:items="Indicators.find(indicator => indicator.name === 'Formación').reports"
                               type="I" @selected="setIndicator"/>
                <MenuItemGroup v-bind:key="titleCapacity" v-bind:title="titleCapacity"
                               v-bind:items="Indicators.find(indicator => indicator.name === 'Capacidades').reports"
                               type="I" @selected="setIndicator"/>
                <MenuItemGroup v-bind:key="titleProduction" v-bind:title="titleProduction"
                               v-bind:items="Indicators.find(indicator => indicator.name === 'Producción Bibliografica').reports"
                               type="I" @selected="setIndicator"/>
            </v-list>
        </v-container>
    </v-card>
</template>

<script>
    import gql from "graphql-tag";
    import MenuItemGroup from "./MenuItemGroup";

    export default {
        name: "SidebarComparison",
        components: {
            MenuItemGroup
        },
        data: () => {
            return {
                Faculties: [],
                titleFaculties: 'Facultades',
                titleSectionals: 'Seccionales',
                Schools: [],
                titleSchools: 'Escuelas',
                Groups: [],
                titleGroups: 'Grupos de invetigación',
                Indicators: [],
                titleInvertion: 'Inversión',
                titleFormation: 'Formación',
                titleCapacity: 'Capacidades',
                titleProduction: 'Producción Bibliográfica'
            }
        },
        methods: {
            setIndicator(list) {
                this.$emit('selectIndicators', list);
            },
            setFaculty(list) {
                if (list.length > 0 && list.length < 2) {
                    this.$emit('selectFaculties', []);
                } else {
                    this.$emit('selectFaculties', list);
                }
            }
        },
        apollo: {
            Faculties: gql`
                query faculties {
                    Faculties {
                        _id
                        name
                        type
                        report
                    }
                }
            `,
            Indicators: gql`
                query indicators {
                    Indicators {
                        name
                        reports {
                            code
                            value
                            graphic
                        }
                    }
                }
            `
        }
    }
</script>

<style scoped>

</style>