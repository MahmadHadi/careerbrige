import request from "supertest";
import app from "../server";

test("POST /register should create a new user", async () => {
  const response = await request(app).post("/api/auth/register").send({
    name: "Hadi3",
    email: "hadi3@test.com",
    password: "hadipwd3",
    role: "student",
  });
  //   console.log(response.status);
  console.log(response.body);

  expect(response.status).toBe(201);
  expect(response.body.message).toBe("user created");
  //   expect(response.body.user.email).toBe("hadi2@test.com");
});
