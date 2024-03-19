// header footer 혹은 그 외 공통 요소 관련 js 작성
// jquery 로드 요청

//header 이벤트들
$(function(){
    let header = $('#header'),
        headerLogo = header.find('.logo img'),
        mainMenu = $('.gnb_wrap .gnb>li>a'),
        subMenu = $('.gnb_wrap .depth02'),
        subMenuHeight = 0,
		    headerHeight = header.height(),
        langMenu = $('.lang_wrap a');


        // header scroll,mouseenter 이벤트 효과 함수 생성
        function headerEvent(){
          header.addClass('fixed');
          mainMenu.addClass('on');
          langMenu.addClass('on');
          headerLogo.attr('src','images/main_logo.png');
        }
        // header scroll,mouseenter 이벤트 효과 함수 생성

    $(window).on('scroll', function () {
      var st = $(this).scrollTop();
      if (st > 0) {
        headerEvent();
      } else {
        header.removeClass('fixed');
        mainMenu.removeClass('on'); 
        langMenu.removeClass('on'); 
        headerLogo.attr('src','images/main_logo_white.png');
      }
    });
  
    subMenu.each(function(){
      if(subMenuHeight < $(this).height()){
        subMenuHeight = $(this).height();
      }
    });
    header.on('mouseenter', function(){
      header.stop().animate({height:headerHeight + subMenuHeight + 75 + 'px'});
      headerEvent();
    })
    .on('mouseleave',function(){
      header.stop().animate({height:headerHeight+'px'});
    })
    


    
      var lastScrollTop = 0;
      $(window).scroll(function(event){
         var st2 = $(this).scrollTop();
         if (st2 > lastScrollTop){
             // 스크롤 다운 시 실행할 코드
             $('header').slideDown(); // header를 위로 사라지게 함
         } else {
            // 스크롤 업 시 실행할 코드
            $('header').slideUp(); // header를 아래로 나타나게 함
         }
         lastScrollTop = st2;
      });

//header 이벤트들


});
