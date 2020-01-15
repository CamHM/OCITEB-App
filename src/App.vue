<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({}),
    };
</script>

<style>
@font-face {
    font-family: 'Montserrat';
    src:
        url("fonts/montserrat/Montserrat-Light.otf") format('OpenType'),
        url("fonts/montserrat/Montserrat-Bold.otf") format('OpenType'),
        url("fonts/montserrat/Montserrat-Black.otf") format('OpenType'),
        url("fonts/montserrat/Montserrat-Medium.otf") format('OpenType'),
        url("fonts/montserrat/Montserrat-Regular.otf") format('OpenType'),
        url("fonts/montserrat/Montserrat-SemiBold.otf") format('OpenType')
}
#app {
    font-family: 'Montserrat';
}
</style>
