<template>
    <v-container class="dark-style text-xs-center" >
        <h1 class="dark-style">
            OCITEB
        </h1>
        <v-btn block color="primary">
            <v-icon left>mdi-home-variant-outline</v-icon>
            Inicio
        </v-btn>
        <v-list dense>
            <v-subheader>{{listTitle}}</v-subheader>
            <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.icon">
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
        <v-btn outlined color="primary">Ingresar</v-btn>
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
    .dark-style {
        background: #1f232c;
        color: #f7b345;
        align-self: center;
        margin-left: unset;
        margin-top: unset;
    }
</style>