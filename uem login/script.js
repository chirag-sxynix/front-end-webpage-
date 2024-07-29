const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Email format validation function
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Password strength validation function
const isValidPassword = (password) => {
    // Example: At least 8 characters long and contain at least one number and one special character
    const re = /^(?=.[0-9])(?=.[!@#$%^&])[A-Za-z0-9!@#$%^&]{8,}$/;
    return re.test(String(password));
}

// Show error message function
const showError = (element, message) => {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    element.parentElement.appendChild(errorElement);
}

// Remove all error messages
const clearErrors = (form) => {
    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
}

// Form validation for Sign Up form
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors(this);
    
    const name = this.querySelector('input[placeholder="Name"]').value;
    const email = this.querySelector('input[placeholder="Email"]').value;
    const password = this.querySelector('input[placeholder="Password"]').value;
    let isValid = true;

    if (!name) {
        showError(this.querySelector('input[placeholder="Name"]'), 'Name is required');
        isValid = false;
    }

    if (!email || !isValidEmail(email)) {
        showError(this.querySelector('input[placeholder="Email"]'), 'Valid email is required');
        isValid = false;
    }

    if (!password || !isValidPassword(password)) {
        showError(this.querySelector('input[placeholder="Password"]'), 'Password must be at least 8 characters long and contain at least one number and one special character');
        isValid = false;
    }

    if (isValid) {
        // Submit form or perform other actions
        console.log('Sign Up Form Submitted:', { name, email, password });
    }
});

// Form validation for Sign In form
document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors(this);
    
    const email = this.querySelector('input[placeholder="Email"]').value;
    const password = this.querySelector('input[placeholder="Password"]').value;
    let isValid = true;

    if (!email || !isValidEmail(email)) {
        showError(this.querySelector('input[placeholder="Email"]'), 'Valid email is required');
        isValid = false;
    }

    if (!password) {
        showError(this.querySelector('input[placeholder="Password"]'), 'Password is required');
        isValid = false;
    }

    if (isValid) {
        // Submit form or perform other actions
        console.log('Sign In Form Submitted:', { email, password });
    }
});

// Real-time feedback for Sign Up form
document.getElementById('signUpForm').querySelector('input[placeholder="Email"]').addEventListener('input', function() {
    clearErrors(this.form);
    if (!isValidEmail(this.value)) {
        showError(this, 'Valid email is required');
    }
});

document.getElementById('signUpForm').querySelector('input[placeholder="Password"]').addEventListener('input', function() {
    clearErrors(this.form);
    if (!isValidPassword(this.value)) {
        showError(this, 'Password must be at least 8 characters long and contain at least one number and one special character');
    }
});

// Real-time feedback for Sign In form
document.getElementById('signInForm').querySelector('input[placeholder="Email"]').addEventListener('input', function() {
    clearErrors(this.form);
    if (!isValidEmail(this.value)) {
        showError(this, 'Valid email is required');
    }
});

document.getElementById('signInForm').querySelector('input[placeholder="Password"]').addEventListener('input', function() {
    clearErrors(this.form);
    if (!this.value) {
        showError(this, 'Password is required');
    }
});