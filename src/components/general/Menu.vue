<template>
    <v-list color="secondary" dense>
        <v-subheader dark class="menuHeader">{{listTitle}}</v-subheader>
        <MenItem v-bind:key="item.title" v-bind:item="item" v-for="item of items" />
    </v-list>
</template>

<script>
    import MenItem from "./MenuItem";

    export default {
        name: "Menu",
        components: {
            MenItem
        },
        data: () => {
            return {
                listTitle: "Áreas",
                items: [
                    {
                        title: 'Facultades',
                        icon: 'mdi-vector-arrange-below',
                        path: '/faculties'
                    },
                    {
                        title: 'Escuelas',
                        icon: 'mdi-dock-left',
                        active: false,
                        path: '/comparison'
                    },
                    {
                        title: 'Investigadores',
                        icon: 'mdi-file-document-outline',
                        path: '/faculties'
                    },
                    {
                        title: 'Grupos de invetigación',
                        icon: 'mdi-checkbox-marked-circle-outline',
                        path: '/faculties'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .menuHeader {
        padding: 0 18px;
    }
</style>