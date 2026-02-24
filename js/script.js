
//.open_btn 클릭시 실행
$(".open_btn").click(function(){
    //#menu 요소의 css 변경
    $("#menu").css({
        //메뉴를 왼쪽으로 50vw 이동하여 화면 밖으로 숨기기
        'margin-left':'-50vw',
        //margin-left 변화가 0.5초 동안 부드럽게 적용되도록 설정
        'transition':'margin-left 0.5s ease'
    })
});
//.close_btn 버튼 클릭시 실행
$('.close_btn, #menu ul li').click(function(){
    //#menu 요소의 css 변경
    $("#menu").css({
        'margin-left':'0vw',
        //margin-left 변화가 0.5초 동안 부드럽게 적용되도록 설정
        'transition':'margin-left 0.5s ease'
    })
});


/* Swiper 1 */
const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    spaceBetween: 70,

    breakpoints: {
    768: { slidesPerView: 3.5 },
    1260: { slidesPerView: 4 } // 데스크탑에서 이미지와 같은 비율
  },

    pagination: {
        el: '.swiper1 .swiper-pagination',
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.swiper1 .swiper-button-next',
        prevEl: '.swiper1 .swiper-button-prev',
    },

    on: {
        init: function () {
            // snapGrid.length는 화면에 보여지는 단위(페이지)의 총 개수입니다.
            document.querySelector('.swiper1 .total').textContent = this.snapGrid.length;
        },
        slideChange: function () {
            // 현재 페이지 번호 업데이트
            document.querySelector('.swiper1 .current').textContent = this.snapIndex + 1;
        },
        breakpoint: function () {
            // 반응형 브라우저 크기가 변할 때마다 페이지 수가 달라지므로 다시 계산
            document.querySelector('.swiper1 .total').textContent = this.snapGrid.length;
        }
    },
});

/* Swiper 2 */
const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
    768: { slidesPerView: 3.5 },
    1260: { slidesPerView: 4 } // 데스크탑에서 이미지와 같은 비율
  },


    pagination: {
        el: '.swiper2 .swiper-pagination',
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.swiper2 .swiper-button-next',
        prevEl: '.swiper2 .swiper-button-prev',
    },

    
});


/* class */
// 모든 버튼 이벤트 통합 처리
document.querySelectorAll('.long_btn, .short_btn').forEach(button => {
  button.addEventListener('click', function() {

    const listItem = this.closest('li');
    const isOpen = this.classList.contains('long_btn');

    const shortDiv = listItem.querySelector('div:not(.exp)');
    const longDiv  = listItem.querySelector('.exp');

    // 클래스 토글
    if (isOpen) {
      listItem.classList.add('active');
      shortDiv.style.opacity = '0';
      shortDiv.style.pointerEvents = 'none';
      longDiv.style.opacity = '1';
      longDiv.style.pointerEvents = 'auto';
    } else {
      listItem.classList.remove('active');
      longDiv.style.opacity = '0';
      longDiv.style.pointerEvents = 'none';
      shortDiv.style.opacity = '1';
      shortDiv.style.pointerEvents = 'auto';
    }

  });
});

