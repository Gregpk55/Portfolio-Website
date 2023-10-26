// toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scroll sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove('active');
        const linkElement = document.querySelector(`header nav a[href*=${id}]`);
if (linkElement) {
    linkElement.classList.add('active');
}

      });
      // active sections for animation on scroll
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });

  // sticky header
  const header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  // animation footer on scroll
  const footer = document.querySelector('footer');
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    footer.classList.add('show-animate');
  } else {
    footer.classList.remove('show-animate');
  }
};

// project display
function toggleVisibility(contentID, toggleID) {
  const contentElement = document.getElementById(contentID);
  const toggleIcon = document.getElementById(toggleID);

  if (!contentElement || !toggleIcon) {
      console.error("Error: Missing content or toggle element.");
      return;
  }

  if (contentElement.style.display === 'none' || contentElement.style.display === '') {
      contentElement.style.display = 'block';
      toggleIcon.classList.replace('bx-down-arrow-alt', 'bx-up-arrow-alt');
  } else {
      contentElement.style.display = 'none';
      toggleIcon.classList.replace('bx-up-arrow-alt', 'bx-down-arrow-alt');
  }
}

