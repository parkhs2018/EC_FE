// 서브 네비게이션 숨김 잠금

  $(document).ready(function sub_nav_show(){
$( ".main_nav a" ).on( "click", function() {
  $('.sub_nav').toggleClass("show");
  console.log("click a");
});}); 
