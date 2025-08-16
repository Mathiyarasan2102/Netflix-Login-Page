const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    email: "mathiarasan.2102@gmail.com",
    password: "221304",
  },
];

app.listen(3000, () => {
  console.log("Server Started in port 3000");
});

app.get("/", (req, res) => {
  res.send("Go to /login");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  console.log("Login Request Body: ", req.body);
});
