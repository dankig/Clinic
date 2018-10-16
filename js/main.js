$(document).ready(function() {
	$('#fullpage').fullpage({
    //options here
    anchors:['section0','section1','section2','section3'],
    //menu:'#menu',
		autoScrolling: true,
		scrollHorizontally: true,
		navigation: true,
    slidesNavigation: true,
    //loopHorizontal: true,
		//кнопки навигации по слайдам
    controlArrows: false,
    //scrollOverflow: true,
	});
});

var flag = 0;
var active = 'imenu';
$(function(){
    
    $('#c-menu').on('click', function(e){
      e.preventDefault();
      if(flag == 0 ){
        $('.menu-icon').addClass("active");
        $('.imenu').addClass('visible');
        $('.imenu').css({"display": "block", 
                          "position": "absolute",
                          "left" : "0px"  
        });
        $('#hov').text('ЗАКРЫТЬ МЕНЮ');
        flag = 1;
      }
      else {
        $('.menu-icon').removeClass("active");
        $('.imenu').removeClass('visible');
        $('.imenu').css({"display": "none"});
        $('#hov').text('МЕНЮ');
        flag = 0;
      }
    });
});

var active = 'imenu';
        $(document).ready(function(){
            $('.ili').click(function(e){
              $('.menu-icon').removeClass("active");
              $('.imenu').removeClass('visible');
              $('.imenu').css({"display": "none"});
              $('#hov').text('МЕНЮ');
              flag = 0;   
            })
        })