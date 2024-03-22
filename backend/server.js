const express = require("express");
const app = express();

const port = process.env.PORT || 5000

const bodyParser = require("body-parser");
const cors = require('cors')
const jsonwebtoken = require('jsonwebtoken')

const users = require("./router/api/user");
const rooms = require("./router/api/room");
const records = require("./router/api/record");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());
app.use("/api/user",users);
app.use("/api/room",rooms);
app.use("/api/record",records);

app.listen(port,()=>{
    console.log(`Server is runing ${port}`);
})