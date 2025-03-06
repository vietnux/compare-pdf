const util = require('util');
const exec = util.promisify(require('child_process').execSync);
// const { exec } = require("child_process") ;
const { Images } = require("../controllers/Images");
const { XhrHttps } = require('./XhrHttps');
const fs = require('fs');
// import './XhrHttps';
const path = require('path');
const { Files } = require('../controllers/Files');
const { User } = require('../controllers/User');
const { PDF } = require('../controllers/Pdf');
const pathInput = "../../input/";
const pathOutput = path.parse(path.parse(__dirname).dir).dir + '/output';//"../../output/";

// PDF.Basic();