<template>
    <v-row no-gutters>
        <v-col cols="2" class="colA">
            <SideBar />
        </v-col>
        <v-col cols="10" class="colB">
            <v-container id="main-container" fluid>
                <section>
                    <div>
                        <v-breadcrumbs :items="items" divider=">>" large></v-breadcrumbs>
                    </div>
                </section>

                <section id="graph-renderer">&nbsp;</section>

                <v-row class="footer">
                    <Footer />
                </v-row>

            </v-container>
        </v-col>
    </v-row>
</template>

<script>

    import NeoVis from 'neovis.js';
    import * as config from '../../assets/config';
    import SideBar from "../general/SideBar";
    import Footer from "../general/Footer";

    let loader;
    let neovisInstance;

    export default {
        name: "GraphVisualizer",
        data() {
            return {
                id: null,
                items: [
                    {
                        text: 'Inicio',
                        disabled: false,
                        href: '/'
                    },
                    {
                        text: 'Tarjetas',
                        disabled: false,
                        href: '/graph',
                    },
                    {
                        text: 'Visualizador',
                        disabled: true,
                        href: '',
                    }
                ]
            }
        },
        methods: {
            renderGraph() {
                config.graphConfig.initial_cypher = `MATCH (a {id: '${this.id}'})-[r]-(b) RETURN r, a, b`;

                neovisInstance = new NeoVis(config.graphConfig);
                neovisInstance.render();
                neovisInstance.registerOnEvent('completed', () => {
                    document.querySelector('.vis-network').addEventListener('dblclick', this.getClickedNode);
                });
                loader.hide();
            },
            getClickedNode() {
                let node = document.getElementsByClassName('vis-tooltip')[0];

                if (typeof node !== 'undefined') {
                    let hasChild = node.childNodes[3].innerHTML !== 'id:';
                    let nodeChildren = hasChild ? node.childNodes[7] : node.childNodes[4];
                    let nodeId = nodeChildren.nodeValue.replace(/\s/g, '');

                    this.updateGraph(nodeId);
                }
            },
            updateGraph(id) {
                loader = this.$loading.show();

                let generalCypherById = `MATCH (a {id: '${id}'})-[r]-(b) RETURN r, a, b`;
                neovisInstance.renderWithCypher(generalCypherById);
                loader.hide();
            }
        },
        beforeMount() {
            loader = this.$loading.show();
            this.id = this.$route.params.nodeID;
        },
        mounted() {
            this.renderGraph();
        },

        components: {
            SideBar,
            Footer
        },
    }
</script>

<style scoped>

    #main-container {
        height: 100vh;
        margin: 0;
        padding: 30px 30px 10px 30px;
        overflow-y: scroll;
    }

    #graph-renderer  {
        background: #1f222c;
        border-radius: 15px;
        height: calc(100% - 84px) !important;
        padding: 20px;
        overflow: hidden;
        max-height: 766px;
    }

    .colB {
        background-color: #3f4a5b;
    }

</style>
