var overlays = {
	c:true,
	success_title:'OK',
	error_title:'Cancel',
	ovlOpen: function(data, width, height, close, auto){
		close = close != undefined ? close : this.c;
		auto = auto != undefined ? auto : false;

		$('#_ovl').css('cursor', 'wait');
		$('#_ovl').css('color', '#000000');
		var style = (width!='' || height!='') ? "style='" +
			(width ? ("width: "+width + (width.toString().endsWith("px") || width.toString().endsWith("%") || width.toString().endsWith("vw") || width.toString().endsWith("auto") ? '' :'px' )) : '')+
			(height ? (";height: "+height + (height.toString().endsWith("px") || height.toString().endsWith("%") || height.toString().endsWith("vh") || height.toString().endsWith("auto") ? '' :'px' )) : '')+
			"'" : '';
		data = "<div class='data'>"+data+"<div style='clear:both'></div></div>" +
			"<div class='_overlay'></div>" +
			(close == true? "<div class='black'><a class='close' onclick='overlays.ovlClose()'></a></div>" :'');
		var ovlString = "<div class='_ovl-bg'></div>";
			ovlString += "<div class='centerOvl' "+style+">"+data+"<div style='clear:both'></div></div>";
			ovlString += "<div style='clear:both'></div>";

		$('#_ovl').html(ovlString);
		$('#_ovl').css('display', 'flex');
		$('#_ovl').css('cursor', 'default');
		if( $('.centerOvl').height() > $(window).height() ) {
			$('#_ovl').addClass('_ovl_overload');
		}

		//animate
		var time_close = 0;
		if( close == "auto" ) { time_close = 1000;}
		function  _close( close ) {
			if (close == "auto") {
				setTimeout( function() {
					$(".centerOvl").animate({top: '-150%'}, function() {
						overlays.ovlClose();
					});
				}, 2000);
			}
		}
		if( auto == true ) {
			$(".centerOvl").css('top', '-150%' );
			$(".centerOvl").animate({top: '0'}, time_close, function(){ return _close(close); } );
		} else if( auto != '' ) {
			$(".centerOvl").css( auto, '-150%' );
			if( auto == 'left') {
				$(".centerOvl").animate({left: '0'}, time_close, function(){ return _close(close); });
			} else if( auto == 'right') {
				$(".centerOvl").animate({right: '0'}, time_close, function(){ return _close(close); });
			} else if( auto == 'top') {
				$(".centerOvl").animate({top: '0'}, time_close, function(){ return _close(close); } );
			} else if( auto == 'bottom') {
				$(".centerOvl").animate({bottom: '0'}, time_close, function(){ return _close(close); } );
			}
		}
		if ((/(ipad|iphone|ipod)/i.test(navigator.userAgent))) {
			$(".centerOvl").css('max-width', '95vw');
			$("._ovl_overload .close").css('right', '5vw');
			$("._ovl_overload .close").css('top', '5vw');
		}
	},
	ovlClose: function(){
		//jQuery('#_ovl').slideToggle('slow');
		$('#_ovl').removeClass('_ovl_overload');
		$('#_ovl').hide();
		$('#_ovl').html("");
        $('#_ovl').removeProp('style');
		return;
	},

	ovlComfim: function(data, callbackSuccess, onerror, width) {
		width = width ? width :'30%';
		this.ovlClose();
		this.onerror = (typeof onerror === 'function') ? onerror : function(file){
			this.ovlClose();
		};

		this.callbackSuccess = (typeof callbackSuccess === 'function') ? callbackSuccess: function(file){
				this.ovlClose();
			};
		data += '<hr><div style="clear: both; text-align: center;display: flex;justify-content: center;"><button onclick="overlays.callbackSuccess();">'+overlays.success_title+'</button><button onclick="overlays.onerror();overlays.ovlClose()">'+overlays.error_title+'</button></div>'
		this.ovlOpen(data, width);
		this.success_title = 'OK';
		this.error_title = 'Cancel';
	}

};
$( document ).ready(function() {
	if( $('.centerOvl').height() > $(window).height() ) {
		$('#_ovl').css('display', 'block');
		$('.centerOvl').css('height', '97vh');
	}
});

