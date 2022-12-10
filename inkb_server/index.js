const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const { urlencoded } = require('body-parser');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'inkb',
});

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get/popular_items", (req,res) =>{
    const sqlSelect = "Select * from popular_items";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/men", (req,res) =>{
    const sqlSelect = "Select * from men";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post('/api/insert', (req, res) =>{

    const table = req.body.table;
    const imageName = req.body.imageName;
    const imageText = req.body.imageText;
    const offer = req.body.offer;

    const sqlInsert = 'insert into '+table+' (image_name, image_text, offers) values (?,?,?)';
    db.query(sqlInsert, [imageName, imageText, offer], (err, result)=>{
        console.log(err);
    });
});

app.post("/api/delete/popular_items/:id", (req, res) =>{

    // const table = req.body.table;
    const ID = req.params.id;

    const sqlDelete = 'DELETE from popular_items where id = ?';
    db.query(sqlDelete, ID, (err, result)=>{
        if(err){
        console.log(err);}
    });
});

app.listen(3001, () => {
    console.log("running on port num 3001");
});