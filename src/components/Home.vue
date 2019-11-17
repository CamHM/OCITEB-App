<template>
    <v-row>
        <v-col cols="3">
            <Menu></Menu>
        </v-col>
        <v-col cols="9">
            <v-container>
                <v-row>
                    <v-col cols="5">
                        <Card v-bind:item="welcome"></Card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="item of items" v-bind:key="item.title">
                        <Card v-bind:item="item"></Card>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import Menu from "./Menu";
    import Card from "./Card";

    export default {
        name: "Home",
        components: {
            Menu,
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

</style>