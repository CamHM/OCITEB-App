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
