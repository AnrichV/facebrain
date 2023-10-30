import express from "express";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";
import knex from "knex";
import { handleRegister } from "./controllers/register.js";
import { handleSignin } from "./controllers/signin.js";
import { handleProfileGet } from "./controllers/profile.js";
import { handleImage, APIOutput } from "./controllers/image.js";
const app = express();
const port = 3000;

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "Bl3nderR@t",
    database: "facebrain",
  },
});

db.select("*")
  .from("users")
  .then((data) => {});

app.use(express.json());
app.use(cors());

app.post("/signin", handleSignin(db, bcrypt));
app.post("/register", handleRegister(db, bcrypt));
app.get("/profile/:id", handleProfileGet(db));
app.put("/image", handleImage(db));
app.post("/imageurl", (req, res) => APIOutput(req, res));

app.listen(port, () => {
  console.log("app is running on port 3000");
});
