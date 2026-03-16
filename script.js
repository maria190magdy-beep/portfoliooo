// ------------------------------
// Cursor Animation
// ------------------------------
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// ------------------------------
// Dark / Light Mode Toggle
// ------------------------------
const darkModeBtn = document.getElementById('darkMode');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ------------------------------
// Typing Effect in Hero Section
// ------------------------------
const typingText = document.querySelector('.typing');
const words = ["Frontend Developer", "React & JavaScript", "UI/UX Enthusiast", "Interactive Websites"];
let i = 0, j = 0, currentWord = '', isDeleting = false;

function type() {
  if (i >= words.length) i = 0;
  const fullWord = words[i];
  if (isDeleting) {
    currentWord = fullWord.substring(0, j--);
  } else {
    currentWord = fullWord.substring(0, j++);
  }
  typingText.textContent = currentWord;

  if (!isDeleting && j === fullWord.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 150);
  }
}
type();

// ------------------------------
// Particles.js Initialization
// ------------------------------
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 50 },
    "color": { "value": "#6366f1" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#6366f1", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
    "modes": { "repulse": { "distance": 100 } }
  },
  "retina_detect": true
});

// ------------------------------
// Skills Progress Animation on Scroll
// ------------------------------
const skills = document.querySelectorAll('.skill');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skill = entry.target;
      const percent = skill.getAttribute('data-skill');
      skill.style.background = `conic-gradient(#facc15 ${percent}%, #1e293b ${percent}%)`;
      skillObserver.unobserve(skill);
    }
  });
}, { threshold: 0.5 });
skills.forEach(skill => skillObserver.observe(skill));

// ------------------------------
// Project Filtering (Optional)
// ------------------------------
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-filter');
    projects.forEach(project => {
      if (category === 'all' || project.getAttribute('data-category') === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// ------------------------------
// Interactive Demo Button in Fun Section
// ------------------------------
const demoBtn = document.querySelector('.demo-btn');
demoBtn.addEventListener('mouseenter', () => {
  const code = document.getElementById('liveCode');
  code.textContent = `// Button Hovered!\nconsole.log("Animation Triggered!");`;
});
demoBtn.addEventListener('mouseleave', () => {
  const code = document.getElementById('liveCode');
  code.textContent = `// Hover over buttons to see animation`;
});

// ------------------------------
// Smooth Scroll for Nav Links
// ------------------------------
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
// auto scroll after 2 seconds
window.addEventListener("load", function () {

  setTimeout(function () {

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });

  }, 2000);

});
window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

document.querySelector("#window").scrollIntoView({
behavior:"smooth"
});

},2000);

});