<template>
    <v-row no-gutters>
        <v-col cols="2" class="colA">
            <SideBar />
        </v-col>
        <v-col cols="10" class="colB">
            <v-container id="cards-section" fluid>
                <div class="search">
                    <v-icon class="searchIcon" size="25">mdi-magnify</v-icon>
                    <label>
                        <input placeholder="Búsqueda" class="searchInput" v-model="search"/>
                    </label>
                </div>

                <v-row>
                    <Header/>
                </v-row>

                <v-row no-gutters>
                    <!--<v-spacer></v-spacer>-->

                    <v-col cols="3" v-if="faculties.length">
                        <v-select
                                class="graph-filter"
                                v-model="facultySelect"
                                :items="faculties"
                                label="Facultades"
                                item-value="value"
                                item-text="label"
                                solo dense
                        ></v-select>
                    </v-col>

                    <v-col cols="3" style="margin-left: 15px;" v-if="schools.length">
                        <v-select
                                class="graph-filter"
                                v-model="schoolSelect"
                                :items="schools"
                                label="Escuelas"
                                item-value="value"
                                item-text="name"
                                solo dense
                        ></v-select>
                    </v-col>
                </v-row>

                <v-tabs v-model="tab" right>
                    <v-tab>{{ researchersTitle }}</v-tab>
                    <v-tab>{{ groupsTitle }}</v-tab>
                    <v-tab>{{ projectsTitle }}</v-tab>


                    <!-- RESEARCHERS CARDS -->

                    <v-tab-item>
                        <v-container fluid>
                            <v-data-iterator
                                    :items="researchers"
                                    :items-per-page.sync="itemsPerPage"
                                    :page="researchersPage"
                                    :search="search"
                                    :sort-by="sortBy.toLowerCase()"
                                    :sort-desc="sortDesc"
                                    hide-default-footer
                                    no-data-text="No hay datos disponibles"
                                    no-results-text="No se encontraron registros coincidentes"
                            >
                                <template slot-scope="props">
                                    <v-row>
                                        <v-col lg="3" md="6" sm="6" xs="12" v-for="researcher in props.items" :key="researcher.id">
                                            <router-link :to="{ name: 'visualizer', params: { nodeID: researcher.id } }">
                                                <v-card class="mx-auto text-center" width="100%">
                                                    <v-card-text>
                                                        <v-list-item-title class="mb-1 display-1">{{ researcher.name }}</v-list-item-title>
                                                        <v-list-item-subtitle>{{ researcher.school }}</v-list-item-subtitle>
                                                    </v-card-text>
                                                </v-card>
                                            </router-link>
                                        </v-col>
                                    </v-row>
                                </template>

                                <template v-slot:footer>
                                    <v-row class="mt-2" align="center" justify="center" style="margin: 20px 15px;">
                                        <v-spacer></v-spacer>

                                        <span class="mr-4 grey--text">
                                          Pagina {{ researchersPage }} de {{ numberOfPagesResearchers }}
                                        </span>

                                        <v-btn fab dark color="#f2ab3b" class="mr-1" @click="formerPage('Researchers')">
                                            <v-icon>mdi-chevron-left</v-icon>
                                        </v-btn>

                                        <v-btn fab dark color="#f2ab3b" class="ml-1" @click="nextPage('Researchers')">
                                            <v-icon>mdi-chevron-right</v-icon>
                                        </v-btn>
                                    </v-row>
                                </template>
                            </v-data-iterator>
                        </v-container>
                    </v-tab-item>

                    <!-- GROUPS CARDS -->

                    <v-tab-item>
                        <v-container fluid>
                            <v-data-iterator
                                    :items="groups"
                                    :items-per-page.sync="itemsPerPage"
                                    :page="groupsPage"
                                    :search="search"
                                    :sort-by="sortBy.toLowerCase()"
                                    :sort-desc="sortDesc"
                                    hide-default-footer
                                    no-data-text="No hay datos disponibles"
                                    no-results-text="No se encontraron registros coincidentes"
                            >
                                <template slot-scope="props">
                                    <v-row>
                                        <v-col lg="3" md="6" sm="6" xs="12" v-for="group in props.items" :key="group.id">
                                            <router-link :to="{ name: 'visualizer', params: { nodeID: group.id } }">
                                                <v-card class="mx-auto text-center" width="100%">
                                                    <v-card-text>

                                                        <v-list-item-title class="mb-1 display-1">{{ group.name }}</v-list-item-title>
                                                        <v-list-item-subtitle>{{ group.school }}</v-list-item-subtitle>
                                                    </v-card-text>
                                                </v-card>
                                            </router-link>
                                        </v-col>
                                    </v-row>
                                </template>

                                <template v-slot:footer>
                                    <v-row class="mt-2" align="center" justify="center" style="margin: 20px 15px;">
                                        <v-spacer></v-spacer>

                                        <span class="mr-4 grey--text">
                                          Pagina {{ groupsPage }} de {{ numberOfPagesGroups }}
                                        </span>

                                        <v-btn fab dark color="#f2ab3b" class="mr-1" @click="formerPage('Groups')">
                                            <v-icon>mdi-chevron-left</v-icon>
                                        </v-btn>

                                        <v-btn fab dark color="#f2ab3b" class="ml-1" @click="nextPage('Groups')">
                                            <v-icon>mdi-chevron-right</v-icon>
                                        </v-btn>
                                    </v-row>
                                </template>
                            </v-data-iterator>
                        </v-container>
                    </v-tab-item>

                    <!-- PROJECTS CARDS -->

                    <v-tab-item>
                        <v-container fluid>
                            <v-data-iterator
                                    :items="projects"
                                    :items-per-page.sync="itemsPerPage"
                                    :page="projectsPage"
                                    :search="search"
                                    :sort-by="sortBy.toLowerCase()"
                                    :sort-desc="sortDesc"
                                    hide-default-footer
                                    no-data-text="No hay datos disponibles"
                                    no-results-text="No se encontraron registros coincidentes"
                            >
                                <template slot-scope="props">
                                    <v-row>
                                        <v-col lg="3" md="6" sm="6" xs="12" v-for="project in props.items" :key="project.id">
                                            <router-link :to="{ name: 'visualizer', params: { nodeID: project.id } }">
                                                <v-card class="mx-auto text-center" width="100%">
                                                    <v-card-text>

                                                        <v-list-item-title class="mb-1 display-1">{{ project.name }}</v-list-item-title>
                                                        <v-list-item-subtitle>UPTC</v-list-item-subtitle>
                                                    </v-card-text>
                                                </v-card>
                                            </router-link>
                                        </v-col>
                                    </v-row>
                                </template>

                                <template v-slot:footer>
                                    <v-row class="mt-2" align="center" justify="center" style="margin: 20px 15px;">
                                        <v-spacer></v-spacer>

                                        <span class="mr-4 grey--text">
                                         Pagina {{ projectsPage }} de {{ numberOfPagesProjects }}
                                        </span>

                                        <v-btn fab dark color="#f2ab3b" class="mr-1" @click="formerPage('Projects')">
                                            <v-icon style="color: #fff;">mdi-chevron-left</v-icon>
                                        </v-btn>

                                        <v-btn fab dark color="#f2ab3b" class="ml-1" @click="nextPage('Projects')">
                                            <v-icon>mdi-chevron-right</v-icon>
                                        </v-btn>
                                    </v-row>
                                </template>
                            </v-data-iterator>
                        </v-container>
                    </v-tab-item>
                </v-tabs>


                <v-row class="footer">
                    <Footer />
                </v-row>
            </v-container>
        </v-col>
    </v-row>



</template>

<script>

    import * as Queries from '../../graphql/queries/graphQueries';
    import SideBar from "../general/SideBar";
    import Header from "../general/Header";
    import Footer from "../general/Footer";

    export default {
        name: 'DefaultContainer',
        apollo: {
            $client: 'b',
            researchers: {
                query: Queries.GET_ALL_RESEARCHERS,
                update: data => data.Researcher,

            },
            groups: {
                query: Queries.GET_ALL_GROUPS,
                update: data => data.Group
            },
            projects: {
                query: Queries.GET_ALL_PROJECTS,
                update: data => data.Project
            },
            schools: {
                query: Queries.GET_SCHOOLS_BY_FACULTY,
                variables() {
                    return {
                        faculty: this.facultySelect
                    }
                },
                update: data => data.School,
                skip: true,
                result() {
                    this.schools.unshift({ value: null, name:'Ninguna' });
                }
            },
            faculties: {
                query: Queries.GET_ALL_FACULTIES,
                update: data => data.facultyList,
                result() {
                    this.getFaculties();
                }
            },
            projectsBySchool: {
                query: Queries.GET_PROJECTS_BY_SCHOOLS,
                variables() {
                    return {
                        school: this.schoolSelect
                    }
                },
                update: data => data.projectBySchool,
                skip: true,
                result(data) {
                    if (!data.loading) {
                        this.projects = data.data.projectBySchool;
                    }
                }
            },
            researchersBySchool: {
                query: Queries.GET_RESEARCHERS_BY_SCHOOLS,
                variables() {
                    return {
                        school: this.schoolSelect
                    }
                },
                update: data => data.researcherBySchool,
                skip: true,
                result(data) {
                    if (!data.loading) {
                        this.researchers = data.data.researcherBySchool;
                    }
                }
            },
            groupsBySchool: {
                query: Queries.GET_GROUP_BY_SCHOOLS,
                variables() {
                    return {
                        school: this.schoolSelect
                    }
                },
                update: data => data.groupBySchool,
                skip: true,
                result(data) {
                    if (!data.loading) {
                        this.groups = data.data.groupBySchool;
                    }
                }
            }
        },
        data() {
            return {
                tab: 0,
                facultySelect: '',
                schoolSelect: '',
                search: '',
                researchersPage: 1,
                groupsPage: 1,
                projectsPage: 1,
                itemsPerPage: 8,
                sortDesc: false,
                sortBy: 'name',
                researchersTitle: 'Investigadores',
                groupsTitle: 'Grupos',
                projectsTitle: 'Proyectos',
                researchers: [],
                groups: [],
                projects: [],
                faculties:[],
                schools: [],
                projectsBySchool: [],
                researchersBySchool: [],
                groupsBySchool: []
            }
        },
        watch: {
            '$route.query.active_tab': function (tab) {
                this.tab = Number(tab);
            },
            facultySelect: function (value) {
                if (value !== null) {
                    this.$apollo.queries.schools.start();
                }
            },
            schoolSelect: function (value) {
                let generalProperties = ['researchers', 'groups', 'projects'];

                try {
                    if (value !== null) {
                        this.$apollo.queries.projectsBySchool.start();
                        this.$apollo.queries.researchersBySchool.start();
                        this.$apollo.queries.groupsBySchool.start();
                    } else {
                        generalProperties.forEach(property => {
                            this.$apollo.queries[property].refresh();
                        })
                    }
                } catch (error) {
                    throw error;
                }
            }
        },
        computed: {
            numberOfPagesResearchers() {
                return Math.ceil(this.researchers.length / this.itemsPerPage)
            },
            numberOfPagesGroups() {
                return Math.ceil(this.groups.length / this.itemsPerPage)
            },
            numberOfPagesProjects() {
                return Math.ceil(this.projects.length / this.itemsPerPage)
            }
        },
        methods: {
            nextPage(entity) {
                switch (entity) {
                    case 'Researchers':
                        if (this.researchersPage + 1 <= this.numberOfPagesResearchers) this.researchersPage += 1;
                        break;
                    case 'Groups':
                        if (this.groupsPage + 1 <= this.numberOfPagesGroups) this.groupsPage += 1;
                        break;
                    case 'Projects':
                        if (this.projectsPage + 1 <= this.numberOfPagesProjects) this.projectsPage += 1;
                        break;
                }
            },
            formerPage(entity) {
                switch (entity) {
                    case 'Researchers':
                        if (this.researchersPage - 1 >= 1) this.researchersPage -= 1;
                        break;
                    case 'Groups':
                        if (this.groupsPage - 1 >= 1) this.groupsPage -= 1;
                        break;
                    case 'Projects':
                        if (this.projectsPage - 1 >= 1) this.projectsPage -= 1;
                        break;
                }
            },
            getFaculties() {
                this.faculties = this.faculties.map((obj) => { return obj.faculty });
                this.faculties.unshift({ value: null, label: 'Ninguna' });
            },
            cleanFilter() {

            }
        },
        mounted() {
            this.tab = Number(this.$route.query.active_tab);
            let loader = this.$loading.show();
            if (this.$apollo.loading) {
                loader.hide();
            }
        },
        components: {
            SideBar,
            Header,
            Footer
        },
    };
</script>

<style scoped>

    a {
        color: transparent !important;
    }


    div.text--primary {
        color: transparent !important;
    }

    .colB {
        background-color: #3f4a5b;
    }

    .searchIcon{
        color: white;
        margin-right: 20px;
    }

</style>

