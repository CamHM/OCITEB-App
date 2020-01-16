<template>
    <v-card class="card">
        <div v-if="item.isPanel" class="layout panelCard">
            <v-avatar :color="item.bgc" size="36px">
                <v-icon :color="item.iconColor" size="20px">{{item.icon}}</v-icon>
            </v-avatar>
            <p>{{item.title}}</p>
        </div>
        <div v-else class="normalCard">
            <p>{{item.title}}</p>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "IndicatorCard",
        props: ['item']
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