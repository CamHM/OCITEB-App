<template>
    <v-row no-gutters>
        <v-col cols="2">
            <SideBar></SideBar>
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-row>
                    <v-col cols="6">
                        <Card v-bind:item="welcome"></Card>
                    </v-col>
                    <v-col cols="6">
                        <Card v-bind:item="welcome"></Card>
                    </v-col>
                </v-row>
                <v-row>
                    <Card v-bind:item="item" v-for="item of items" v-bind:key="item.title"></Card>
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

</style>