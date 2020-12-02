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



app.post('/uploads', (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, (error, fields, files) => {
      // res.json({error, fields, files});
      var newname = Date.now();
      var oldpath = files.userfile.path;
      var newpath =
        __dirname +
        '/upload/' +
        newname.toString() +
        '.' +
        files.userfile.name.split('.').pop();
  
      fs.move(oldpath, newpath, function (err) {
        res.json({result: 'Upload Successfully', account: fields});
      });
    });
  });

app.listen(3000, () => {
  console.log('Server is running.');
});
