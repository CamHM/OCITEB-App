<template>
    <v-list-group no-action>
        <template v-slot:activator>
            <v-list-item-content class="white--text">
                <v-list-item-title v-text="item.title"/>
            </v-list-item-content>
        </template>
        <v-radio-group multiple v-if="item.options.length > 0">
            <v-list-item v-for="subItem in item.options" :key="subItem">
                <v-radio color="primary">
                    <template v-slot:label>
                        <h6 class="text-wrap white--text"> {{subItem}}</h6>
                    </template>
                </v-radio>
            </v-list-item>
        </v-radio-group>
    </v-list-group>
</template>

<script>
    export default {
        name: "MenuItemGroup",
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
        font-size: 12px;
        align-self: flex-start;
    }

    .arrowIcon {
        margin-left: auto;
    }
</style>