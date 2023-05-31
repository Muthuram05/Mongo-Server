const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());  
app.get("/message", (req, res) => {
    res.json({message : "heloo from server"});
});


mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));