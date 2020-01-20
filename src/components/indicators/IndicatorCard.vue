<template>
    <v-card class="card">
        <div v-if="item.isPanel" class="layout panelCard">
            <v-avatar :color="item.bgc" size="36px">
                <v-icon :color="item.iconColor" size="20px">{{item.icon}}</v-icon>
            </v-avatar>
            <p>{{item.title}}</p>
            <svg height="100" width="300" :style="chartStyle">
                <path d="
                        M 0,60
                        C 0,60 20,60 30,50
                        S 50,5 80,70
                        Q 100,100 130,60
                        T 190,80
                        Q 205,100 230,30
                        T 270,60
                        C 280,90 290,30 300,30
                " />
            </svg>
        </div>
        <div v-else class="normalCard">
            <p>{{item.title}}</p>
            <RadialBar />
        </div>
    </v-card>
</template>

<script>
    import RadialBar from "../charts/RadialBar";

    export default {
        name: "IndicatorCard",
        components: {
            RadialBar,
        },
        props: ['item'],
        data () {
            return {
                chartStyle: `fill:none;stroke:${this.item.iconColor};stroke-width:2;stroke-linejoin:round;`
            }
        }
    }
</script>

<style scoped>
    .card {
        background-color: #1f232c;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        color: beige;
        padding: 12px 20px;
    }
    .panelCard {
        font-size: 12px;
    }
    .panelCard > p {
        margin: 10px 0;
    }
    .layout {
        display: flex;
        flex-direction: column;
    }
    .normalCard > p {
        font-size: 13px;
    }
</style>