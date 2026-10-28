// Section highlighting is optional; all content and links work without JavaScript.
const navigation = document.querySelectorAll('.topbar nav a');
if ('IntersectionObserver' in window) {
  const visibleSections = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => visibleSections.set(entry.target.id, entry.isIntersecting));
    const activeSection = [...visibleSections].find(([, visible]) => visible)?.[0];
    navigation.forEach(link => {
      if (link.hash === `#${activeSection}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-10% 0px -40% 0px' });
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
