import { gql } from 'apollo-angular';

const PARTS_LIST = gql`
  query {
    parts {
      id
      name
    }
  }
`;

export { PARTS_LIST };
