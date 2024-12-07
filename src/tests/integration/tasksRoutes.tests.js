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
