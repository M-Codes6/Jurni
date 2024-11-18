

function openBook() {
    // Hide the image
    document.getElementById('bookThumbnail').style.display = 'none';
    
    // Show the iframe container and load the external file
    var iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.style.display = 'block';
    
    // Load the iframe content from the external file
    fetch('iframe-content.html')
        .then(response => response.text())
        .then(html => {
            iframeContainer.innerHTML = html; // Inject the iframe HTML into the div
        })
        .catch(error => {
            console.error('Error loading iframe:', error);
        });
}
