var change_lang = {"en-US" : "en", "vi-VN": "vi"};
var langs = new Object();
langs.vi = {};
langs.en = {};
langs.vi.app_name = "Create 3D Digital Designs";
langs.en.app_name = "Create 3D Digital Designs";

langs.vi.lang_resize = "Mức";
langs.en.lang_resize = "Level";

langs.vi.newgame = " Ván mới ";
langs.en.newgame = " New game ";
langs.vi.play = " Chơi Game ";
langs.en.play = " Play ";
langs.vi.pause = " Dừng ";
langs.en.pause = " Pause ";
langs.vi.lang_timer = "TGian";
langs.en.lang_timer = "Timer";
langs.vi.lang_move = "Đã đi";
langs.en.lang_move = "Moves";
langs.vi.lang_score = "Điểm";
langs.en.lang_score = "Score";
langs.vi.label_userisX = " Bạn là quân X";
langs.en.label_userisX = " You are X";

langs.vi.shared = "Chia sẻ";
langs.en.shared = "Shared";
langs.vi.undo = "Lùi lại";
langs.en.undo = "Undo";
langs.vi.new_reset = "Chơi lại";
langs.en.new_reset = "New/Reset";
langs.vi.finish = "Kết thúc";
langs.en.finish = "Finish";
langs.vi.back = "Quay lại";
langs.en.back = "Back";

langs.vi.label_userisO = " Bạn là quân O";
langs.en.label_userisO = " You are O";

langs.vi.label_one = " Chơi với máy";
langs.en.label_one = " Playing with the machine";
langs.vi.label_two = " Hai người chơi";
langs.en.label_two = " Two players";

langs.vi.userplaying = "Máy đang đi";
langs.en.userplaying = "The machine is playing";
langs.vi.userplease = "Mời bạn đi";
langs.en.userplease = "Invite you to play";

langs.vi.wanning = "Vị trị này đã có nước cờ rồi, bạn hãy chọn vị trí khác!";
langs.en.wanning = "This place has already played, you choose another place!";
langs.vi.lose = "Bạn đã thua rồi, máy đã thắng.<br>Bạn cần tập luyện nhiều hơn!";
langs.en.lose = "You have lost, the machine has won.<br>You need more practice!";

langs.vi.you = "Mời bạn đi";
langs.en.you = "Invite you to play";
langs.vi.player = "Mời người chơi thứ [user]";
langs.en.player = "Invite player [user]";

langs.vi.player1 = "nhất";
langs.en.player1 = "1st";
langs.vi.player2 = "hai";
langs.en.player3 = "second";

langs.vi.userwin = "Xin chúc mừng người chơi thứ <b>[user]</b>.<br>Bạn là người chiến thắng!";
langs.en.userwin = "Congratulations to the [user] player. You are the winner!";


langs.vi.win = "<div class='alert'><img src='./images/win.png' width='32px' height='32px'><div><b>Xin chúc mừng!.</b><br>Bạn là người chiến thắng!<br>"
    +"Cùng <b><a href='javascript:download();'>chia sẻ</a></b> chiến thắng này với bạn bè bạn nhé?</div></div>";

langs.en.win = "<div class='alert'><img src='./images/win.png' width='32px' height='32px'><div><b>Congratulations!.</b><br>You are the winner!<br>"
    +"Let's enjoy this victory with your friends, <b><a href='javascript:download();'>OKAY</a>?</b></div></div>";


langs.vi.about = "<p>"+langs.vi.app_name+" là trò chơi trí tuệ đơn giản.</p>";
langs.vi.about += "<p>Chơi cờ Caro một game trí tuệ đã rất quen thuộc với mỗi chúng ta. Với lối chơi đơn giản nhưng yếu tố trí tuệ lại rất cao nên Chơi Cờ Caro được rất nhiều người yêu thích đặc biệt là các bạn học sinh, sinh viên và dân văn phòng.</p>";
langs.vi.about += "<p>Game Chơi cờ Caro không chỉ mang tính chất giải trí đơn thuần mà là một cuộc đấu trí vô cùng gay cấn. Cùng tham gia game Chơi cờ Caro và đánh bại các đối thủ để thể hiện đẳng cấp chơi cờ của bạn.</p>";


langs.vi.info = `<h2>Information</h2>
    POD Crawler is a software that allows you to download images from various web platforms and automatically edit them to enhance their quality. With POD Crawler, you can resize images, remove wrinkles, blur, and other imperfections. 
    POD Crawler is the ultimate tool for creating stunning and professional-looking images.`;

langs.en.info = `<h2>Information</h2>
    POD Crawler is a software that allows you to download images from various web platforms and automatically edit them to enhance their quality. With POD Crawler, you can resize images, remove wrinkles, blur, and other imperfections. 
    POD Crawler is the ultimate tool for creating stunning and professional-looking images.`
    ;

langs.vi.rating = '<div class="win">'+
    '<h2 class="spin">Đánh giá ứng dụng</h2>'+
    '<p>Xin hãy giúp cho chúng tôi <b onclick="rating()">5*</b> để chúng tôi có động lực phát triển.</p>'+
    '<p>Hoặc bạn có thể <b onclick="download()">chia sẻ</b> cho bạn bè cùng trải nghiệm!</p>'+
    '<p style="text-align: center;" onclick="rating()"><img src="images/5start.png"></p>'+
    '<b>Cám ơn bạn đã ủng hộ chúng tôi!</b>'+
    '<div class="btn">'+
        '<button onclick="rating()" class="ui-btn-inline ui-icon-navigation ui-btn-icon-left">Đánh giá </button>'+
        '<button onclick="shared()" class="ui-btn-inline ui-icon-navigation ui-btn-icon-left">Chia sẻ</button>'+
    '</div>'+
    '</div>';
langs.en.rating = '<div class="win">'+
    '<h2 class = "spin"> App Review </h2>' +
    '<p> Please help us <b onclick="rating()">5*</b> so that we have a momentum for development.</p>' +
    '<p> Or you can <b onclick="download()"> share </b> to your friends with the same experience!</p>' +
    '<p style="text-align:center;" onclick="rating()"> <img src="images/5start.png"></p>'+
    '<b> Thanks for supporting us! </b>' +
    '<div class="btn">' +
        '<button onclick="rating()" class="ui-btn-inline ui-icon-navigation ui-btn-icon-left">Rating </button>' +
        '<button onclick="shared()" class="ui-btn-inline ui-icon-navigation ui-btn-icon-left">Share</button> '+
    '</div>' +
    '</div>';

langs.vi.exit = '<h2 class="spin">Thoát ứng dụng</h2>'+
    '<h3 style="color: red">Bạn chắc chắn muốn thoát ứng dụng chứ?</h3>'+
    '<p>Xin hãy giúp cho chúng tôi <b onclick="rating()">5*</b> để chúng tôi có động lực phát triển.</p>'+
    '<p>Hoặc bạn có thể <b onclick="shared()">chia sẻ</b> cho bạn bè cùng trải nghiệm!</p>'+
    '<p class="ads"></p>'+
    '<b>Cám ơn bạn đã ủng hộ chúng tôi!</b>'+
    '<div class="btn">'+
        '<button onclick="rating()" class="ui-btn ui-btn-inline ui-icon-navigation ui-btn-icon-left">Đánh giá </button>'+
        '<button onclick="shared()" class="ui-btn ui-btn-inline ui-icon-navigation ui-btn-icon-left">Chia sẻ</button>'+
        '<button onclick="exit()" class="ui-btn ui-btn-inline ui-icon-navigation ui-btn-icon-left fr">Thoát</button>'+
    '</div>';

langs.en.exit = '<h2 class="spin">Exit game</h2>'+
    '<h3 style="color: red">Are you sure you want to quit the game?</h3>'+
    '<p> Please help us <b onclick="rating()">5*</b> so that we have a momentum for development.</p>' +
    '<p> Or you can <b onclick="shared()"> share </b> to your friends with the same experience!</p>' +
    '<p class="ads"></p>'+
    '<b> Thanks for supporting us! </b>' +
    '<div class="btn">'+
    '<button onclick="rating()" class="ui-btn ui-btn-inline ui-icon-navigation ui-btn-icon-left">Rating </button>'+
    '<button onclick="shared()" class="ui-btn ui-btn-inline ui-icon-navigation ui-btn-icon-left">Share</button>'+
    '<button onclick="exit()" class="ui-btn ui-btn-inline ui-icon-navigation ui-btn-icon-left fr">Exit</button>'+
    '</div>';


langs.vi.setting = '<div class="win">'+
    '<h2 class="spin">Cài đặt ứng dụng</h2>'+
    '<div id="setup-options">' +
    '<div id="name-button" class="setup-button">Name</div>' +
    '<div id="speed-button" class="setup-button">Speed' +
    '<div id="speed-selector">' +
    '<select id="speed-options">' +
    '<option value="0">1</option>' +
    '<option value="1">2</option>' +
    '<option value="2">3</option>' +
    '<option value="3">4</option>' +
    '<option value="4">5</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '<div id="mode-button" class="setup-button">Dark mode</div>' +
    '<div id="help-button" class="setup-button">Help</div>' +
    '</div>'+
    '<div class="btn">'+
    '<button onclick="overlays.ovlClose()">Đóng</button>'+
    '</div>'+
    '</div>';
langs.en.setting = '<div class="win">'+
    '<h2 class="spin"> Setting App </h2>' +
    '<div id="setup-options">' +
        '<div id="name-button" class="setup-button">Name</div>' +
        '<div id="speed-button" class="setup-button">Speed' +
            '<div id="speed-selector">' +
                '<select id="speed-options">' +
                    '<option value="0">1</option>' +
                    '<option value="1">2</option>' +
                    '<option value="2">3</option>' +
                    '<option value="3">4</option>' +
                    '<option value="4">5</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<div id="mode-button" class="setup-button">Dark mode</div>' +
        '<div id="help-button" class="setup-button">Help</div>' +
    '</div>'+
    '<div class="btn">' +
    '<button onclick="overlays.ovlClose()">Close</button> '+
    '</div>' +
    '</div>';