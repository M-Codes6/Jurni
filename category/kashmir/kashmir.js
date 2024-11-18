document.addEventListener('DOMContentLoaded', function() {
    // Select all book-card elements
    const bookCards = document.querySelectorAll('.book-card');

    // Add a click event listener to each book-card
    bookCards.forEach(function(card) {
        card.addEventListener('click', function() {
            openBook(card);
        });
    });
});

function openBook(card) {
    // Hide the thumbnail image within this specific card
    const bookThumbnail = card.querySelector('.bookThumbnail');
    bookThumbnail.style.display = 'none';

    // Show the iframe container within this specific card
    const iframeContainer = card.querySelector('.iframeContainer');
    iframeContainer.style.display = 'block';

    // Get the URL from the data-url attribute
    const iframeSrc = card.getAttribute('data-url');

    // Embed the iframe in the container
    iframeContainer.innerHTML = `<iframe src="${iframeSrc}" width="100%" height="380" scrolling="no" frameborder="0" allow="clipboard-write; autoplay; fullscreen"></iframe>`;
}
