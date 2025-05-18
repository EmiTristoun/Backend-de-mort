const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const db = require("./database.js").db;

app.use("/user", require("./routes/user"));
app.use("/review", require("./routes/review"));
app.use("/film", require("./routes/film"));
app.use("/list", require("./routes/list"));

app.use("/version", require("./routes/version"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Hello! Server is running on port ${PORT}`);
});