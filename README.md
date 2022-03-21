# :zap: Angular GraphQL API

* Frontend: Angular used with GraphQL and Apollo Client to view the backend Engineering Parts data set
* Backend: Node.js + GraphQL used with Apollo Server and GraphQL schema to execute queries on a data set
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-graphql-api?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-graphql-api?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-graphql-api?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-graphql-api?style=plastic)

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Angular frontend uses the graphql module to fetch data via localhost port 4000
* GraphQL used to query a mock Engineering parts `db.js` database with field reviews of parts and comments to improve the parts supply process
* This was an idea of mine to link humdrum parts depots/maintenance to social media-like commenting from field personnel to flag up any problems with parts or their documentation.
* Based on my time on engineering sites, where maintenance, spare parts, tools and related warehousing and manhours is big budget. Project costing was based on the weight of the modifications so this was vital data, e.g weight of cables and cable-trays/cable-ladders.
* Engineering parts are classified as critical parts or not with a Boolean `criticalPart` field.
* Users can query, add, mutate (update) and delete parts, categories & field reviews

## :camera: Screenshots

![Image](./imgs/query.png)
![Image](./imgs/mutate-addCategory.png)

## :signal_strength: Technologies

* [Angular v13](https://angular.io/) javascript framework
* [Apollo Client v3](https://www.npmjs.com/package/@apollo/client) to fetch data via GraphQL

* [Node.js v14](https://nodejs.org/) Javascript runtime using the [Chrome V8 engine](https://v8.dev/)
* [GraphQL v15](https://graphql.org/) API query language
* [Apollo Server v3](https://www.apollographql.com/docs/apollo-server/getting-started/) for unified data communications
* [uuid v8](https://www.npmjs.com/package/uuid) to create RFC4122 UUIDs

## :floppy_disk: Setup

* Front & Back ends: `npm i` to install dependencies
* Backend: `npm run dev` runs backend in the development mode with auto-restart after changes
* Open [http://localhost:4000](http://localhost:4000) to access backend Apollo GraphQL Server
* Frontend: `npm run start` runs frontend with auto-restart after changes
* Open [http://localhost:4200](http://localhost:4200) to view frontend

## :wrench: Testing

* Frontend tested using GraphQL backend data
* Backend tested using GraphQL server Sandbox

## :computer: Code Examples

* Backend: list of GraphQL mutations

```javascript
 type Mutation {
  addCategory(input: AddCategoryInput!): Category!
  addPart(input: AddPartInput!): Part!
  addFieldReview(input: AddFieldReviewInput!): FieldReview!
  deleteCategory(id: ID!): Boolean!
  deletePart(id: ID!): Boolean!
  deleteFieldReview(id: ID!): Boolean!
  updateCategory(id: ID!, input: UpdateCategoryInput!): Category
  updatePart(id: ID!, input: UpdatePartInput!): Part
  updateFieldReview(id: ID!, input: UpdateFieldReviewInput!): FieldReview
 }
```

## :cool: Features

* GraphQL query only returns the data specified, unlike REST queries that return everything

## :clipboard: Status, Testing & To-Do List

* Status: Front and Backends working
* To-Do: Add frontend styling, Tailwind?

## :clap: Inspiration

* [Apollo Docs: Get started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
