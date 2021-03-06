const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Use Route
app.use("/api/todo", todo);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
