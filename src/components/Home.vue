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
                <v-row no-gutters>
                    <v-col>
                        <h3 class="foreground-init font-weight-thin">Inicio</h3>
                    </v-col>
                    <v-col lg="1">
                        <v-btn class="button-info" icon small color="white">
                            <v-icon>mdi-information-variant</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
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
                <Footer></Footer>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "./SideBar";
    import Card from "./Card";
    import Footer from "./Footer";

    export default {
        name: "Home",
        components: {
            SideBar,
            Card,
            Footer
        },
        data: () => {
            return {
                welcome: {
                    title: "Bienvenido a OCITEB",
                    icon: "mdi-seal-variant",
                    description: "Observatorio de ciencia, innovación y tecnología de Boyacá.",
                    card_color: "primary",
                    avatar_color: "orange",
                    icon_color: "white"
                },
                items: [
                    {
                        title: "Facultades",
                        icon: "mdi-checkbox-multiple-blank-outline",
                        description: "Facultades de la Universidad Pedagógica y\n" +
                            "Tecnológica de Colombia",
                        card_color: "secondary",
                        avatar_color: "white",
                        icon_color: "blue"
                    },
                    {
                        title: "Escuelas",
                        icon: "mdi-dock-left",
                        description: "Escuelas por Facultad",
                        card_color: "secondary",
                        avatar_color: "white",
                        icon_color: "green"
                    },
                    {
                        title: "Invetigadores",
                        icon: "mdi-account",
                        description: "Investigadores ubicados en la institución academica",
                        card_color: "secondary",
                        avatar_color: "white",
                        icon_color: "pink"
                    },
                    {
                        title: "Grupos de Investigación",
                        icon: "mdi-account-group",
                        description: "Grupos de investigación cientifica de cada escuela",
                        card_color: "secondary",
                        avatar_color: "white",
                        icon_color: "orange"
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

    .foreground-init {
        color: white;
    }

    .button-info {
        background-color: #f7b345;
    }
</style>