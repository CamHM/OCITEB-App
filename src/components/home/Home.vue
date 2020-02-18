<template>
    <v-row class="home" no-gutters>
        <v-col cols="2">
            <SideBar />
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-row>
                    <Header />
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
                <v-row>
                    <Footer/>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "../general/SideBar";
    import Card from "./Card";
    import Header from "../general/Header";
    import Footer from "../general/Footer";
    import CardIndicators from "./CardIndicators";

    export default {
        name: "Home",
        components: {
            SideBar,
            Card,
            Header,
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
                    path: '/'
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
                        path: '/faculties',
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
                        path: '/faculties',
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
                        path: '/graph',
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
                        path: '/graph',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .home {
        width: 100%;
        background-color: #3f4a5b;
    }
    .dark-back {
        background: #3f4a5b;
        height: 100vh;
        margin: 0;
        padding: 30px 30px 10px 30px;
        overflow-y: scroll;
    }
    .dark-back::-webkit-scrollbar {
        display: none;
    }
</style>