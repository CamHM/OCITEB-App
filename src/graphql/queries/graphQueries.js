import gql from 'graphql-tag'

export const GET_ALL_RESEARCHERS = gql`
    query {
        Researcher {
            id
            name
            school
        }
    }
`;

export const GET_ALL_GROUPS = gql`
    query {
        Group {
            id
            name
            school
        }
    }
`;

export const GET_ALL_PROJECTS = gql`
    query {
        Project {
            id
            name
        }
    }
`;

export const GET_ALL_FACULTIES = gql`
    query {
        facultyList {
            faculty
        }
    }
`;

export const GET_SCHOOLS_BY_FACULTY = gql`
    query schoolList ($faculty: String!) {
        School (faculty: $faculty){
            name
        }
    }
`;

export const GET_PROJECTS_BY_SCHOOLS = gql`
    query projectList ($school: String!) {
        projectBySchool (school: $school){
            id
            name
        }
    }
`;

export const GET_RESEARCHERS_BY_SCHOOLS = gql`
    query researcherList ($school: String!) {
        researcherBySchool (school: $school){
            id
            name
            school
        }
    }
`;

export const GET_GROUP_BY_SCHOOLS = gql`
    query groupList ($school: String!) {
        groupBySchool (school: $school){
            id
            name
            school
        }
    }
`;