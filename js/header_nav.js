// 서브 네비게이션 숨김 잠금

  $(document).ready(function sub_nav_show(){
$( ".main_nav a" ).on( "click", function() {
  $('.sub_nav').toggleClass("show");
  console.log("click a");
});});

//스크롤 팝업

$(document).scroll(function (){
	if ( $(document).scrollTop() > 500) {
		$('div.slide_up').addClass('slide_up_ani');
	}
});


$(document).scroll(function() {
    console.log(scrollTop()); 
})
