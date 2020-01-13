<template>
    <v-container class="dark-style bar">
        <h4 class="dark-style">
            OCITEB
        </h4>
        <v-btn color="primary" class="homeButton">
            <v-icon left class="homeIcon">mdi-home-variant-outline</v-icon>
            Inicio
        </v-btn>
        <Menu />
        <v-btn outlined class="child" color="primary" small>Ingresar</v-btn>
    </v-container>
</template>

<script>
    import Menu from "./Menu";

    export default {
        name: "SideBar",
        components: {
            Menu
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>
    .dark-style {
        background: #1f232c;
        color: #f7b345;
    }

    .bar {
        height: 100vh;
        text-align: center;
    }
    .homeButton {
        text-transform: capitalize;
        width: 90%;
        padding: 0;
        font-family: Calibri, Serif, sans-serif ;
        display: flex;
        justify-content: flex-start;
        margin-left: 10px;
    }
    .child {
        margin: 10px;
        width: 70%;
        text-transform: capitalize;
    }
    .bar > h4 {
        margin: 10px 0;
    }

</style>