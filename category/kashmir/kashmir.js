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

function openBook(selectedCard) {
    // Hide all iframe containers and restore the cover images
    const allCards = document.querySelectorAll('.book-card');
    allCards.forEach(card => {
        const iframeContainer = card.querySelector('.iframeContainer');
        const bookThumbnail = card.querySelector('.bookThumbnail');
        
        iframeContainer.style.display = 'none';   // Hide the iframe container
        iframeContainer.innerHTML = '';           // Clear iframe content
        bookThumbnail.style.display = 'block';    // Show the cover image again
    });

    // Hide the thumbnail image within the selected card
    const bookThumbnail = selectedCard.querySelector('.bookThumbnail');
    bookThumbnail.style.display = 'none';

    // Show the iframe container within the selected card
    const iframeContainer = selectedCard.querySelector('.iframeContainer');
    iframeContainer.style.display = 'block';

    // Get the URL from the data-url attribute
    const iframeSrc = selectedCard.getAttribute('data-url');

    // Embed the iframe in the container
    iframeContainer.innerHTML = `<iframe src="${iframeSrc}" width="100%" height="380" scrolling="no" frameborder="0" allow="clipboard-write; autoplay; fullscreen"></iframe>`;
}
