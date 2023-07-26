import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const buttonClicked = localStorage.getItem('buttonClicked');

  const messageElement = document.querySelector('.cookie-consent');

  const buttonElement = document.querySelector('.cookie-consent__button');
  buttonElement.addEventListener('click', handleButtonClick);

  if (buttonClicked) {
    hideMessage();
  }

  function hideMessage() {
    messageElement.classList.add('hide');

    localStorage.setItem('buttonClicked', true);
  }

  function handleButtonClick() {
    hideMessage();
  }
});
