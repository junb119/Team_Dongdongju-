// common
let $window = $(window);

// 팝업 - 송림
const popup = document.querySelector('.popup');
const input = popup.querySelector('input');
const closeBtn = popup.querySelector('button');

closeBtn.addEventListener('click', () => {
  // console.log(in5660put.checked);
  if (input.checked) {
    //쿠키생성
    setCookie('Portfolio', 'MiraeAsset', 1);
  } else {
    //쿠키삭제
    delCookie('Portfolio');
  }
  popup.classList.add('hide');
});
function setCookie(name, val, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${val};Expires=${date}`;
}
function delCookie(name) {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  document.cookie = `${name}='';Expires=${date}`;
}

function checkCookie(name) {
  let cookieArr = document.cookie.split(';');
  let visited = false;

  for (let cookie of cookieArr) {
    if (cookie.indexOf(name) > -1) {
      visited = true;
    }
  }
  if (visited) {
    popup.classList.add('hide');
  } else {
    popup.classList.remove('hide');
  }
}
checkCookie('MiraeAsset');
// --팝업 - 송림

// 헤더 - 송림

// --헤더 - 송림

// 메인영상 - 준범

// --메인영상 - 준범

// 경영철학 - 선진
// --경영철학 - 선진

// 수상이력 - 송림
$('.award_slide').bxSlider({
  pager: false,
  controls: false,
  mode: 'vertical',
  minSlides: 4,
});
// --수상이력 - 송림

// 수치자료 - 준범

const increaseNumberOST = $('.increase_number .title_content h2').offset().top;
const increaseTarget = $('.data_content .textbox .strong');
let excuted = false;

const profitData = $('.profit_data')
const profitDataOST = profitData.offset().top
const profitDataHeight = profitData.find('.profitBG').outerHeight()


console.log(profitDataOST + profitDataHeight)
$window.scroll(function () {
  let sct = $window.scrollTop();
  if (sct >= increaseNumberOST - $window.outerHeight() / 3) {
    if (!excuted) {
      increaseTarget.each(function () {
        animateInit($(this));
      });
      excuted = true;
    }
  }
  // profit_scroll 이미지 크기조절
  if (sct + $(window).outerHeight() >= profitDataOST) {
    let scrollAmt = sct+$(window).outerHeight()-profitDataOST
    
    if (scrollAmt >= profitDataHeight){
      scrollAmt = profitDataHeight
      
    }

    let leftValue = (12.5 - (scrollAmt / 938) * 12.5);
    // let rightValue = (100 / 0) * 87.5 - (87.5 / 938) * 100


    document.documentElement.style.setProperty('--clip-left',`${leftValue}%`)
    // document.documentElement.style.setProperty('--clip-right',`${rightValue}%`)
  }
  


});
function animateInit(target) {
  // 수치자료 증가 함수
  let targetData = target;
  let targetNumber = targetData.attr('data-numeric');

  $({ num: 0 })
    .stop()
    .animate(
      { num: targetNumber },
      {
        duration: 1000,
        progress: function () {
          let now = Math.floor(this.num);
          targetData.text(now);
        },
      }
    );
}

// --수치자료 - 준범

// 사회공헌 - 선진
// --사회공헌 - 선진

// 뉴스 - 준범
// --뉴스 - 준범

// 푸터 - 선진
// --푸터 - 선진
// award 슬라이드 이벤트
