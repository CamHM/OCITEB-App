<template>
    <v-row no-gutters>
        <v-col cols="2" class="colA">
            <SideBar />
        </v-col>
        <v-col cols="10" class="colB">
            <v-container class="dark-back">
                <v-row>
                    <Header />
                </v-row>
                <v-row>
                    <div class="facultiesContainer">
                        <h3>Facultades</h3>
                        <div class="facultiesList">
                            <div v-for="(faculty, number) in faculties" :key="faculty"
                                 :class="{facultyCard: currentFaculty >=0, facultyCardSelected: currentFaculty === number}"
                                 @click="changeCurrentFaculty(number)" >
                                {{ faculty }}
                            </div>
                        </div>
                        <v-btn color="primary" class="facultyIndicatorButton">VER INDICADORES</v-btn>
                    </div>
                </v-row>
                <v-row class="footer">
                    <Footer />
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "../general/SideBar";
    import Header from "../general/Header";
    import Footer from "../general/Footer";

    export default {
        name: "Faculties",
        components: {
            SideBar,
            Header,
            Footer
        },
        data () {
            return {
                faculties: [
                    'Facultad de Ingenieria.',
                    'Facultad de Ciencias Agropecuarias',
                    'Facultad de Ciencias.',
                    'Facultad de Ciencias de la salud.',
                    'Facultad de Ciencias economicas y administrativas.',
                    'Facultad de Ciencias de la educacion.',
                    'Facultad de Derecho y ciencias Sociales',
                    'Facultad de Estudios a Distancia.'
                ],
                currentFaculty: 0
            }
        },
        methods: {
            changeCurrentFaculty(facultyIndex) {
                this.currentFaculty = facultyIndex
            }
        }
    }
</script>

<style scoped>
    .colB {
        background-color: #3f4a5b;
    }
    .dark-back {
        background: #3f4a5b;
        height: 100vh;
        margin: 0;
        padding: 30px 30px 10px 30px;
        overflow-y: scroll;
    }
    .dark-back::-webkit-scrollbar {
        display: none;
    }
    .facultiesContainer {
        margin: 10px 11px;
        background-color: #1f232c;
        height: auto;
        width: 80%;
        border-radius: 5px;
        padding: 35px;
        color: white;
    }

    .facultiesContainer > h3 {
        font-weight: 100;
        margin-bottom: 25px;
    }

    .facultiesList {
        display: flex;
        flex-wrap: wrap;
    }

    .facultyCard {
        color: lightgray;
        border: darkgray 1px dashed;
        padding: 10px 20px;
        font-size: 13px;
        font-weight: 400;
        width: 50%;
        border-radius: 10px;
    }

    .facultyCard:hover {
        cursor: pointer;
        background-color: rgba(63, 74, 91, 1);
    }

    .facultyCardSelected {
        background-color: rgba(63, 74, 91, 1);
    }

    .facultyIndicatorButton {
        width: 200px;
        margin-top: 80px;
        float: right;
        border-radius: 7px;
        font-size: 12px;
        font-weight: lighter;
    }
</style >