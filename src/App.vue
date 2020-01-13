<template>
    <v-app>
        <Home />
    </v-app>
</template>

<script>
    import Home from "./components/Home";

    export default {
        name: 'App',
        components: {
            Home
        },
        data: () => ({}),
    };
</script>

<style>
@font-face {
    font-family: 'Avenir';
    src: url("fonts/AvenirLTStd-Book.otf") format('OpenType'),
        url("fonts/AvenirLTStd-Medium.otf") format('OpenType'),
        url("fonts/AvenirLTStd-Roman.otf") format('OpenType')
}
#app {
    font-family: Avenir;
}
</style>
