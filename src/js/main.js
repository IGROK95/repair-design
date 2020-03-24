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

  // Валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект
      userEmail: {
        required: true,
        email: true
      }
    }, // собщение
    errorElement: "div",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя слишком длинное"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект
    }, // собщение
    errorElement: "div",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя слишком длинное"
      },
      userPhone: "Телефон обязателен",
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required"
      // правило-объект
    }, // собщение
    errorElement: "div",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя слишком длинное"
      },
      userPhone: "Телефон обязателен",
      userQuestion: "Заполните поле"
    }
  });


  // маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});
