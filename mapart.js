document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  const contentSections = document.querySelectorAll('.content-section');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(i => i.classList.remove('active'));
      contentSections.forEach(section => section.classList.remove('active'));

      this.classList.add('active');

      const target = this.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });
});