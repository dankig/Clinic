$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		slidesNavigation: true,
		//кнопки навигации по слайдам
		controlArrows: false,
	});
});

$(function(){
    var flag = 0;
    $('.menu-icon').on('click', function(e){
      e.preventDefault();
      if(flag == 0 ){
        $('.menu-icon').addClass("active");
        $('.imenu').addClass('visible'); 
        flag = 1;
      }else {
        $('.menu-icon').removeClass("active");
        $('.imenu').removeClass('visible');
        flag = 0;
      }
   });
});