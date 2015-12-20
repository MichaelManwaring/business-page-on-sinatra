$(document).ready(function(){

function fullscreen(){
    $('body').css({
    	width: $(window).width(),
   	    height: $(window).height()
        });
    }
    fullscreen();

var image_array = new Array();
    image_array[0] = "/img/bkg_one.png";
    image_array[1] = "/img/bkg_two.png";
    image_array[2] = "/img/bkg_three.png";
    image_array[3] = "/img/bkg_four.png";
    image_array[4] = "/img/bkg_five.png";
    image_array[5] = "/img/bkg_six.png";
 
var rand_path = image_array[Math.floor(Math.random() * image_array.length)];
$("body").css('background-image', 'url('+rand_path+')');

});

var y = 0;
$(function() {
  $("#clickl").click(function() {
    if (y == 0) {
    	$(".left-menu").toggleClass("menuicon-animate");
      	$(".left_mainmenu").animate({"left": '+=96%'}, 'slow');
      	y = 1;
    } else {
    	$(".left-menu").toggleClass("menuicon-reanimate");
      	$(".left_mainmenu").animate({"left": '-=96%'}, 'slow');
      	y = 0;
    }
  });

var y = 0;
$(function() {
  $("#clickr").click(function() {
    if (y == 0) {
    	$(".right-menu").toggleClass("signinicon-animate");
      	$(".right_signin").animate({"right": '+=45%'}, 'slow');
      	y = 1;
    } else {
    	$(".right-menu").toggleClass("signinicon-reanimate");
      	$(".right_signin").animate({"right": '-=45%'}, 'slow');
      	y = 0;
    }
  });

$(".signin_butt").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
  	$(".right-menu").toggleClass("signinicon-reanimate");
    if (y == 0) {
      $(".right_signin").delay(1000).animate({"right": '+=45%'}, 'slow');
      y = 1;
    } else {
      $(".right_signin").delay(1000).animate({"right": '-=45%'}, 'slow');
      y = 0;
    }
  });
});

$(".menu_lk").hover(function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
});


});
