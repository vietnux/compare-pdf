const Has = (ob, prop) => hasOwnProperty.call(ob, prop);
var vk = {
    id: 'vkeyboard',
    elements: '[vkey]',
    current: null,
    start: 0,
    keyboard: '.vkeyboard',
    obj: {},
    key: function (el) {
        // console.log(el);

        if (el.innerText == "Hide") {
            vk.obj.style.display = "none";
        } else {
            var charCode = el.innerText.trim().toLowerCase();
            if (charCode == 'up') charCode = 'caps lock';
            var keycode = charCode;//charCode.charCodeAt(0);
            for (x in vk.keystable) {
                if (vk.keystable[x] == charCode) {
                    keycode = x;
                }
            }

            // console.log(charCode + " : " + keycode);
            // vk.sendVirtualKey("keydown", keycode, charCode);
            vk.sendVirtualKey("keyup", keycode, charCode);



            // sendVirtualKey("keydown",78,'N');
            // sendVirtualKey("keyup",78,'N');
            // return;
        }
    },
    keys: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '*', 'Backspace/Delete'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '$', '[', ']'],
    ['Break', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ù', ';', ':'],
    ['UP', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '!', '?'],
    ['Shift', 'Alt', 'Space', 'Options', 'Hide',]],
    keysNumber: [['1', '2', '3', '-'],
    ['4', '5', '6', 'Space'],
    ['7', '8', '9', 'Backspace/Delete'],
    [',', '0', '.', "enter"]],
    keysAction: ['Backspace/Delete', "enter", 'Shift', 'Alt', 'Space', 'Options', 'Hide'],
    keystable: {
        0: "That key has no keycode",
        3: "break",
        8: "backspace/delete",
        9: "tab",
        12: "clear",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause/break",
        20: "caps lock",
        21: "hangul",
        25: "hanja",
        27: "escape",
        28: "conversion",
        29: "non-conversion",
        32: "space",
        33: "page up",
        34: "page down",
        35: "end",
        36: "home",
        37: "left arrow",
        38: "up arrow",
        39: "right arrow",
        40: "down arrow",
        41: "select",
        42: "print",
        43: "execute",
        44: "Print Screen",
        45: "insert",
        46: "delete",
        47: "help",
        48: "0", 49: "1", 50: "2", 51: "3", 52: "4",
        53: "5", 54: "6", 55: "7", 56: "8", 57: "9",
        58: ":",
        59: "semicolon (firefox), equals",
        60: "<",
        61: "equals (firefox)",
        63: "ß",
        64: "@ (firefox)",
        65: "a", 66: "b", 67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        91: "Windows Key / Left ⌘ / Chromebook Search key",
        92: "right window key",
        93: "Windows Menu / Right ⌘",
        95: "sleep",
        96: "numpad 0",
        97: "numpad 1",
        98: "numpad 2",
        99: "numpad 3",
        100: "numpad 4",
        101: "numpad 5",
        102: "numpad 6",
        103: "numpad 7",
        104: "numpad 8",
        105: "numpad 9",
        106: "multiply",
        107: "add",
        108: "numpad period (firefox)",
        109: "-",// subtract
        110: ".",// decimal point
        111: "/",// divide
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        124: "f13",
        125: "f14",
        126: "f15",
        127: "f16",
        128: "f17",
        129: "f18",
        130: "f19",
        131: "f20",
        132: "f21",
        133: "f22",
        134: "f23",
        135: "f24",
        144: "num lock",
        145: "scroll lock",
        160: "^",
        161: "!",
        // 162:"؛ (arabic semicolon)
        163: "#",
        164: "$",
        165: "ù",
        166: "page backward",
        167: "page forward",
        168: "refresh",
        169: "closing paren (AZERTY)",
        170: "*",
        171: "~ + * key",
        172: "home key",
        173: "minus (firefox), mute/unmute",
        174: "decrease volume level",
        175: "increase volume level",
        176: "next",
        177: "previous",
        178: "stop",
        179: "play/pause",
        180: "e-mail",
        181: "mute/unmute (firefox)",
        182: "decrease volume level (firefox)",
        183: "increase volume level (firefox)",
        186: "semi-colon / ñ",
        187: "equal sign",
        188: "comma",
        189: "dash",
        190: "period",
        191: "forward slash / ç",
        192: "grave accent / ñ / æ / ö",
        193: "?, / or °",
        194: "numpad period (chrome)",
        219: "open bracket",
        220: "back slash",
        221: "close bracket / å",
        222: "single quote / ø / ä",
        223: "`",
        224: "left or right ⌘ key (firefox)",
        225: "altgr",
        226: "< /git >, left back slash",
        230: "GNOME Compose Key",
        231: "ç",
        233: "XF86Forward",
        234: "XF86Back",
        235: "non-conversion",
        240: "alphanumeric",
        242: "hiragana/katakana",
        243: "half-width/full-width",
        244: "kanji",
        251: "unlock trackpad (Chrome/Edge)",
        255: "toggle touchpad"
    },

    sendVirtualKey: function (eventType, keyCode, charCode) {
        if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 48 && keyCode <= 57)) {
            $(vk.current).val($(vk.current).val().slice(0, vk.start) + charCode + $(vk.current).val().slice((vk.start)));
            vk.start++;
            // console.log($(vk.current).data('change'))

        } else {
            let value = '';
            // console.log(typeof (keyCode))
            switch (keyCode) {
                case '32':
                    charCode = ' '
                    value = $(vk.current).val().slice(0, vk.start) + charCode + $(vk.current).val().slice((vk.start))
                    break;
                case '8':
                    value = $(vk.current).val().slice(0, vk.start - 1)
                    break;
                case '13':
                    value = $(vk.current).val();
                    break;
                default:
                    console.log(`Sorry, we are out of ${keyCode}.`);
            }

            $(vk.current).val(value);
        }

        return window[$(vk.current).data('change')]();
        // try {
        //     // Has(fun, key) ?
        //     //     fun[key].action.bind(fun[key]) :
        //     //     fun.IN.action.bind(fun[key], key)
        //     var e = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
        //     if (e.initEvent && e.initEvent(eventType, !0, !0), e.keyCode = keyCode, e.which = keyCode, e.charCode = charCode, "undefined" != typeof JSEvents && JSEvents.eventHandlers && JSEvents.eventHandlers.length > 0)
        //         for (var i = 0; i < JSEvents.eventHandlers.length; ++i)
        //             JSEvents.eventHandlers[i].target != Module.canvas && JSEvents.eventHandlers[i].target != window || JSEvents.eventHandlers[i].eventTypeString != eventType || JSEvents.eventHandlers[i].handlerFunc(e);
        //     else Module.canvas.dispatchEvent ? Module.canvas.dispatchEvent(e) : Module.canvas.fireEvent("on" + eventType, e)
        // } catch (e) { }
    },

    //     function sendVirtualKey(keyState, keyValue) {
    //         var oEvent = new KeyboardEvent(keyState, {
    //             bubbles: true,
    //             cancelable: false,
    //             char: "z",
    //             key: "z",
    //             shiftKey: false,
    //             ctrlKey: false,
    //             altKey: false,
    //             keyCode: 90,
    //             code: keyValue
    //         });
    // document.body.dispatchEvent(oEvent)
    // }

    init: function () {
        // document.getElementById('vkeyboard').style.display = "block";
        vk.obj = document.getElementById(vk.id);
        var els = document.querySelectorAll(vk.elements);

        for (var i = 0; i < els.length; i++) {
            els[i].setAttribute('inputmode', 'none');
            els[i].addEventListener('click', function (event) {
                // this.blur()
                // cordova.keyboard.hide()
                vk.current = this;
                vk.start = vk.current.selectionStart;

                vk.obj.style.display = "block";
                this.addEventListener('blur', () => {
                    vk.obj.style.display = "none";
                })

                vk.genKeyboard(vk.current.getAttribute('data-keyboardtype'));
            });
        }


        dragElement(vk.obj);
        // vk.obj.addEventListener('cl', () => {
        //     alert(1);
        //     this.style.display = "none";
        // })

        document.addEventListener('click', function (event) {
            if (vk.obj.style.display == "block") {
                let exits = -1;
                els.forEach((element, index, arr) => {
                    if (exits == -1 && element == this.activeElement) exits = index;
                });

                if (this.activeElement != vk.obj && exits == -1)
                    vk.obj.style.display = "none";
            }

        });


    },
    genKeyboard: (type) => {
        var inht = '', subht;
        var keys = type == 'number' ? vk.keysNumber : vk.keys;
        // for (var i = 0; i < keys.length; i++) {
        keys.forEach((element, i, arr) => {
            inht += '<ul>';
            subht = element;
            // console.log(subht);
            // inht += '<li class="c1' + i + '" onclick="vk.key(this)">' + subht[0] + '</li>';
            inht += '<li class="c1' + (type == 'number' ? 0 : i) + '" ontouchstart="vk.key(this)">' + subht[0] + '</li>';
            subht.forEach((ele, j, arr) => {
                // for (var j = 1; j < subht.length; j++) {
                if (j == 0) return;
                inht += '<li ontouchstart="vk.key(this)">' + ele + '</li>';
                // console.log(subht[j]);
            });
            inht += '</ul>';
        });
        // alert(inht);
        inht += "<img src='images/move.png' id='vkeyboardheader'>";
        document.querySelector('.vkeyboard').innerHTML = inht;
        // console.log(inht);

        // document.getElementsByTagName('li').ontouchstart = function () {
        //     alert(111);
        //     vk.key(this);
        // };

        // $('.vkeyboard li').on('touchstart', (e) => {
        //     alert(112);
        //     vk.key(this);
        // })
    }

}


// vk.init();
// function sendVirtualKey(eventType, keyCode, charCode) {
//     try {
//         var e = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
//         if (e.initEvent && e.initEvent(eventType, !0, !0), e.keyCode = keyCode, e.which = keyCode, e.charCode = charCode, "undefined" != typeof JSEvents && JSEvents.eventHandlers && JSEvents.eventHandlers.length > 0)
//             for (var i = 0; i < JSEvents.eventHandlers.length; ++i)JSEvents.eventHandlers[i].target != Module.canvas && JSEvents.eventHandlers[i].target != window || JSEvents.eventHandlers[i].eventTypeString != eventType || JSEvents.eventHandlers[i].handlerFunc(e); else Module.canvas.dispatchEvent ? Module.canvas.dispatchEvent(e) : Module.canvas.fireEvent("on" + eventType, e)
//     } catch (e) { }
// }