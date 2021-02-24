//
// const searchBtn = document.querySelector('.user-nav__btn--search');
// const searchPopup = document.querySelector('.popup-search');
// const closePopup = document.querySelector('.user-nav');
//
// searchBtn.addEventListener('mousemove', () => {
//   searchPopup.classList.add('popup-search--active')
// });
//
// document.addEventListener('mouseout', () => {
//   searchPopup.classList.remove('popup-search--active')
// });










// Storage

let inStorageSupport = true;
let userNameStorage;
let emailStorage;
let messageStorage;

try {
  userNameStorage = localStorage.getItem('user-name')
  emailStorage = localStorage.getItem('user-email')
  messageStorage = localStorage.getItem('user-message')
} catch (err) {
  inStorageSupport = false;
}

// Feedback modal

const feedbackModal = document.querySelector('.modal-feedback');
const overlay = document.querySelector('.overlay');
const feedbackButton = document.querySelector('.contacts__btn');
const feedbackForm = document.querySelector('.modal-feedback__form')

const feedbackClose = feedbackModal.querySelector('.modal-feedback__close');
const emailInput = feedbackModal.querySelector('[name=user-email]');
const userNameInput = feedbackModal.querySelector('[name=feedback-name]');
const messageInput = feedbackModal.querySelector('[name=feedback-message]');


feedbackButton.addEventListener("click",(evt) => {
  feedbackModal.classList.add('modal-feedback--show')
  overlay.classList.add('overlay--show')

  if (userNameStorage) {
    userNameInput.value = userNameStorage
    emailInput.focus()
  } else  {
    userNameInput.focus()
  }
  if (emailStorage) {
    emailInput.value = emailStorage
    messageInput.focus()
  } else  {
    emailInput.focus()
  }
  if (messageStorage) {
    messageInput.value = messageInput
    userNameInput.focus()
  } else {
    userNameInput.focus()
  }
});

feedbackClose.addEventListener("click",() => {
  localStorage.setItem('user-name', userNameInput.value)
  localStorage.setItem('user-email', emailInput.value)
  localStorage.setItem('user-message', messageInput.value)

  feedbackModal.classList.remove('modal-feedback--show')
  overlay.classList.remove('overlay--show')
  feedbackModal.classList.remove('modal--error')
});

feedbackForm.addEventListener('submit', (evt) => {
  if (!userNameInput.value || !emailInput.value || !messageInput.value) {
    evt.preventDefault()
    console.log('Ошибка! Есть незаполненные поля')
    feedbackModal.classList.add('modal--error')
  }

  localStorage.removeItem('user-name')
  localStorage.removeItem('user-email')
  localStorage.removeItem('user-message')
});

window.addEventListener('keyup', (evt) => {
  if (evt.keyCode === 27) {
    if (feedbackModal.classList.contains('modal-feedback--show') && overlay.classList.contains('overlay--show')) {
      evt.preventDefault()
      feedbackModal.classList.remove('modal-feedback--show')
      overlay.classList.remove('overlay--show')
    }
  }
});


