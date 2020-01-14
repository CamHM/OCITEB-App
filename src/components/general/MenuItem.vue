<template>
    <v-list-item @click="item" class="menuItem" dense>
        <v-icon color="white" size="medium" class="menuItemIcon">{{item.icon}}</v-icon>
        <p>{{item.title}}</p>
        <v-icon color="white" size="medium" class="arrowIcon menuItemIcon">mdi-chevron-right</v-icon>
    </v-list-item>
</template>

<script>
    export default {
        name: "MenItem",
        props: ["item"]
    }
</script>

<style scoped>
    .menuItem {
        margin: 0;
        text-align: left;
        display: flex;
        justify-content: flex-start;
    }
    .menuItem > p {
        margin: 0 10px 0 10px;
        color: white;
        font-weight: lighter;
        font-size: 13px;
        align-self: flex-start;
    }
    .menuItemIcon {
        align-self: flex-start;
    }
    .arrowIcon {
        margin-left: auto;
    }
</style>