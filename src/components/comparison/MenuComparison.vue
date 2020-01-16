<template>
    <v-list color="secondary" dense>
        <MenuItemGroup v-bind:key="item.title" v-bind:item="item" v-for="item of items" />
    </v-list>
</template>

<script>
    import MenuItemGroup from "./MenuItemGroup";

    export default {
        name: "Menu",
        components: {
            MenuItemGroup
        },
        props: [
          'items'
        ]
    }
</script>

<style scoped>
    .menuHeader {
        padding: 0 18px;
    }
</style>