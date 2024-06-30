$(document).ready(function () {

  /*====================================== Mobile Menu ======================================*/

  $(".dr-mob-hemburger-menu").click(function () {
      $("header").toggleClass("sidebar-menu-open");

  })

  /*====================================== Header Up & Down ======================================*/

  //  scroll-top header reagain size
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();
  $(window).scroll(function (event) {
      didScroll = true;
  });

  setInterval(function () {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 50);

  function hasScrolled() {
      var st = $(this).scrollTop();
      if (Math.abs(lastScrollTop - st) <= delta)
          return;

      if (st > lastScrollTop && st > navbarHeight) {
          // Scroll Down
          $('header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if (st + $(window).height() < $(document).height()) {
              $('header').removeClass('nav-up').addClass('nav-down');
          }
      }
      lastScrollTop = st;
  }

  const swiper = new Swiper('.swiper', {
      // Optional parameters
      spaceBetween: 30,
      direction: 'horizontal',
      clickable: true,
      speed: 3000,
      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });

  // ===================================== Form Validation =====================================

  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  firstNameInput.addEventListener('change', validateFirstName);
  lastNameInput.addEventListener('change', validateLastName);
  emailInput.addEventListener('change', validateEmail);
  phoneInput.addEventListener('change', validatePhone);
  document.getElementById('myForm').addEventListener('submit', function (event) {
      if (!validateForm()) {
          event.preventDefault();
      }
  });

  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

  function validateFirstName() {
      const firstName = firstNameInput.value.trim();
      if (firstName === "") {
          firstNameError.textContent = "First name is required.";
          firstNameInput.classList.add('invalid-field');
          return false;
      } else {
          firstNameError.textContent = "";
          firstNameInput.classList.remove('invalid-field');
          return true;
      }
  }

  function validateLastName() {
      const lastName = lastNameInput.value.trim();
      if (lastName === "") {
          lastNameError.textContent = "Last name is required.";
          lastNameInput.classList.add('invalid-field');
          return false;
      } else {
          lastNameError.textContent = "";
          lastNameInput.classList.remove('invalid-field');
          return true;
      }
  }

  function validateEmail() {
      const email = emailInput.value.trim();
      if (email === "") {
          emailError.textContent = "Email is required.";
          emailInput.classList.add('invalid-field');
          return false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
          emailError.textContent = "Email is invalid.";
          emailInput.classList.add('invalid-field');
          return false;
      } else {
          emailError.textContent = "";
          emailInput.classList.remove('invalid-field');
          return true;
      }
  }

  function validatePhone() {
      const phone = phoneInput.value.trim();
      if (phone === "") {
          phoneError.textContent = "Phone is required.";
          phoneInput.classList.add('invalid-field');
          return false;
      } else if (!/^\d{10}$/.test(phone)) {
          phoneError.textContent = "Phone is invalid.";
          phoneInput.classList.add('invalid-field');
          return false;
      } else {
          phoneError.textContent = "";
          phoneInput.classList.remove('invalid-field');
          return true;
      }
  }

  function validateForm() {
      let isValid = true;
      if (!validateFirstName()) isValid = false;
      if (!validateLastName()) isValid = false;
      if (!validateEmail()) isValid = false;
      if (!validatePhone()) isValid = false;
      return isValid;
  }
});
