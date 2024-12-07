function formatTasksList(tasks) {
  return tasks.map((t) => ({
    title: t.title,
    description: t.description,
    completed: t.completed,
    createdAt: t.createdAt,
  }));
}

describe("listTasksLogic unit tests", () => {
  it("debería formatear la lista de tareas", () => {
    const sample = [
      {
        title: "Task1",
        description: "Desc1",
        completed: false,
        createdAt: new Date(),
      },
    ];
    const result = formatTasksList(sample);
    expect(result[0]).toHaveProperty("title", "Task1");
    expect(result[0]).toHaveProperty("description", "Desc1");
    expect(result[0]).toHaveProperty("completed", false);
    expect(result[0]).toHaveProperty("createdAt");
  });
});
