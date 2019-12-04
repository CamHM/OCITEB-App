<template>
    <v-list color="secondary" dense>
        <v-subheader dark>{{listTitle}}</v-subheader>
        <MenItem v-bind:key="item.title" v-bind:item="item" v-for="item of items"></MenItem>
    </v-list>
</template>

<script>
    import MenItem from "./MenItem";

    export default {
        name: "Menu",
        components: {
            MenItem
        },
        data: () => {
            return {
                listTitle: "Área",
                items: [
                    {
                        title: 'Facultades',
                        icon: 'mdi-checkbox-multiple-blank-outline'
                    },
                    {
                        title: 'Escuelas',
                        icon: 'mdi-dock-left',
                        active: false
                    },
                    {
                        title: 'Investigadores',
                        icon: 'mdi-account'
                    },
                    {
                        title: 'Grupos de invetigación',
                        icon: 'mdi-account-group'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .dark-style {
        color: white;
    }

</style>