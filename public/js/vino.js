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

function getAge(birthdate) {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Form testing
  // $( "input" ).change(function( event ) {
    // console.log("change to form");
  // });
  subm = false
  // ensure key fields are prepared for submission
  submessage = ""
  $(".password").change(function( event ){
    if($(".password").val().length < 6){
      var submessage = 'password cannot be less than 6 characters'
    }else{
      var submessage = ""
    };
    console.log(submessage)
  });
  $("#password2").change(function( event ){
    if($("#password").val() != $("#password2").val()){
      var submessage = 'The two passwords you provided do not match.'
    }else{
      var submessage = ""
    };
    console.log(submessage)
  });
  $("#birthdate").change(function( event ){
    if(getAge($('#birthdate').val()) < 21 ){
      var submessage="It is illegal for persons under 21 years of age to purchase alchohol"
    }else if (getAge($('#birthdate').val()) >110) {
      var submessage = "This age is suspiciously old"
    }else{
      var submessage = ""
    }
    console.log(submessage)
  });
// hiding the secondary adress bar untill requested
  $("#shipping").hide();
  $('#gift').change(function() {
        $('#shipping').show();
      var gift_toggle = true;
    console.log(gift_toggle)
    });
// Final check for submission
  $( "form" ).submit(function( event ) {
    if(submessage === "") {
      return;
    }
    $( "#validform" ).text( submessage ).show().fadeOut( 2000 );
    event.preventDefault();
  });
});
