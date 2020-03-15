/*document.addEventListener('DOMContentLoaded', function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });


  closeBtn.addEventListener('click', switchModal);


  document.body.addEventListener('keyup', function (e) {
    const key = e.keyCode;

    if (key == 27) {
        document.querySelector('.modal.modal--visible').classList.remove('modal--visible');
    };
}, false);


  modal.addEventListener('click', function() {
    document.querySelector('.modal.modal--visible').classList.remove('modal--visible');
    this.classList.remove('modal--visible');
});
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    modalDialog = $('.modal__dialog')
    closeBtn = $('.modal__close');

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

});
