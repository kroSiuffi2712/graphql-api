import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    projects: [Project]
    tasks:[Task]
  }

  type Mutation {
    createProject(name: String, description: String): Project
    createTask(title: String, projectId: ID): Task
    deleteTask(id)
  }

  type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  type Task {
    _id: ID
    title: String
    projectId: ID
    createdAt: String
    updatedAt: String
  }
`;
