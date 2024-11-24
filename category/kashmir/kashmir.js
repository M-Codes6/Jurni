function viewPDF(pdfUrl) {
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfIframe = document.getElementById('pdf-iframe');
    const bookList = document.getElementById('book-list');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (pdfViewer && pdfIframe && bookList && loadingSpinner) {
        // Show loading spinner
        loadingSpinner.style.display = 'block';

        // Clear iframe content and start loading PDF
        pdfIframe.style.opacity = '0';
        pdfIframe.src = pdfUrl;

        // Show PDF viewer
        pdfViewer.style.display = 'block';
        bookList.style.display = 'none';

        // Wait for iframe to load
        pdfIframe.onload = () => {
            loadingSpinner.style.display = 'none'; // Hide spinner
            pdfIframe.style.opacity = '1'; // Fade in iframe
        };
    }
}

function closePDF() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfIframe = document.getElementById('pdf-iframe');
    const bookList = document.getElementById('book-list');

    if (pdfViewer && pdfIframe && bookList) {
        // Clear iframe source to free resources
        pdfIframe.src = '';
        pdfViewer.style.display = 'none';
        bookList.style.display = 'block';
    }
}
