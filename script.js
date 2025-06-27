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

    if (type === 'signIn') {
      signInTab.classList.add('active');
      registerTab.classList.remove('active');
      signInForm.classList.add('active');
      registerForm.classList.remove('active');
    } else {
      registerTab.classList.add('active');
      signInTab.classList.remove('active');
      registerForm.classList.add('active');
      signInForm.classList.remove('active');
    }
  };