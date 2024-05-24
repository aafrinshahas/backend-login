const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

var uname = 'Aafrin';
var pass = 123;

//get method
app.get('/login', function(req, res){
    if(req.query.username === uname && Number(req.query.password) === pass){
        res.send(true)
    }
    else{
        res.send(false)
    }

})

//middleware

app.use(express.urlencoded({extended: true}))

// app.post('/login', function(req, res){
//         if(req.body.username === uname && Number(req.body.password) === pass){
//             res.send('login successfull')
//         }
//         else{
//             res.send('login failed')
//         }
    
//     })

app.listen(5000, function(){
    console.log('server started.....')
})