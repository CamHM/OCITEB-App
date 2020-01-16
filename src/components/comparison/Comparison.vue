<template>
    <v-row no-gutters>
        <v-col cols="2">
            <SideBar/>
        </v-col>
        <v-col cols="10">
            <v-container class="dark-back">
                <v-row>
                    <Header/>
                </v-row>
                <v-row>
                    <v-col cols="9">

                    </v-col>
                    <v-col cols="3">
                        <SidebarComparison/>
                    </v-col>
                </v-row>
                <v-row class="footerRow">
                    <Footer/>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
</template>

<script>
    import SideBar from "../general/SideBar";
    import Header from "../general/Header";
    import Footer from "../general/Footer";
    import SidebarComparison from "./SidebarComparison";

    export default {
        name: "Comparison",
        components: {
            SideBar,
            Header,
            Footer,
            SidebarComparison
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
</style>