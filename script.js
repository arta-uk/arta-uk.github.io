document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert(`Thank you! We'll be in touch at ${email}`);
  this.reset();
});

function filterProducts(brand) {
  const buttons = document.querySelectorAll('.filter-tabs button');
  const cards = document.querySelectorAll('.product-card');

  buttons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filter-tabs button[onclick*="${brand}"]`).classList.add('active');

  cards.forEach(card => {
    if (brand === 'all' || card.dataset.brand === brand) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
};


function toggleForm(type) {
  const signInTab = document.getElementById('signInTab');
  const registerTab = document.getElementById('registerTab');
  const signInForm = document.getElementById('signInForm');
  const registerForm = document.getElementById('registerForm');
  const messageBox = document.getElementById('messageBox'); // Optional if using visible error div

  if (type === 'signIn') {
    signInTab.classList.add('active');
    registerTab.classList.remove('active');
    signInForm.classList.add('active');
    registerForm.classList.remove('active');
    if (messageBox) {
      messageBox.textContent = "Incorrect username or password.";
      messageBox.style.display = "block";
      messageBox.style.color = "red";
    }
  } else {
    registerTab.classList.add('active');
    signInTab.classList.remove('active');
    registerForm.classList.add('active');
    signInForm.classList.remove('active');
    if (messageBox) messageBox.style.display = "none"; // hide old messages
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const registerButton = document.getElementById('registerButton');
  const registerMessage = document.getElementById('registerMessage');

  if (registerButton && registerMessage) {
    registerButton.onclick = function () {
      registerMessage.style.display = 'block';
    };
  }
});
