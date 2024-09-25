import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolves = {
  Query: {
    hello: () => "Hello World",
    projects: async () => await Project.find(),
    tasks: async () => await Task.find(),
  },
  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({ name, description });
      console.log(`${name}, ${description}`);
      const result = await project.save();
      return result;
    },
    createTask: async (_, { title, projectId }) => {
      const project = await Project.findById(projectId);

      if (!project) {
        throw new Error("ProjectId not found");
      }

      const task = new Task({ title, projectId });
      const result = await task.save();
      return result;
    },
    deleteTask: async (_, id) => {
      await Task.deleteOne({ _id: id });
    },
  },
};
