// Get all modal buttons
const modalBtns = document.querySelectorAll('.popup-open-btn');

// Get all modals
const modals = document.querySelectorAll('.modal');

// Get all close buttons
const closeBtns = document.querySelectorAll('.popup-close-btn');

// Function to open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Add event listeners to modal buttons
modalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        openModal(btn.getAttribute('data-modal'));
    });
});

// Add event listeners to close buttons
closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        closeModal(btn.parentNode.parentNode);
    });
});

// Add event listener to window to close modal when clicked outside
window.addEventListener('click', (e) => {
    modals.forEach((modal) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});