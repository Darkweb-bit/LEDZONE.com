// ========== Smooth Scrolling ==========
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = link.getAttribute('href').substring(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ========== Alert on Contact Click ==========
document.querySelector('a[href="#contact"]').addEventListener('click', () => {
    alert("Thanks for reaching out! We will contact you soon.");
});
