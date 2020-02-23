import gql from 'graphql-tag';

const I01 = gql`query I01($faculty: String!) {
    ReportI01(faculty: $faculty) {
        year
        concept
        total
    }
}`;

const I02 = gql`
    query I02($faculty: String!) {
        ReportI02(faculty: $faculty) {
            year
            internalS_amount
            internalE_amount
            external_amount
            total
        }
    }
`;

const I03 = gql`
    query I03($faculty: String!) {
        ReportI03(faculty: $faculty) {
            year
            concept
            total
        }
    }
`;

const I04 = gql`
    query I04($faculty: String!) {
        ReportI04(faculty: $faculty) {
            group
            initials
            proyects
            total
        }
    }
`;

const  I05 = gql`
    query I05($faculty: String!) {
        ReportI05(faculty: $faculty) {
            year
            total
        }
    }
`;

const I06 = gql`
    query I06($faculty: String!) {
        ReportI06(faculty: $faculty) {
            year
            total
        }
    }
`;

const F01 = gql`
    query F01($faculty: String!) {
        ReportF01(faculty: $faculty) {
            year
            total
        }
    }
`;

const F02 = gql`
    query F02($faculty: String!) {
        ReportF02(faculty: $faculty) {
            year
            total
        }
    }
`;

const F03 = gql`
    query F03($faculty: String!) {
        ReportF03(faculty: $faculty) {
            anio
            total
        }
    }
`;

export { I01, I02, I03, I04, I05, I06, F01, F02, F03 }
