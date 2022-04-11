
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require("cors");
const bodyParser = require('body-parser');
require ("dotenv").config();



const app = express();
const PORT = process.env.PORT || "8000";   

//DB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("📚 DB is Connected"))
  .catch((err) => console.log("😨 DB Connection has error -> ",err));



//Middleware 
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });



// Routes
app.get("/", (req, res, next) =>{
    res.send("<h1>❤️ DDRS Community Server</br> Developed By <a href='http://sliit.lk'>TEAM X</a></h1>");
    next();
});
 

app.listen(PORT, () =>{
    console.log(`🚀 Server is UP and running on PORT ${PORT }`)
});