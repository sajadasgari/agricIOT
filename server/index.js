const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'123456',
    database:'compelete'
})

app.post("/save", (req, res) =>{
    const name = req.body.name
    const family = req.body.family
    const age = req.body.age
    const contry = req.body.contry
    const position = req.body.position
    const salary = req.body.salary

    db.query(
        "INSERT INTO ppl (name, family, age, contry, position, salary) VALUES (?, ?, ?, ?, ?, ?)",
        [name, family, age, contry, position, salary],
        (err,result) =>{
            if(err){
                console.log(err)
            }
            else{
                res.send("ya, whatever...")
            }
        }
    )
})
app.listen(3001, ()=>{
    console.log("whatever")
})