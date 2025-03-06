
const fs = require('fs');
const im = require('imagemagick');
// const { buildInputFile, execute } = require('wasm-imagemagick')
const path = require('path');
const { Files } = require('./Files');
// const sharp = require('sharp');
const pathInput = "./input/";
const pathOutput = "./output/";
// Include gm library
const gm = require('gm').subClass({ imageMagick: true });

class Images {
    writeImage = async (pathfile, content) => {
        // console.log('data', pathfile);
        var x = new DataView(content);
        return await fs.writeFileSync(pathfile, x, err => {
            console.log(err);
            if (!err) {
                // callback()
            }
        });
    }
    save = async (_event, data) => {
        let file_type = Files.getMimeTypeFromArrayBuffer(data.data);
        if( !file_type) return;
        
        let file_name = data.name + '.' + file_type;
        let file_path = pathInput + file_name;
        let file_exits = await fs.existsSync(file_path);
        
        if (file_exits) {
            let timestamp = Date.now();
            // timestamp in milliseconds
            // console.log(timestamp);
            // timestamp in seconds
            timestamp = (Math.floor(timestamp / 1000));
            file_name = data.name + '_' + timestamp + '.' + file_type;
        }
        let file_exit = 0;
        return await fs.exists(pathInput, async () => {
            await fs.mkdir(pathInput, {}, async er => {
                return await this.writeImage(file_path, data.data);
            });
        })
    }

    clearBackground = async (_event, data) => {
        return await fs.readdir(pathInput, async (err, files) => {
            if (err)
                console.log(err);
            else {
                console.log("\nCurrent directory filenames: ");
                let pathFolder = path.dirname(path.dirname(__dirname));
                // this.removeBackground(pathInput, pathOutput);

                // await sharp(pathFolder + '\\input\\FiremanRescue.jpeg')
                //     // .resize(1440, null)
                //     // .ensureAlpha(0)
                //     // .removeAlpha()
                //     // .extractChannel(0) //0: => conver thành đen trắng
                //     //   .raw()
                //     // .withoutEnlargement()
                //     .flatten({ background: { r: 255, g: 255, b: 255, alpha: 255 } })
                //     // .png({ progressive: true })
                //     .toFile(pathFolder + '\\output\\123.png', function (err, info) {
                //         console.log(err);
                //     });


                // im.identify(['-format', '%wx%h', ], (err, features) => {
                // im.convert([pathFolder + '\\input\\hungry orange cat T-Shirt.jpeg'
                //     , '-flatten', '-transparent', 'white',
                //     pathFolder + '\\output\\123.png'], (err, output) => {
                //     console.log("==== ++ ====");
                //     if (err) console.log(err);

                //     console.log(output);
                // })


                files.forEach(async file => {
                    // console.log(`${path.dirname(path.dirname(__dirname))}/input/` + file);
                    let input = `${path.dirname(path.dirname(__dirname))}/input/` + file;
                    let output = `${path.dirname(path.dirname(__dirname))}/output/` + file;

                    // await sharp(pathFolder + '\\input\\'+file)
                    // // .resize(1440, null)
                    // // .ensureAlpha(0)
                    // // .removeAlpha()
                    // // .extractChannel(0) //0: => conver thành đen trắng
                    // //   .raw()
                    // // .withoutEnlargement()
                    // .flatten({ background: { r: 255, g: 255, b: 255, alpha: 255 } })
                    // // .png({ progressive: true })
                    // .toFile(pathFolder + '\\output\\'+file, function (err, info) {
                    //     console.log(pathFolder + '\\input\\'+file);
                    //     console.log(err);
                    //     console.log(info);
                    // });

                    // fs.readFile
                    //-fuzz 2% -fill none -draw "alpha 0,0 floodfill" -channel alpha -blur 0x2 -level 50x100% +channel
                    //
                    // im.identify(['-format', '%wx%h', '.\\input\\Brave_like_a_tiger_T_Shirt.png'], (err, output) => {
                    // // im.convert([input, '-resize', "2000x1000", output ], (err, output) => {
                    //     if (err) console.log(err);
                    //     console.log('Shot at ' + output);
                    // })
                    //Brave_like_a_tiger_T_Shirt
                    // this.removeBackground(input, output);
                })
            }
        })

    }
    removeBackground = async (image_src, output) => {
        // Import the image
        gm('.\\input\\Brave_like_a_tiger_T_Shirt.png')
            // .resize(240, 240)
            // Invoke transparent function on white color
            .transparent('white')

            // Process and Write the image
            .write('.\\output\\Brave_like_a_tiger_T_Shirt.png', function (err) {
                if (!err) console.log('done');

                console.log(err);
            });
    }
}

exports.Images = new Images();