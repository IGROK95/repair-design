$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    modalDialog = $('.modal__dialog')
    closeBtn = $('.modal__close');
    scrollUp = $('.scroll__up')

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  modal.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  modalDialog.on('click', function (e) {
    e.stopPropagation();
  });

  $(document).keyup(function(event){
    if(event.which=='27'){
        $('.modal').removeClass('modal--visible');
    }
 });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      scrollUp.fadeIn();
    } else {
      scrollUp.fadeOut();
    }
  });

  scrollUp.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination')

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);

  new WOW().init();

});
