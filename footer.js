// script.js

// Define footer items with local URLs
const footerItems = [
    { id: "choir", icon: "fas fa-music", label: "Choir", url: "choir.html" },
    { id: "ministration", icon: "fas fa-praying-hands", label: "Ministration", url: "ministration.html" },
    { id: "testimony", icon: "fas fa-comment-dots", label: "Testimony", url: "testimony.html" },
    { id: "bible-reading", icon: "fas fa-book", label: "Bible Reading", url: "bible-reading.html" },
    { id: "videos", icon: "fas fa-video", label: "Videos", url: "videos.html" },
];

// Get the footer content container
const footerContent = document.getElementById('footer-content');

// Function to create and append footer items
function createFooter() {
    footerItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col footer-item';
        col.innerHTML = `
            <a href="${item.url}" class="footer-icon">
                <i class="${item.icon} fa-2x"></i>
                <p>${item.label}</p>
            </a>
        `;
        footerContent.appendChild(col);
    });
}

// Call the function to create the footer
createFooter();
