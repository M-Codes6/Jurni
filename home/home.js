// Books stored in categories
const books = [
    { title: "Human Rights Crisis in Kashmir", path: "../category/kashmir/kashmir.html" },
    { title: "Kashmir Biography", path: "../category/kashmir/kashmir.html" },
    { title: "Scattered Souls", path: "../category/kashmir/kashmir.html" },
    { title: "The Arts of Kashmir", path: "../category/kashmir/kashmir.html" },
    { title: "Archeological Remains in Kashmir", path: "../category/kashmir/kashmir.html" },
    { title: "1996 Kashmir", path: "../category/kashmir/kashmir.html" },
    { title: "Until My freedom has Come", path: "../category/kashmir/kashmir.html" },


];

// Function to search books and display suggestions
function searchBooks() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (searchTerm) {
        // Filter books based on the search term
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm)
        );

        // Display filtered books
        filteredBooks.forEach(book => {
            const bookItem = document.createElement("div");
            const bookLink = document.createElement("a");
            bookLink.href = book.path;  // Set the path to the book's page
            bookLink.textContent = book.title;  // Display the book title
            bookLink.classList.add("book-list");

            bookItem.appendChild(bookLink);  // Append the link to the book item

            resultsContainer.appendChild(bookItem); // Append the book item to results
        });

        // Display "No results found" if no books match the search
        if (filteredBooks.length === 0) {
            const noResults = document.createElement("div");
            noResults.textContent = "No results found";
            noResults.classList.add("no-results");
            resultsContainer.appendChild(noResults);
        }
    }
}

// Add event listener for pressing "Enter" to trigger search
document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchBooks();
    }
});




// Notification


// Function to open notification page and reset the count
function openNotifications() {
    // Redirect to the notifications page
    window.location.href = './notify/notify.html';

    // Reset the notification count when opened
    localStorage.setItem('unreadNotifications', 0);
    updateNotificationCounter();
}

// Function to update the notification counter on the icon
function updateNotificationCounter() {
    const unreadCount = localStorage.getItem('unreadNotifications') || 0;
    const notificationCountElement = document.getElementById('notification-count');
    if (unreadCount > 0) {
        notificationCountElement.style.display = 'block';
        notificationCountElement.textContent = unreadCount;
    } else {
        notificationCountElement.style.display = 'none';
    }
}

// Simulate a new notification being added
function addNotification(message) {
    let unreadNotifications = parseInt(localStorage.getItem('unreadNotifications')) || 0;
    unreadNotifications += 1; // Increment the count
    localStorage.setItem('unreadNotifications', unreadNotifications);
    updateNotificationCounter();
}

// Initialize the notification counter when the page loads
window.onload = function() {
    updateNotificationCounter();
}