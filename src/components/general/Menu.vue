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
                        icon: 'mdi-checkbox-multiple-blank-outline',
                        path: '/faculties'
                    },
                    {
                        title: 'Investigadores',
                        icon: 'mdi-account-outline',
                        path: '/graph?active_tab=0',
                    },
                    {
                        title: 'Grupos de investigación',
                        icon: 'mdi-account-group-outline',
                        path: '/graph?active_tab=1'
                    },
                    {
                        title: 'Comparación',
                        icon: 'mdi-checkbox-marked-circle-outline',
                        path: '/comparison'
                    },
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