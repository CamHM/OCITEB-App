<template>
    <v-dialog v-model="open" max-width="770" persistent>
        <v-card>
            <v-card-title class="cardTitle">
                {{title}}
                <v-btn icon @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-data-table :headers="getHeaders" :items="items" :items-per-page="5"> </v-data-table>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "IndicatorTable",
        props: ['open', 'title', 'items'],
        methods: {
            close() {
                this.$emit('close-table');
            }
        },
        computed: {
            getHeaders: function () {
                if(this.items[0].concept) {
                    return [
                        { text: 'Año', value: 'year' },
                        { text: 'Concepto', value: 'concept' },
                        { text: 'Total', value: 'total' },
                    ]
                }
                else
                    return [
                        { text: 'Año', value: 'year' },
                        { text: 'Total', value: 'total' },
                    ]
            }
        }
    }
</script>

<style scoped>
.cardTitle {
    background-color:  #f7b345;
    text-align: right;
    color: white;
    display: flex;
    justify-content: space-between;
}
</style>