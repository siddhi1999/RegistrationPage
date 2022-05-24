const express = require('express');
const app = express();

const cors= require('cors');

app.use(cors());
app.use(express.json());  //this says that you should parse that anything comes named body into json

app.post('/api/register', (req,res) => {
    console.log(req.body);
    res.json({status:'ok'});
});

app.listen(1337, () => {
    console.log("Server started in port 1337");
});