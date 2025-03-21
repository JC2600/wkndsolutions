// Select Elements
const popup = document.getElementById('popupForm');
const openButtons = document.querySelectorAll('.open-popup'); // Fixed selector
const closeButton = document.getElementById('closePopup');
const contactForm = document.getElementById('contactForm');

// Ensure pop-up starts hidden
popup.style.display = 'none'; // This guarantees it's hidden on load

// Show Pop-up on Button Click
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    });
});

// Close Pop-up
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close Pop-up When Clicking Outside
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log('Form Data Submitted:', formData);

    alert('Form submitted successfully!');
    contactForm.reset();
    popup.style.display = 'none';
});
