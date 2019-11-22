<template>
    <v-container class="dark-style bar">
        <h1 class="dark-style">
            OCITEB
        </h1>
        <v-btn color="primary" class="child">
            <v-icon left>mdi-home-variant-outline</v-icon>
            Inicio
        </v-btn>
        <Menu></Menu>
        <v-btn outlined class="child" color="primary">Ingresar</v-btn>
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
        align-self: center;
    }

    .bar {
        height: 100vh;
        margin: 0;
        position: relative;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 5px;
    }

    .child {
        margin: 10px;
    }

</style>