const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const axios = require('axios')

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const server = http.createServer(app);



const PORT = 3041;

server.listen(PORT, async () => {
  console.log("*** Starting server ***");
  console.log(`| Server listening on port :: ${PORT}`);
});

const {dunzoCreateOrder}   = require('./dunzo_tracking')
const {ivoyCreateOrder}    = require('./ivoy_tracking')
const {tookanCreateOrder}  = require('./tookan_tracking')

app.get("/move-order-dunzo", dunzoCreateOrder );
app.get("/move-order-ivoy", ivoyCreateOrder); 
app.post("/move-order-tookan", tookanCreateOrder); 


app.post('/hi', async (req, res)=>{
  res.send("OK")
})