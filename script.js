// Animating the navigation items
document.addEventListener("DOMContentLoaded", function() {
    anime({
      targets: 'nav h1',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: 300
    });
  
    anime({
      targets: 'nav ul li',
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: anime.stagger(200, {start: 500})
    });
  
    // Additional animations
    
  
    anime({
      targets: 'nav ul li',
      scale: [0, 1],
      duration: 1000,
      delay: anime.stagger(100, {start: 2000}),
      easing: 'easeInOutQuad'
    });
  
    anime({
      targets: 'nav ul li',
      color: '#FF5733',
      duration: 1000,
      delay: anime.stagger(100, {start: 3000}),
      direction: 'alternate',
      loop: true
    });
  });
// Animating the navigation items on hover
document.addEventListener("DOMContentLoaded", function() {
    // Hover animation for the navigation items
    anime({
      targets: 'nav ul li',
      scale: [1, 1.1],
      duration: 200,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      delay: anime.stagger(100)
    });
  });
    