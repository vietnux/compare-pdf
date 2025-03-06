function writeFile(fileEntry, dataObj, successCallback) {
    var type =  dataObj.type;
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwriteend = function(e) {
            // alert("Successful file write...");//+JSON.stringify(fileEntry) );
            if (successCallback) {
                successCallback(fileEntry.nativeURL);
            }
            // readBinaryFile(fileEntry, type);
            // readFile( fileEntry, dataObj )
        };

        fileWriter.onerror = function (e) {
            overlays.ovlOpen("Failed file write: " + JSON.stringify(e));
        };

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: type });
        }
        // if ( dataObj.type != "image/png") {
            dataObj = new Blob([dataObj], { type: type });
        // }

        fileWriter.write(dataObj);
    });
}

function readFile( fileWriter, dataObj ) {
    let data = Blob([dataObj], { type: dataObj.type });
    fileWriter.write(data);

}

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}
function readBinaryFile(fileEntry, type) {
    type = type ? type : "image/png";
    fileEntry.file(function (file) {
        var reader = new FileReader();
        reader.onloadend = function() {
            // alert("Successful file write: " + this.result);
            displayFileData(fileEntry.fullPath + ": " + this.result);

            // var blob = new Blob([new Uint8Array(this.result)], { type: type });
            // // displayImage(blob);
            // window.URL.createObjectURL(blob);
        };

        reader.readAsArrayBuffer(file);

    }, onErrorReadFile);
}

function displayImage(blob) {
    // Displays image if result is a valid DOM string for an image.
    var elem = document.getElementById('imageFile');
    // Note: Use window.URL.revokeObjectURL when finished with image.
    elem.src = window.URL.createObjectURL(blob);
}

//create folder
function createDirectory(rootDirEntry, newFolder) {
    rootDirEntry.getDirectory(newFolder, { create: true } );
}
