const request = require("supertest");
const app = require("../../index");
const mongoose = require("mongoose");
require("dotenv").config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Initial Integration Test", () => {
  it("should respond with 404 on root", async () => {
    const res = await request(app).get("/").expect(404);
    expect(res.status).toBe(404);
  });
});

describe("POST /tasks", () => {
  it("debería crear una tarea", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Test Task", description: "Test Desc" })
      .expect(201);
    expect(res.body._id).toBeDefined();
    expect(res.body.title).toBe("Test Task");
  });
});

describe("GET /tasks", () => {
  it("debería retornar un array de tareas", async () => {
    const res = await request(app).get("/tasks").expect(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('PATCH /tasks/:id', () => {
  it('debería actualizar el estado de la tarea a completada', async () => {
    const newTask = await request(app)
      .post('/tasks')
      .send({ title: 'To Update', description: 'Update me' })
      .expect(201);

    const updated = await request(app)
      .patch(/tasks/${newTask.body._id})
      .send({ completed: true })
      .expect(200);

    expect(updated.body.completed).toBe(true);
  });
});