const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch(err => console.log("Database error:", err));

const Registration = mongoose.model("Registration", {
  name: String,
  email: String,
  course: String
});

app.get("/", (req, res) => {
  res.send(`
    <h1>Training Registration System</h1>

    <form method="POST" action="/register">
      <input name="name" placeholder="Enter Name" required><br><br>
      <input name="email" type="email" placeholder="Enter Email" required><br><br>
      <input name="course" placeholder="Enter Course" required><br><br>
      <button type="submit">Register</button>
    </form>
  `);
});

app.post("/register", async (req, res) => {
  try {
    await Registration.create(req.body);
    res.send("Registration Successful!");
  } catch (error) {
    res.status(500).send("Registration failed");
  }
});

app.get("/registrations", async (req, res) => {
  const data = await Registration.find();
  res.json(data);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
