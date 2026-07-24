// Mobile nav toggle + active link highlighting
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Highlight the current page in the nav
  var here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (link) {
    var linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === here) {
      link.classList.add('active');
    }
  });
});
