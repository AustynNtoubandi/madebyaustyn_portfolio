// Logo data
const logos = [
    {
        title: "Ayil's Event Logo",
        image: "./images/ayil.png",
        description: "Modern logo design made for a client in France"
    },
    {
        title: "Game Dev Logo",
        image: "./images/MELTDOWNBLOCKS.png",
        description: "Unique logo for a game dev studio"
    },
    {
        title: "LM-Solutions Logo",
        image: "./images/lmsolutions.png",
        description: "I made this logo and mockup for a roof coating company"
    },
    {
        title: "Game Dev Logo",
        image: "./images/volcanobyte.png",
        description: "Unique logo for a game dev studio"
    },
    {
        title: "Le Bras Fort Logo",
        image: "./images/lbf.png",
        description: "I made this logo and mockup for a starting clothing brand"
    },
    {
        title: "Made By Austyn Logo",
        image: "./images/madebyaustyn.png",
        description: "This is my own logo"
    }
];

// Mobile menu functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Populate logo grid
const logoGrid = document.getElementById('logo-grid');

logos.forEach(logo => {
    const logoCard = document.createElement('div');
    logoCard.className = 'logo-card';
    
    logoCard.innerHTML = `
        <img src="${logo.image}" alt="${logo.title}">
        <div class="logo-info">
            <h3>${logo.title}</h3>
            <p>${logo.description}</p>
        </div>
    `;
    
    logoGrid.appendChild(logoCard);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});