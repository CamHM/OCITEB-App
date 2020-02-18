<template>
    <v-list-group no-action>
        <template v-slot:activator>
            <v-list-item-content class="white--text">
                <v-list-item-title v-text="title"/>
            </v-list-item-content>
        </template>
        <template style="margin: 0" v-if="type === 'O'">
            <v-checkbox v-for="subItem in items" :key="subItem._id" color="primary"
                        :value="subItem._id" :label="subItem.name" dark
                        off-icon="mdi-checkbox-blank-circle-outline"
                        on-icon="mdi-disc" class="checkbox-property"
                        v-on:change="select(subItem._id)" v-model="enable"/>
        </template>
        <template style="margin: 0" v-if="type === 'I'">
            <v-checkbox v-for="subItem in items" :key="subItem.code" color="primary"
                        :value="subItem.code" :label="subItem.code + ' - ' +subItem.value" dark
                        off-icon="mdi-checkbox-blank-circle-outline"
                        on-icon="mdi-disc" class="checkbox-property"
                        v-on:change="select(subItem.code)" v-model="enable"/>
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
            enable() {
                return this. list.length < 3;

            },
            select(code) {
                if (this.list.find(item => item === code)) {
                    this.list = this.list.filter(function (e) {
                        return e !== code;
                    });
                } else {
                    if (this.list.length < 3) {
                        this.list.push(code);
                    }
                }
                this.$emit('selectIndicator', this.list);
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