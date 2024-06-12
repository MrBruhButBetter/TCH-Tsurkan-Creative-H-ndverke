function validateForm() {
    // Get input values
    const name = document.querySelector('.name');
    const email = document.querySelector('.gmail');
    const description = document.querySelector('.des');
    const message = document.getElementById('message');
    
    // Clear previous error states
    name.style.borderColor = '';
    email.style.borderColor = '';
    description.style.borderColor = '';
    message.style.display = 'none';

    // Validate inputs
    let valid = true;

    if (name.value.trim() === '') {
      name.style.borderColor = 'red';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.style.borderColor = 'red';
      valid = false;
    }

    if (description.value.trim() === '') {
      description.style.borderColor = 'red';
      valid = false;
    }

    // If all inputs are valid, show success message
    if (valid) {
      message.style.display = 'block';
    }
  }