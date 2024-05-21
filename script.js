let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
document.addEventListener('DOMContentLoaded', () => {
    // Select all images in the gallery
    const galleryImages = document.querySelectorAll('.gallery img');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeButton = document.getElementById('close-button');

    // Add click event to each image in the gallery
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            fullscreenImage.src = image.src;
            fullscreenContainer.style.display = 'flex';
        });
    });

    // Close the fullscreen image on clicking the close button
    closeButton.addEventListener('click', () => {
        fullscreenContainer.style.display = 'none';
    });

    // Close the fullscreen image on clicking outside the image
    fullscreenContainer.addEventListener('click', (event) => {
        if (event.target === fullscreenContainer) {
            fullscreenContainer.style.display = 'none';
        }
    });
});