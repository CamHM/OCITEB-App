<template>
    <v-card class="card">
        <div v-if="item.isPanel" class="layout panelCard">
            <v-avatar :color="item.bgc" size="36px">
                <v-icon :color="item.iconColor" size="20px">{{item.icon}}</v-icon>
            </v-avatar>
            <p>{{item.title}}</p>
            <svg height="100" width="300" :style="chartStyle" class="panelChart">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#d6a57f" stop-opacity="1"/>
                        <stop offset="60%" stop-color="#997c6f" stop-opacity="1"/>
                        <stop offset="100%" stop-color="#373a56" stop-opacity="0.9"/>
                    </linearGradient>
                </defs>
                <path d="
                        M 0,60
                        C 0,60 20,60 30,50
                        S 50,5 80,70
                        Q 100,100 130,60
                        T 190,80
                        Q 205,100 230,30
                        T 270,60
                        C 280,90 290,30 301,30
                        V 101 H -1 V 60
                " />
            </svg>
        </div>
        <div v-else class="normalCard">
            <div class="indicator-header">
                <slot name="indicator-header"> </slot>
            </div>
            <slot name="indicator-chart"> </slot>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "IndicatorCard",
        components: {
        },
        props: ['item'],
        data () {
            return {
                chartStyle: `fill:url(#gradient) #3f4a5b;stroke:${this.item.iconColor};stroke-width:2;stroke-linejoin:round;`
            }
        },
    }
</script>

<style scoped>
    .card {
        background-color: #1f232c;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        color: beige;
        padding: 10px 20px 5px 20px;
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
    .indicator-header {
        display: flex;
        justify-content: space-between;
    }
</style>