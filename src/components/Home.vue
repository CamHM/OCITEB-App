<template>
    <v-row no-gutters>
        <v-col cols="2">
            <SideBar></SideBar>
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-toolbar class="search rounded-toolbar">
                    <v-icon color="white">mdi-magnify</v-icon>
                    <v-autocomplete cache-items
                                    class="mx-2" flat hide-no-data
                                    hide-details label="Búsqueda"
                                    solo-inverted>
                    </v-autocomplete>
                </v-toolbar>
                <v-row>
                    <v-col cols="6">
                        <Card v-bind:item="welcome"></Card>
                    </v-col>
                    <v-col cols="6">
                        <Card v-bind:item="welcome"></Card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" v-for="item of items" v-bind:key="item.title">
                        <Card v-bind:item="item"></Card>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "./SideBar";
    import Card from "./Card";

    export default {
        name: "Home",
        components: {
            SideBar,
            Card
        },
        data: () => {
            return {
                welcome: {
                    title: "Bienvenido a OCITEB",
                    icon: "mdi-xbox-controller",
                    description: "Observatorio de ciencia, innovación y tecnología de Boyacá."
                },
                items: [
                    {
                        title: "Facultades",
                        icon: "mdi-xbox-controller",
                        description: "Observatorio de ciencia, innovación y tecnología de Boyacá."
                    },
                    {
                        title: "Escuelas",
                        icon: "mdi-xbox-controller",
                        description: "Observatorio de ciencia, innovación y tecnología de Boyacá."
                    },
                    {
                        title: "Invetigadores",
                        icon: "mdi-xbox-controller",
                        description: "Observatorio de ciencia, innovación y tecnología de Boyacá."
                    },
                    {
                        title: "Grupos de Investigación",
                        icon: "mdi-xbox-controller",
                        description: "Observatorio de ciencia, innovación y tecnología de Boyacá."
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .dark-back {
        background: #3f4a5b;
        width: 100%;
        height: 100%;
        margin: 0;
        position: relative;
    }

    .search {
        background: #1f232c;
    }

    .rounded-toolbar {
        border-radius: 10px;
    }
</style>