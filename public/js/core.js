var url = 'http://thegioilaptrinh.net/';
var index = 0;
var data_index = 0;
var versionCode = 8;

var screen = '';
var lang = 'vi';
var _is_play = true;
var _is_hide_tab = false;
var mobile_is = '';

if (!mobile_is) {
    if ((/(ipad|iphone|ipod)/i.test(navigator.userAgent))) {
        mobile_is = 'ios';
    } else if ((/(android)/i.test(navigator.userAgent))) {
        mobile_is = 'android';
    }
}

function dataloading() {
    dataloadingclose();
    var html_loading = '<div id="_loading"><div class="_overlay"></div><div class="loader_ads"></div></div>';
    // overlays.ovlOpen(html_loading, '', '', false);
    return $('body').append(html_loading);

}
function dataloadingclose() {
    $('#_loading').remove();
}
document.addEventListener("deviceready", function () {
    fixMobile();
    checkLanguage();
}, false);

function exitgame() {
    var data = langs[lang].exit;
    overlays.ovlOpen(data, $(window).width() * 0.7, 'auto');
}

function checkLanguage() {
    navigator.globalization.getPreferredLanguage(
        function (language) {
            lang = change_lang[language.value] ? change_lang[language.value] : lang;
            // alert('language: ' + JSON.stringify(language) + '\n');
            fixlang();
        }, function () {
            fixlang();
        }
    );
}

function fixlang() {
    $('[data-lang]').each(function () {
        var valuelang = $(this).data('lang');
        // console.log( valuelang+ ' Lang: '+ langs[lang][valuelang] );
        if (langs[lang][valuelang]) {
            $('[data-lang="' + valuelang + '"]').html(langs[lang][valuelang]);
            $('[data-lang="' + valuelang + '"]').val(langs[lang][valuelang]);
        }
    });
}

function fixMobile() {
    $('[data-showmobile]').each(function () {
        var value = $(this).data('showmobile');
        if (mobile_is != value) {
            $(this).hide();
        }
    });
}

function close() {
    $(".box").hide();
    // $('.footer').hide();
    overlays.ovlClose();
    $('.ads').html('');
    // removeNativeAd();
}

function reset() {
    index = 0;
    data_index = 0;
    is_child = is_history = is_items = false;
    data = [];
    $('#menu').css('z-index', 10);
    for (i = 0; i < bangs; i++) {
        clearInterval(intervalPhao[i]);
    }
    boddie.remove();
}

function info() {
    var info = langs[lang].info;
    // if (/(android)/i.test(navigator.userAgent)) {
    //     info += more_android;
    // } else {
    //     info += more_ios;
    // }
    overlays.ovlOpen(info, '95vw');


    if (!adsposition.more_app) {
        $('.app-other').hide();
    }
    fixMobile();

    // 'help.html'
    // createNativeAd();
    createSelectedBanner();
}

function close_history() {
    $("#history").hide();
    $("#nativead").remove();

    removeBanner();

    if (data_index != 0) {
        $('#board').show();
    } else {
        reset();
    }
}

function close_info() {
    $("#res").show();
    $("#info").hide();
    $('#info').html('');
    $('.box').hide();
    if (screen == 'menu') {
        screen = '';
        $('#splashscreen').show();
    } else {
        $('#board').show();
    }

    $(".ads").html("");
    removeBanner();
}

function setRating() {
    var data = langs[lang].rating;
    overlays.ovlOpen(data, $(window).width() * 0.7, 'auto');
}

function rating() {
    overlays.ovlClose();
    var http = 'https://play.google.com/store/apps/details?id=com.thegioilaptrinh.ObjectMaker3D';
    if (/(android)/i.test(navigator.userAgent)) {
        http = 'market://details?id=com.tglt.emulator.nintendo';
    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        http = 'itms-apps://itunes.apple.com/app/apple-store/idxxx';
    }

    window.open(http, '_system');
    $('.ads').html('');
    removeNativeAd();
}

function shared(title, subject, image, link) {
    overlays.ovlClose();
    overlays.ovlOpen('<div class="loader"></div><br><h4>Loading ...</h4>', $(window).width() * 0.5, 'auto');
    $('#_ovl .centerOvl').css('background', 'none');

    var title = title ? title : langs[lang].app_name;
    var subject = subject ? subject : langs[lang].about;
    var image = image ? image : '';
    var link = link ? link : '';
    if (/(android)/i.test(navigator.userAgent)) {
        link = 'https://play.google.com/store/apps/details?id=com.thegioilaptrinh.ObjectMaker3D';
    } else {
        link = 'https://itunes.apple.com/us/app/apple-store/idxxx';
    }
    // return alert(link);
    window.plugins.socialsharing.share(title, subject, [image], link, overlays.ovlClose(), overlays.ovlClose());
    $('.ads').html('');
    removeNativeAd();
    prepareInterstitialRandom();
}

function download(callback) {
    var callback = (typeof callback === 'function') ? callback : function (file) {
        // if( confim("Hãy chia sẻ chiến thắng với bạn bè nhé?") ) {
        shared('', '', file, '');
        // }
    };
    overlays.ovlClose();

    var filetype = 'image/jpeg';
    //Get data from canvas
    // var img_b64 = canvas.toDataURL(filetype);
    //Create blob from DataURL
    // var img_blob = dataURItoBlob(img_b64);
    var filename = Date.now();
    return html2canvas($("#board")[0]).then(function (canvas) {
        // canvas.getContext("2d");
        var base64 = canvas.toDataURL(filetype);
        // return base64;
        // $("[id*=hfImageData]").val(base64);
        // __doPostBack(btnExport.name, "");
        // window.location = base64;
        // return;
        var img_blob = dataURItoBlob(base64);
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
            // alert('file system open: ' + JSON.stringify(fs.root) + ' == '+filename );
            createDirectory(fs.root, folder);
            fs.root.getFile(folder + "/" + filename + ".jpg", { create: true, exclusive: false }, function (fileEntry) {
                writeFile(fileEntry, img_blob, callback);
                // closeloading();

                return fs.root.nativeURL + filename + ".jpg";
            });
        });
    });
}

// downloadLnk.addEventListener('click', download, false);

function remove_rom(files, callback) {
    // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
    //     alert(fs.root.fullPath);
    //     fs.root.getFile(folder + "/" + files, {create: false}, function (fileEntry) {
    //         fileEntry.remove(function(){
    //             callback();
    //         },function(error){
    //             // Error deleting the file
    //             alert(error.code);
    //         },function(){
    //             alert("Chết");
    //             // The file doesn't exist
    //         });
    //     },function(evt){
    //         alert(evt.target.error.code);
    //     });
    // });
    window.resolveLocalFileSystemURL(files,
        function (fileEntry) {
            fileEntry.remove(
                function () {
                    // alert("pl");
                    callback();
                },
                function (error) {
                    overlays.ovlOpen('Unable to remove file.');
                }
            );
        }
    );
}
function save_rom(filename, blob, callback) {
    var callback = (typeof callback === 'function') ? callback : function (file) {
        // if( confim("Hãy chia sẻ chiến thắng với bạn bè nhé?") ) {
        // shared('', '', file, '');
        // }
    };
    // console.log(isMobile);
    //save to pc
    if (!isMobile) { return SaveBlobAs(blob, filename); }
    // overlays.ovlClose();
    // var extension = filename.split(".").pop().toLowerCase();
    // var filetype = blob.type;//'application/octet-stream';
    //Get data from canvas
    // var img_b64 = canvas.toDataURL(filetype);
    //Create blob from DataURL
    try {
        return window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
            // alert('file system open: ' + JSON.stringify(fs.root) + ' == '+filename );
            createDirectory(fs.root, folder);
            fs.root.getFile(folder + "/" + filename, { create: true, exclusive: false }, function (fileEntry) {
                writeFile(fileEntry, blob, callback);
                // closeloading();
                // var link  = fs.root.nativeURL + filename;
                // callback(link);
                // return link;
            });
        }, function (error) {
            // console.log(error.code);
            overlays.ovlOpen(error.code);
        });
    } catch (e) {
        overlays.ovlOpen("Error save. Check permission or path file!");
    }
}
function listfile(callback) {
    return window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
        // fs.root.

        fs.root.getDirectory(folder, { create: true, exclusive: false }, function (fileEntry) {
            try {
                var reader = fileEntry.createReader();
                reader.readEntries(
                    function (entries) {
                        callback(entries);
                        // var list_file = '';
                        // // for (i=0; i<entries.length; i++) {
                        // for (i in entries ) {
                        //     if( entries[i].isFile == true ) {
                        //         var extension = entries[i].name.split(".").pop().toLowerCase();
                        //         list_file += "<br>"+entries[i].name;
                        //         // data_param.nes.dataoff.push(entries[i]);
                        //     }
                        //     // data_param.nes.dataoff =
                        // }
                        // // console.log(entries);
                        // callback(JSON.stringify(entries));
                        // callback(JSON.stringify( data_param));

                    },
                    function (err) {
                        console.log(err);
                        callback(err.message);
                    }
                );
            } catch (e) {
                callback(e.message);
            }
            // callback(fileEntry.length);
        });
    });
}

function SaveBlobAs(blob, file_name) {
    if (typeof navigator.msSaveBlob == "function")
        return navigator.msSaveBlob(blob, file_name);

    var saver = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    var blobURL = saver.href = URL.createObjectURL(blob),
        body = document.body;

    saver.download = file_name;

    body.appendChild(saver);
    saver.dispatchEvent(new MouseEvent("click"));
    body.removeChild(saver);
    URL.revokeObjectURL(blobURL);
}

function exit() {
    navigator.app.exitApp();
}

function openapp(app_id) {
    var http = 'https://play.google.com/store/apps/details?id=';
    if (/(android)/i.test(navigator.userAgent)) {
        http = 'market://details?id=';
    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        http = 'itms-apps://itunes.apple.com/app/apple-store/';
    }
    window.open(http + app_id, '_system');
}

function lose() {
    var html = '<section id="falling-demo"><div id="container"><div class="leaf-01">' +
        '<img src="./images/cry.png" width="32px" height="32px"></div>' +
        '<div class="leaf-02"><img src="./images/cry.png" width="32px" height="32px"></div>' +
        '<div class="leaf-03"><img src="./images/cry.png" width="32px" height="32px"></div></div></section>';
    $('body').append(html);

    $('#search-depth').prop('disabled', '');
    clearInterval(interval);

    html = langs[lang].lose;
    setTimeout(overlays.ovlOpen(html, $(window).width() * 0.7, 'auto'), dly);
    setTimeout(function () {
        $('#falling-demo').remove();
    }, 10000);
    setTimeout(menu_pupup(), dly * 2);

    if (adsposition.win == '1') {
        prepareInterstitialRandom();
    }

    if (!checked_sound) {
        return;
    }
    document.getElementById('audio_lose').play();


}

function locateFile(path) {
    if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory)
    } else {
        return scriptDirectory + path
    }
}
/*
<script>
    window.fetch = (url, info) => {
      return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open((info && info.method) || "GET", url);
        if (url.endsWith(".wasm")) xhr.responseType = "arraybuffer";

        xhr.onload = function() {
          if (this.status >= 200 && this.status < 300) {
            resolve({
              json: () => JSON.parse(xhr.response),
              ok: true,
              arrayBuffer: () => xhr.response
            });
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function() {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.send();
      });
    };
    WebAssembly.instantiateStreaming = undefined;
  </script>
 */
function loadwasm(url) {
    let xhr = new XMLHttpRequest();
    xhr.open((info && info.method) || "GET", url);
    if (url.endsWith(".wasm")) xhr.responseType = "arraybuffer";

    xhr.onload = function () {
        xhr.response
    };
    xhr.onerror = function () {
        reject({
            status: this.status,
            statusText: xhr.statusText
        });
    };
    xhr.send();
}

/*
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
 */
var datalite = "";
async function loadBinaryFile(path, success, type) {
    if (datalite) {
        success(datalite);
    } else {
        var type = type ? type : "arraybuffer";
        // console.log( path );
        var xhr = new XMLHttpRequest();
        xhr.open("POST", path, true);
        xhr.responseType = type ? type : "arraybuffer";
        xhr.onload = await function () {
            // if (!type) {
            datalite = xhr.response;
            return success(datalite);
        };
        // xhr.addEventListener("load", dataloading() );
        xhr.send();
    }
}

function selecttopopupchosser(id, p) {
    $(id).html($("#" + p).html());
    // console.log( $(this) );
    overlays.ovlClose();
}
function selecttopopup() {
    overlays.ovlClose();
    $('select').each(function () {

        var html = "";
        for (x in this.options) {
            if (this.options[x].value != undefined) {
                var p = document.createElement('p');
                p.setAttribute("data-value", this.options[x].value);
                p.setAttribute("selectedIndex", x);
                p.id = this.id + "_" + x;
                p.className = this.options[x].className + " cursor_pointer";
                p.innerHTML = this.options[x].innerHTML;
                // p.setAttribute('onclick', this.getAttribute('onclick') ? this.getAttribute('onclick') : this.getAttribute('onchange') );
                if (this.id == "gridSize") {
                    p.setAttribute('onclick', "changeGridSize(" + this.options[x].value + ");selecttopopupchosser(" + this.id + ", '" + p.id + "');");
                } else {
                    p.setAttribute('onclick', "changeObjectColor(" + x + ");selecttopopupchosser(" + this.id + ", '" + p.id + "');");
                }

                html += p.outerHTML;
            }
        }
        // var html = this.innerHTML
        //     // .replace(/<select/g, 'div')
        //     .replace(/<option/g, '<p')
        //     .replace(/value/g, 'data-value');
        // .replace(/id="set-la-ban"/g, 'id="choose-la-ban"');
        // $('#set-la-ban').remove();
        // $('[data-lang="select_compass"]').html("");

        this.outerHTML = "<button id='" + this.id + "' name='' class='" + this.class + "'>Chooser</button>"
        // overlays.ovlOpen(html, '80vw');
        $('#' + this.id).on('click', function () {
            overlays.ovlOpen(html);
        });
    });

}
function changtab(tab) {
    $('.tab').children('div').removeClass('active');
    $('.tab-' + tab).addClass('active');

    $('.content2scroller').removeClass('active');
    var tab_id = (tab == 'scene' ? 'scene' : 'scroller');
    $('#content2' + tab_id).addClass('active');
    listObject();
    $('#content2param').height($(window).height() - $('#content2' + tab_id).height() - $('.tab').height() - 20);
}

function listObject() {
    $('#listScene').html("");
    for (var i = 0; i < objects.length; i++) {
        $('#listScene').append(buildOption(objects[i], false));
    }
}
function buildOption(object, draggable) {
    var option = document.createElement('div');
    option.setAttribute('id', 'listScene' + object.id);
    option.draggable = draggable;
    option.innerHTML = buildHTML(object);
    option.value = object.id;
    if (selectedObject == object) {
        option.setAttribute('class', 'option active');
    } else {
        option.setAttribute('class', 'option');
    }
    option.onclick = function () {
        $('.option').removeClass('active');
        $(this).addClass('active');

        select_obj(object);
    }

    return option;
}
function select_obj(object) {
    selectedObject = object;
    updateTextBoxs();
    controls2.attach(selectedObject);
    controls2.update();
    controls2.visible = true;

    // ENABLING ALL THE TEXTBOXS
    objectPropertiesPanelEnabled(true);

    // UPDATING THE TEXTBOXS VALUES
    updateTextBoxs();

    if (selectedObject.material != undefined) {
        // UPDATING THE COLOR FIELD
        updateColorField();
    }

    // UPDATING THE PROPORTIONAL VALUE
    updateProportional();
}
function buildHTML(object) {
    var html = '<span class="type ' + object.type + '"></span> ' + object.name;
    if (object instanceof THREE.Mesh) {

        var geometry = object.geometry;
        var material = object.material;

        html += ' <span class="type ' + geometry.type + '"></span> ' + geometry.name;
        html += ' <span class="type ' + material.type + '"></span> ' + getMaterialName(material);
    }
    // html += getScript( object.uuid );
    return html;
}
// function getScript( uuid ) {
//     if ( editor.scripts[ uuid ] !== undefined ) {
//         return ' <span class="type Script"></span>';
//     }
//     return '';
// }
function getMaterialName(material) {
    if (Array.isArray(material)) {
        var array = [];
        for (var i = 0; i < material.length; i++) {
            array.push(material[i].name);
        }
        return array.join(',');
    }
    return material.name;
}
function setObjectName() {
    for (var i = 0; i < objects.length; i++) {
        if ((selectedObject.id) == objects[i].id) {
            objects[i].name = $('#objectname').val(); break;
        }
    }
    listObject();
    // console.log($('#objectname').val());
}

$(document).ready(function () {
    if (mobile_is == 'ios') {
        $('textarea').on('blur', function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo(0, 0); //the second 0 marks the Y scroll pos. Setting this to i.e. 100 will push the screen up by 100px.
        });
        $('input').on('blur', function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo(0, 0); //the second 0 marks the Y scroll pos. Setting this to i.e. 100 will push the screen up by 100px.
        });
        $('select').on('blur', function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo(0, 0); //the second 0 marks the Y scroll pos. Setting this to i.e. 100 will push the screen up by 100px.
        });


    }
});