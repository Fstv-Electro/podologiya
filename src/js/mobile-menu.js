(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-open-btn'),
    closeModalBtn: document.querySelector('.js-close-btn'),
    modal: document.querySelector('[data-menu]'),
    modalList: document.querySelector('.header-nav__list--mobile'),
  };

  refs.openModalBtn.addEventListener('click', toggleClass);
  refs.closeModalBtn.addEventListener('click', toggleClass);
  refs.modalList.addEventListener('click', toggleClass);

  function toggleClass() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
