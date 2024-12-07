const Task = require("../../models/Task");

describe("Task Model Unit Tests", () => {
  it("requiere title y description", () => {
    const task = new Task();
    const error = task.validateSync();
    expect(error.errors.title).toBeDefined();
    expect(error.errors.description).toBeDefined();
  });
});
