<template>
    <v-card color="secondary">
        <v-container>
            <h5 class="white--text">Comparar</h5>
            <v-divider class="white"/>
            <MenuComparison v-bind:items="items"/>
            <v-divider class="white"/>
            <MenuComparison v-bind:items="items2"/>
        </v-container>
    </v-card>
</template>

<script>
    import MenuComparison from "./MenuComparison";

    export default {
        name: "SidebarComparison",
        components: {
            MenuComparison
        },
        data: () => {
            return {
                items: [
                    {
                        title: 'Facultades',
                        path: '/faculties',
                        // options: []
                    },
                    {
                        title: 'Seccionales',
                        active: false,
                        path: '/comparison',
                        options: [
                            "Chiquinquirá",
                            "Duitama",
                            "Sogamoso"
                        ]
                    },
                    {
                        title: 'Escuelas',
                        path: '/faculties',
                        // options: []
                    },
                    {
                        title: 'Grupos de invetigación',
                        path: '/faculties',
                        // options: []
                    }
                ],
                items2: [
                    {
                        title: 'Indicadores',
                        path: '/indicators',
                        options: []
                    },
                    {
                        title: 'Inversión',
                        active: false,
                        path: '/investment',
                        options: [
                            "IO1-Número de proyectos",
                            "IO2-Inversión en I+D a nivel de",
                            "IO3-Inversión en I+D por tipo de entidad"
                        ]
                    },
                    {
                        title: 'Formación',
                        path: '/formation',
                        options: []
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>