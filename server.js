const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect database
connectDB();

// Init middleware (bodyparser included with Express now, i.e. - can do 'express.json' instead of 'bodyparser.json').
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
