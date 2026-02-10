/* Swiper 1 */
const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    spaceBetween: 70,

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

        },
        slideChange: function () {
            document.querySelector('.swiper1 .current').textContent = this.realIndex + 1;
        },
    },
});

/* Swiper 2 */
const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 0,

    navigation: {
        nextEl: '.swiper2 .swiper-button-next',
        prevEl: '.swiper2 .swiper-button-prev',
    },
});


/* class */
// 모든 long_btn 버튼에 이벤트 리스너 추가
document.querySelectorAll('.long_btn').forEach(button => {
  button.addEventListener('click', function() {
    const listItem = this.closest('li');
    const shortDiv = listItem.querySelector('div:not(.none)');
    const noneDiv = listItem.querySelector('div.none');
    
    // 짧은 div 숨기기
    shortDiv.style.opacity = '0';
    shortDiv.style.pointerEvents = 'none';
    
    // 긴 div 보이기
    noneDiv.style.opacity = '1';
    noneDiv.style.pointerEvents = 'auto';
    
    // li 너비 증가
    listItem.style.width = '620px';

    listItem.style.transition = 'width 0.5s ease'; // 전환 시간 설정
  });
});

// 모든 short_btn 버튼에 이벤트 리스너 추가
document.querySelectorAll('.short_btn').forEach(button => {
  button.addEventListener('click', function() {
    const listItem = this.closest('li');
    const shortDiv = listItem.querySelector('div:not(.none)');
    const noneDiv = listItem.querySelector('div.none');
    
    // 긴 div 숨기기
    noneDiv.style.opacity = '0';
    noneDiv.style.pointerEvents = 'none';
    
    // 짧은 div 보이기
    shortDiv.style.opacity = '1';
    shortDiv.style.pointerEvents = 'auto';
    
    // li 너비 복원
    listItem.style.width = '280px';

    listItem.style.transition = 'width 0.5s ease'; // 전환 시간 설정
  });
});
