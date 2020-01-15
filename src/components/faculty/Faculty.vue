<template>
    <v-row no-gutters>
        <v-col cols="2">
            <SideBar />
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-row>
                    <Header />
                </v-row>
                <v-row class="firstRow">
                    <p>Selects</p>
                </v-row>
                <v-row class="secondRow">
                    <v-col cols="8" class="firstCol">

                    </v-col>
                    <v-col cols="4" class="secondCol">

                    </v-col>
                </v-row>
                <v-row>
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
        name: "Faculty",
        components: {
            SideBar,
            Header,
            Footer
        },
        data () {
            return {
                indicators: ['I01', 'I02', 'I03', 'I04', 'I05', 'I06']
            }
        }
    }
</script>

<style scoped>
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
    .firstRow {
        background-color: crimson;
    }
    .secondRow {
        background-color: #f7b345;
        height: 100%;
    }
    .firstCol {
        background-color: aqua;
    }
    .secondCol {
        background-color: chartreuse;
    }
</style>