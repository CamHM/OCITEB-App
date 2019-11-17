<template>
    <v-app>
        <v-row>
            <v-col cols="3">
              <Menu></Menu>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>

    import Menu from "./components/Menu";

    export default {
        name: 'App',
        components: {
            Menu
        },
        data: () => ({}),
    };
</script>
