// Function to toggle the sidebar open/closed
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    // Toggle the 'closed' class to open/close the sidebar
    sidebar.classList.toggle('closed');
    sidebarToggle.classList.toggle('closed'); // Toggle the 'closed' class for the button
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section's ID from the link's href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Calculate the top position of the section minus half of its height
        const sectionTop = targetSection.offsetTop;
        const sectionHeight = targetSection.offsetHeight;
        const scrollTo = sectionTop - (window.innerHeight / 2) + (sectionHeight / 2);

        // Smoothly scroll to the calculated position
        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        });
    });
});