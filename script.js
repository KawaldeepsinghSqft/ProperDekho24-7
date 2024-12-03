// Add this script at the end of your HTML or in a separate JS file
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  

  // Get all clickable elements
const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

// Function to show the modal
const showModal = () => {
  modal.classList.add("show");
};

// Function to hide the modal
const hideModal = () => {
  modal.classList.remove("show");
};

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    showModal();
  });
});

// Add event listeners to links
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showModal();
  });
});

// Close modal when "Close" button is clicked
closeModal.addEventListener("click", hideModal);

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

// JavaScript for Modal functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("close-modal");
  
    // Close Modal when 'Close' button is clicked
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Optional: Close Modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Add event listener to WhatsApp button (if any custom behavior is required)
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    whatsappBtn.addEventListener("click", function () {
      // Ensure the link redirects as intended
      window.open(whatsappBtn.getAttribute("href"), "_blank");
    });
  });
  