<template>
    <v-list-group no-action>
        <template v-slot:activator>
            <v-list-item-content class="white--text">
                <v-list-item-title v-text="title"/>
            </v-list-item-content>
        </template>
        <template style="margin: 0" v-if="type === 'O'">

            <v-checkbox v-for="subItem in items" :key="subItem._id" color="primary"
                        :value="{name: subItem.name,report:subItem.report}" :label="subItem.name" dark
                        off-icon="mdi-checkbox-blank-circle-outline" v-model="list"
                        on-icon="mdi-disc" class="checkbox-property"
                        v-on:change="selectFaculty()"
                        :disabled="limit_list({name: subItem.name,report:subItem.report})"/>
        </template>
        <template style="margin: 0" v-if="type === 'I'">
            <v-checkbox v-for="subItem in items" :key="subItem.code" color="primary"
                        :value="{code: subItem.code, graphic: subItem.graphic, name: subItem.code + ' - ' +subItem.value}"
                        :label="subItem.code + ' - ' +subItem.value" dark
                        off-icon="mdi-checkbox-blank-circle-outline" v-model="list"
                        on-icon="mdi-disc" class="checkbox-property"
                        v-on:change="selectIndicator()"
                        :disabled="limit_list({code: subItem.code, graphic: subItem.graphic, name: subItem.code + ' - ' +subItem.value})"/>
        </template>
    </v-list-group>
</template>

<script>
    export default {
        name: "MenuItemGroup",
        props: ['title', 'items', 'type'],
        data: () => {
            return {
                list: []
            }
        },
        methods: {
            limit_list(value) {
                return this.list.length > 2 && this.list.indexOf(value) === -1;
            },
            selectFaculty() {
                this.$emit('selected', this.list);
            },
            selectIndicator() {
                this.$emit('selected', this.list);
            }
        }
    }
</script>

<style scoped>
    .menuItem > p {
        margin: 0 10px 0 10px;
        color: white;
        font-weight: lighter;
        font-size: 12px;
        align-self: flex-start;
    }

    .checkbox-property {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 12px;
        padding: 0;
    }

    .checkbox-property /deep/ label {
        color: white;
        font-size: 11px;
    }
</style>