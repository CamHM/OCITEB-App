<template>
    <div class="header">
        <div class="search">
            <v-icon class="searchIcon" size="25">mdi-magnify</v-icon>
            <label>
                <input placeholder="Búsqueda" class="searchInput"/>
            </label>
        </div>
        <v-row no-gutters class="infoHeader">
            <div class="navigationInfo">
                <h3 class="foreground-init font-weight-thin">Inicio</h3>
                <div v-if="itemsBreadc" class="navigationInfo">
                    <v-divider class="mx-4 white" vertical/>
                    <v-icon style="color: #f7b345;font-size: 15px" @click="goHome">mdi-home-variant-outline</v-icon>
                    <v-breadcrumbs :items="itemsBreadc" class="breadcrumb" dark>
                        <template v-slot:divider>
                            <v-icon color="white">mdi-chevron-double-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </div>
            </div>
            <v-btn class="button-info" icon small color="white" @click="showDialog">
                <v-icon>mdi-information-variant</v-icon>
            </v-btn>
        </v-row>
        <InfoDialog :show="showInfo" @close-dialog="closeDialog"> </InfoDialog>
    </div>
</template>

<script>
    import InfoDialog from "./InfoDialog";

    export default {
        name: "Header",
        components: {
            InfoDialog
        },
        props: [
            'itemsBreadc'
        ],
        data: function() {
            return {
                showInfo: false
            }
        },
        methods: {
            showDialog() {
                this.showInfo = !this.showInfo;
            },
            closeDialog() {
                this.showInfo = false;
            },
            goHome() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        margin: 0 11px;
    }
    .infoHeader {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
    .foreground-init {
        color: white;
    }
    .button-info {
        background-color: #f7b345;
    }
    .search {
        margin-bottom: 20px;
        background-color: #1f232c;
        color: white;
        width: 100%;
        border-radius: 8px;
        padding: 10px 20px;
        box-shadow: 0 0 10px #1f232c;
    }
    .searchIcon{
        color: white;
        margin-right: 20px;
    }
    .searchInput {
        font-size: 17px;
        width: 92%;
    }
    .searchInput:focus {
        outline: none !important;
        border:none;
    }
    .disabled {
        color: gray;
        pointer-events: none;
    }
    .navigationInfo {
        display: flex;
    }
    .breadcrumb {
        padding: 0;
        color: white;
    }
</style>