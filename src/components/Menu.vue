<template>
    <v-container class="container">
        <v-banner single-line>
            OCITEB
        </v-banner>
        <v-btn block color="primary">
            <v-icon left>mdi-home-variant-outline</v-icon>
            Inicio
        </v-btn>
        <v-list dense>
            <v-subheader>{{listTitle}}</v-subheader>
            <v-list-group v-for="item in items" :key="item.title" v-model="item.active"
                          :prepend-icon="item.icon">
                <template v-slot:activator>
                    <v-list-item-content class="style-black">
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item v-for="subItem in item.items" :key="subItem.title">
                    <v-list-item-content>
                        <v-list-item-title v-text="subItem.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-container>
</template>

<script>
    export default {
        name: "menu",
        data() {
            return {
                listTitle: "Área",
                items: [
                    {
                        title: 'Facultades',
                        icon: 'mdi-checkbox-multiple-blank-outline ',
                        items: [
                            {title: 'List Item'},
                        ],
                    },
                    {
                        title: 'Escuelas',
                        icon: 'mdi-dock-left',
                        active: false,
                        items: [
                            {title: 'List Item'},
                            {title: 'List Item'},
                            {title: 'List Item'}
                        ],
                    },
                    {
                        title: 'Investigadores',
                        icon: 'mdi-account',
                        items: [
                            {title: 'List Item'},
                        ],
                    },
                    {
                        title: 'Grupos de invetigación',
                        icon: 'mdi-account-group',
                        items: [
                            {title: 'List Item'},
                        ],
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .container {
        background: #1f232c;
        margin-left: unset;
        margin-top: unset;
    }
</style>