const fs = require('fs');
const pathInput = "./input/";
const pathOutput = "./output/";
class Files {
    getMimeTypeFromArrayBuffer = (arrayBuffer) => {
        const uint8arr = new Uint8Array(arrayBuffer)
        
        const len = 4
        if (uint8arr.length >= len) {
            let signatureArr = new Array(len)
            for (let i = 0; i < len; i++)
                signatureArr[i] = (new Uint8Array(arrayBuffer))[i].toString(16)
            const signature = signatureArr.join('').toUpperCase()

            switch (signature) {
                case '89504E47':
                    return 'png';//'image/png'
                case '47494638':
                    return 'gif';//'image/gif'
                case '25504446':
                    return 'pdf';//'application/pdf'
                case 'FFD8FFDB':
                case 'FFD8FFE0':
                    return 'jpeg';//'image/jpeg'
                case '504B0304':
                    return 'zip';//'application/zip'
                default:
                    return null
            }
        }
        return null
    }
    filesToNames = async () => {
        let files = [];
        // let sbc = await fs.readdir(pathOutput, async (err, f) => {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("\nCurrent directory filenames: ");
        //         // let pathFolder = path.dirname(path.dirname(__dirname));
        //         f.forEach(file => {
        //             files.push(file);
        //         })
        //         console.log(files)
        //         // return files;
        //     }
        // })
        fs.readdirSync(pathOutput).forEach(file => {
            console.log(file);
            files.push(file);
          });
        // Promise.resolve(files);
        return files;
    }
}
exports.Files = new Files;