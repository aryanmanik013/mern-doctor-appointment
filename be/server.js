const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
// dotenv config
dotenv.config()

// rest obj
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.get("/get", (req, res) => {
  res.status(200).send({
    message: "Server Running",
  });
});

// listen port
const port = process.env.PORT || PORT;
app.listen(5000,()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode On ${process.env.PORT}`)
})