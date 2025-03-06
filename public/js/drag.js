function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
        elmnt.ontouchstart = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        var x = e.clientX || e.targetTouches[0].pageX;
        var y = e.clientY || e.targetTouches[0].pageY;
        pos3 = x;
        pos4 = y;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // e.preventDefault();
        var x = e.clientX || e.targetTouches[0].pageX;
        var y = e.clientY || e.targetTouches[0].pageY;
        // calculate the new cursor position:
        pos1 = pos3 - x;
        pos2 = pos4 - y;
        pos3 = x;
        pos4 = y;
        // set the element's new position:
        var offsetTop = (elmnt.offsetTop - pos2);
        offsetTop = offsetTop<0 ? 0 : offsetTop
        offsetTop = offsetTop>($(elmnt).parent().height()-$(elmnt).height()) ? $(elmnt).parent().height()-$(elmnt).height() : offsetTop
        var offsetLeft = (elmnt.offsetLeft - pos1);
        offsetLeft = offsetLeft<0 ? 0 : offsetLeft;
        offsetLeft = offsetLeft>($(elmnt).parent().width()-$('#'+elmnt.id + "header").width()) ? $(elmnt).parent().width()-$('#'+elmnt.id + "header").width()*2 : offsetLeft
// console.log(offsetLeft +' = '+$(elmnt).parent().width() + " == "+$('#'+elmnt.id + "header").width() );
        elmnt.style.top = offsetTop + "px";
        elmnt.style.left = offsetLeft + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
    }
}
// dragElement(document.getElementById("toolbar"));