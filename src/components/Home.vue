<template class="home">
    <v-row class="home" no-gutters>
        <v-col cols="2">
            <SideBar />
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-text-field
                        dense
                        label="Búsqueda"
                        prepend-inner-icon="mdi-magnify"
                        solo
                        color="white"
                        background-color="#1f232c"
                        class="white--text"
                > </v-text-field>
                <v-row no-gutters class="infoHeader">
                    <h3 class="foreground-init font-weight-thin">Inicio</h3>
                    <v-btn class="button-info" icon small color="white">
                        <v-icon>mdi-information-variant</v-icon>
                    </v-btn>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <Card v-bind:item="welcome"/>
                    </v-col>
                    <v-col cols="6">
                        <CardIndicators v-bind:item="statistics"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" v-for="item of items" v-bind:key="item.title">
                        <Card v-bind:item="item"/>
                    </v-col>
                </v-row>
                <v-row class="footerRow">
                    <Footer> </Footer>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "./SideBar";
    import Card from "./Card";
    import Footer from "./Footer";
    import CardIndicators from "./CardIndicators";

    export default {
        name: "Home",
        components: {
            SideBar,
            Card,
            Footer,
            CardIndicators
        },
        data: () => {
            return {
                welcome: {
                    title: "Bienvenido a OCITEB",
                    icon: "mdi-seal-variant",
                    description: "Observatorio de ciencia, innovación y tecnología de Boyacá.",
                    card_color: "#f6c16e",
                    avatar_color: "#f7af40",
                    icon_color: "white",
                    avatar_size: 85,
                    card_height: 280,
                },
                statistics: {
                    title: "Indicadores",
                    description: "Visualiza y compara las metricas de \n los indicadores con base en cada area disponible",
                    card_color: "secondary",
                    card_height: 280,
                },
                items: [
                    {
                        title: "Facultades",
                        icon: "mdi-checkbox-multiple-blank-outline",
                        description: "Facultades de la Universidad Pedagógica y\n" +
                            "Tecnológica de Colombia",
                        card_color: "secondary",
                        avatar_color: "#d5d1fb",
                        icon_color: "#8174f2",
                        avatar_size: 40,
                        card_height: 200,
                    },
                    {
                        title: "Escuelas",
                        icon: "mdi-file-outline",
                        description: "Escuelas por Facultad",
                        card_color: "secondary",
                        avatar_color: "#e6f7ee",
                        icon_color: "#2dcd7a",
                        avatar_size: 40,
                        card_height: 200,
                    },
                    {
                        title: "Invetigadores",
                        icon: "mdi-account-outline",
                        description: "Investigadores ubicados en la institución academica",
                        card_color: "secondary",
                        avatar_color: "#fceaea",
                        icon_color: "#ed6464",
                        avatar_size: 40,
                        card_height: 200,
                    },
                    {
                        title: "Grupos de Investigación",
                        icon: "mdi-account-group-outline",
                        description: "Grupos de investigación cientifica de cada escuela",
                        card_color: "secondary",
                        avatar_color: "#ffdfc2",
                        icon_color: "#ffa34c",
                        avatar_size: 40,
                        card_height: 200,
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .home {
        width: 100%;
        overflow-y: scroll;
    }
    .home::-webkit-scrollbar {
        display: none;
    }
    .dark-back {
        background: #3f4a5b;
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 25px;
    }
    .infoHeader {
        display: flex;
        justify-content: space-between;
        position: relative;
        top: -7px;
    }
    .foreground-init {
        color: white;
    }
    .button-info {
        background-color: #f7b345;
    }
    .footerRow {
        position: relative;
        top: 15px;
    }
</style>