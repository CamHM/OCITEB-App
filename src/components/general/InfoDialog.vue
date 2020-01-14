<template>
    <v-row justify="center">
        <v-dialog v-model="show" max-width="770" persistent>
            <v-card class="infoDialogCard">
                <v-row class="mainRow">
                    <v-col cols="1"> </v-col>
                    <v-col cols="10" class="infoDialogContent">
                        <img src="../../assets/ociteb.jpg" width="400">
                        <v-card-text class="infoDialogText">
                            Esta aplicación fue desarrollada por el grupo de investigación en
                            Software de la Universidad Pedagógica y Tecnológica de Colombia con
                            la aprobación de la Vicerrectoría de Investigación y Extensión de la
                            misma institución.
                        </v-card-text>
                    </v-col>
                    <v-col cols="1" class="infoDialogEnd">
                        <v-btn icon @click="close">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <img src="../../assets/vie.jpg" width="90" class="vieImg">
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        name: "InfoDialog",
        props: ['show'],
        methods: {
            close() {
                this.$emit('close-dialog');
            }
        }
    }
</script>

<style scoped>
.infoDialogCard {
    padding: 5px 15px;
    height: 385px;
    text-align: center;
}
.mainRow {
    height: 100%;
}
.infoDialogContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
}
.infoDialogText {
    font-size: 16px;
    color: black;
    margin: auto;
    position: relative;
    top: -20px;
}
.infoDialogEnd {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.vieImg {
    position: relative;
    left: -55px;
}
</style>