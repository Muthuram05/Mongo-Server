
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());  
app.get("/message", (req, res) => {
    res.json({message : "heloo from server"});
});

  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));