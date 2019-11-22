<template>
    <v-list-item @click="item">
        <v-list-item-avatar>
            <v-icon color="white">{{item.icon}}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="dark-style">
            <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-avatar>
            <v-icon color="white">mdi-chevron-right</v-icon>
        </v-list-item-avatar>
    </v-list-item>
</template>

<script>
    export default {
        name: "MenItem",
        props: ["item"],
        data: () => {
        }
    }
</script>

<style scoped>

    .dark-style {
        color: white;
    }
</style>