'use strict'

const express = require("express");
const app = express();
const path = require('path')
const fs = require('fs')
// const ReadStream = require('ReadStream')
// var logger = require('morgan');
require('./app/config')
require('./app/routers')

const { Files } = require("./app/controllers/Files");

var bodyParser = require('body-parser');
const multer = require("multer");
const upload = require("./app/controllers/upload");
const { PDF } = require("./app/controllers/Pdf");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());

// log requests
// app.use(logger('dev'));

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'))
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public', 'css')));


app.get('/', function (req, res) {
    // var query = req.params.query;
    // if (query)
    //     return res.send(query)
    // res.send('Hello World!');
    res.render('index', {
        title: 'PDF Compare',
        // people: people.profiles
    });
    // res.sendFile(__dirname + '/public/index.html');
});


// app.post('/query?', upload.single('pdfActualfiles'), (req, res) => {
app.post('/query?', upload.fields([
    { name: 'pdfActualfiles', maxCount: 1 },
    { name: 'pdfBaseline', maxCount: 1 }]
), async (req, res) => {
    const pdfActualfiles = req.files.pdfActualfiles[0];
    const pdfBaseline = req.files.pdfBaseline[0];
    const fileName = req.body.title;
    // return upload(req, res, function (err) {
    //     if (err) {
    //         return res.end("Something went wrong:(");
    //     }
    var resCompare = await PDF.BasicBuffer(pdfActualfiles.filename, pdfBaseline.filename);
    res.json( resCompare );
    // });
    return;

    // return res.send(req);
    var query = req.params.query;
    // res.send(req.params)

    req.props = Object.assign(req.query, req.params, req.body);
    // var params = JSON.parse(req.props)
    console.log(req.props);
    // let file_type = Files.getMimeTypeFromArrayBuffer(req.props.pdfActual );
    // return res.send(file_type );

    // var f = new File(req.props.pdfActual);
    // console.log(f.size);
    // if (query)
    // var fileReaderBuffer = new fs.ReadStream();
    // fileReaderBuffer.onload = function (rs) {
    //     return rs.target.result;
    // };
    // fileReaderBuffer.
    // fs.readFileSync(req.props.pdfActual);
    // return res.send(req.props.files)
    // res.sendFile(__dirname + '/public/index.html');

    // let avatar = req.files;
    // console.log(avatar);
    // avatar.mv('./uploads/' + avatar.name)

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/src/index.html');
//   });

/**
 * GET search for :query.
 */

// app.get('/search/:query?', function(req, res){
//     var query = req.params.query;
//     console.log(query)
//     db.smembers(query, function(err, vals){
//       if (err) return res.send(500);
//       res.send(vals);
//     });
//   });

/*
Just because I saw this flying through my inbox,    
 I think the most reliable way to determine if an app is "packaged" or not is to check if app.asar or app exists.
 If it does assume prod, if it doesn't assume dev.
*/
const isDev = () => {
    return process.mainModule.filename.indexOf('app.asar') === -1;
};
// console.log(process.mainModule.filename.indexOf('app.asar'))