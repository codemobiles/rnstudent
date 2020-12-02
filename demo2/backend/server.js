// npx nodemon server.js
const express = require('express');
const formidable = require("formidable")
const app = express();

app.get('/', (req, res) => {
  res.end('I am home');
});

app.get('/login', (req, res) => {
  res.json({result: 'ok', detail: req.query});
});

app.post("/upload", (req, res)=>{
    const form = new formidable.IncomingForm()
    form.parse(req, (err,fields, files)=>{
        res.json({err, fields, files})
    })
})

app.listen(3000, () => {
  console.log('Server is running.');
});
