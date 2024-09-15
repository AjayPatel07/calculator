function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('open');
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('side-menu');
    const button = document.querySelector('.menu-button');

    // Check if the click is outside the menu and the menu button
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('open');
    }
});

document.getElementById('kapas').addEventListener('input', calculateCostOfCotton);
document.getElementById('expenses').addEventListener('input', calculateCostOfCotton);
document.getElementById('cotton-seed').addEventListener('input', calculateCostOfCotton);
document.getElementById('out-turn').addEventListener('input', calculateCostOfCotton);
document.getElementById('shortage').addEventListener('input', calculateCostOfCotton);

function calculateCostOfCotton() {
    const kapas = parseFloat(document.getElementById('kapas').value) || 0;
    const expenses = parseFloat(document.getElementById('expenses').value) || 0;
    const cottonSeed = parseFloat(document.getElementById('cotton-seed').value) || 0;
    const outTurn = parseFloat(document.getElementById('out-turn').value) || 0;
    const shortage = parseFloat(document.getElementById('shortage').value) || 0;

    const gasdiPaki = 355.6;
    const kE = kapas + expenses;
    const kapasiya = (100 - outTurn) - shortage;
    const kgKapasiya = kapasiya / 100 * 20;
    const kapasiyaTwenty = (kgKapasiya / 20) * cottonSeed;
    const ruh = kE - kapasiyaTwenty;
    const fixRuh = outTurn / 100 * 20;
    const ruhTwenty = ruh / fixRuh;
    const ans = ruhTwenty * gasdiPaki;

    const costOfCotton = ans;

    if (outTurn - shortage === 0) {
        document.getElementById('cost-of-cotton').innerText = 'Infinity';
        return;
    }
    document.getElementById('cost-of-cotton').innerText = costOfCotton.toFixed();
}

document.getElementById('cotton-rate').addEventListener('input', calculateKapas);
document.getElementById('expenses-reverse').addEventListener('input', calculateKapas);
document.getElementById('cotton-seed-reverse').addEventListener('input', calculateKapas);
document.getElementById('out-turn-reverse').addEventListener('input', calculateKapas);
document.getElementById('shortage-reverse').addEventListener('input', calculateKapas);

function calculateKapas() {
    const cottonRate = parseFloat(document.getElementById('cotton-rate').value) || 0;
    const expenses = parseFloat(document.getElementById('expenses-reverse').value) || 0;
    const cottonSeed = parseFloat(document.getElementById('cotton-seed-reverse').value) || 0;
    const outTurn = parseFloat(document.getElementById('out-turn-reverse').value) || 0;
    const shortage = parseFloat(document.getElementById('shortage-reverse').value) || 0;

    if (outTurn - shortage === 0) {
        document.getElementById('kapas-result').innerText = 'Infinity';
        return;
    }

    const a = cottonRate / 355.6;
    const b = (0.2 * outTurn) * a;
    const k = (100 - outTurn) - shortage;
    const m = k * 0.2;
    const l = m * (cottonSeed / 20);
    const j = l + b - expenses;

    document.getElementById('kapas-result').innerText = j.toFixed(2);
}

function showTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let tab of tabs) {
        tab.classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');

    const buttons = document.getElementsByClassName('tab-button');
    for (let button of buttons) {
        button.classList.remove('active');
    }
    if (tabName === 'forward') {
        buttons[0].classList.add('active');
    } else {
        buttons[1].classList.add('active');
    }
}

//....................................login............................................
// Store user datalet users = [];
// Function to toggle visibility of the forms and hide the buttons
function toggleForm(formType) {
    const signInForm = document.getElementById('sign-in-form');
    const loginForm = document.getElementById('log-in-form');
    const signInBtn = document.getElementById('signInBtn');
    const loginBtn = document.getElementById('loginBtn');

    // Hide both buttons
    signInBtn.style.display = 'none';
    loginBtn.style.display = 'none';

    // Show the form based on the button clicked
    if (formType === 'signIn') {
        signInForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else if (formType === 'login') {
        loginForm.style.display = 'block';
        signInForm.style.display = 'none';
    }
}

// Event listeners for the buttons
document.getElementById('signInBtn').addEventListener('click', function() {
    toggleForm('signIn');  // Show the Sign In form
});

document.getElementById('loginBtn').addEventListener('click', function() {
    toggleForm('login');  // Show the Log In form
});

// Sign Up form submission handling
document.getElementById('signInFormElement').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add form submission handling here, like sign-up logic
    alert('Sign Up Successful!');
    location.reload(); // Refresh the page after form submission
});

// Log In form submission handling
document.getElementById('loginFormElement').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add form submission handling here, like log-in logic
    alert('Login Successful!');
    location.reload(); // Refresh the page after form submission
});
