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

// Same notification code as before
function openNotifications() {
    window.location.href = './notify/notify.html';
    localStorage.setItem('unreadNotifications', 0);
    updateNotificationCounter();
}

function updateNotificationCounter() {
    const unreadCount = localStorage.getItem('unreadNotifications') || 0;
    const notificationCountElement = document.getElementById('notification-count');
    if (unreadCount > 0) {
        notificationCountElement.style.display = 'block';
        notificationCountElement.textContent = unreadCount;
        flashNotificationIcon();
    } else {
        notificationCountElement.style.display = 'none';
    }
}

function addNotification(message) {
    let unreadNotifications = parseInt(localStorage.getItem('unreadNotifications')) || 0;
    unreadNotifications += 1;
    localStorage.setItem('unreadNotifications', unreadNotifications);
    updateNotificationCounter();
    playNotificationSound();
    showToastNotification(message);
}

function flashNotificationIcon() {
    const notificationIcon = document.getElementById('notification-icon');
    if (notificationIcon) {
        notificationIcon.classList.add('flash');
        setTimeout(() => {
            notificationIcon.classList.remove('flash');
        }, 1000);
    }
}

function playNotificationSound() {
    const audio = new Audio('path/to/notification-sound.mp3');
    audio.play();
}

function showToastNotification(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    document.getElementById('toast-container').appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

window.onload = function() {
    updateNotificationCounter();
}


    //  For Menu 

  function openMenu() {
    console.log('Menu opened!');
    window.location.href = 'menu/menu.html'; // Update path based on your folder structure
}

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu');

    if (menuIcon) {
        menuIcon.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default action
            console.log('Click event triggered');
            openMenu();
        });

        // For mobile devices, handle touch events as well
        menuIcon.addEventListener('touchstart', (event) => {
            event.preventDefault(); // Prevent default touch behavior
            console.log('Touch event triggered');
            openMenu();
        });
    }
});

    