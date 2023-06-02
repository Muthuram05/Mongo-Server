const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());  
app.get("/message", (req, res) => {
    res.json({message : "heloo from server"});
});

app.post('/create',async function(req, res) {
  try {
      const conn = await mongoose.connect(`mongodb://localhost:27017/${req.params.userName}`);
      res.json({message :"Mongo db connected"});
  } catch (error) {
      res.json({error});
  }
});
app.get('/database/get', async (req, res) => {
  try {
    const data = await mongoose.connection.db.admin().command({
      listDatabases: 1,
    });
    if (data && data !== null) {
      res.status(200).send({ data: data });
      return;
    }
    res.status(200).send({ data: null, message: 'Data not found' });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.status(500).send(e.message);
  }
});

  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));