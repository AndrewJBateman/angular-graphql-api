import { gql } from 'apollo-angular';

const PARTS_LIST = gql`
  query {
    parts {
      id
      name
      description
      quantity
      weight
      image
      criticalPart
    }
  }
`;

export { PARTS_LIST };
