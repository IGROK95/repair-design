document.addEventListener('DOMContentLoaded', function(event) {
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
