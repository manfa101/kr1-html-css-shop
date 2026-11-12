// Минимальная логика модального окна <dialog>.
// Закрытие по кнопке «×» работает без JS (form method="dialog").

document.querySelectorAll('[data-modal-open]').forEach(function (button) {
  button.addEventListener('click', function () {
    var modal = document.getElementById(button.dataset.modalOpen);
    if (modal) {
      modal.showModal();
    }
  });
});

// Закрытие по клику на затемнённый фон
document.querySelectorAll('dialog.modal').forEach(function (modal) {
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.close();
    }
  });
});
