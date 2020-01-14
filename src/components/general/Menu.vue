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
                        icon: 'mdi-vector-arrange-below'
                    },
                    {
                        title: 'Escuelas',
                        icon: 'mdi-dock-left',
                        active: false
                    },
                    {
                        title: 'Investigadores',
                        icon: 'mdi-file-document-outline'
                    },
                    {
                        title: 'Grupos de invetigación',
                        icon: 'mdi-checkbox-marked-circle-outline'
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