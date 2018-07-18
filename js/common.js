// 서브 네비게이션 숨김 잠금
/*
  $(document).ready(function sub_nav_show(){
$( ".main_nav a" ).on( "click", function() {
  $('.sub_nav').toggleClass("show");
});});
*/
//스크롤스파이(scrollspy) 팝업
/*
$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var scrollElem = $('a[href="#' + id+ '"]');
        $('#main_section_02').addClass('active').siblings().removeClass( 'active' );
        console.log('aaa');
      }
    })
});
*/
// 스크롤 수동
$(window).scroll(function () {
			var height = $(document).scrollTop();
			   if( height >= 500 ){
           $("#main_popup_02").addClass("slide_up_ani");
          }
         if( height >= 1000 ){
           $("#main_popup_03").addClass("slide_up_ani");
         }
         if( height >= 1700 ){
           $("#main_popup_04").addClass("slide_up_ani");
         }
         if( height >= 1700 && height <= 2300 ){
           $("#hidden_bg").addClass("fixed");
           $("#history_icon").addClass("fixed");
         }else {
           $("#hidden_bg").removeClass("fixed");
           $("#history_icon").removeClass("fixed");
         }
          log(height);
	});

  function log(str){
      $('#log').text(str);
  }
