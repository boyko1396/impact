class ScrollNavigationHighlight {
  constructor() {
    this.navLinks = document.querySelectorAll('.js-nav a');
    this.handleScroll = this.handleScroll.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  init() {
    const pageNav = document.querySelector('.js-nav');
    if (pageNav) {
      window.addEventListener('scroll', this.handleScroll);
      this.navLinks.forEach(link => {
        link.addEventListener('click', this.handleLinkClick);
      });
      this.handleScroll();
    }
  }

  handleScroll() {
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const sections = document.querySelectorAll(`[data-target="${href}"]`);
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.5 &&
            section.getBoundingClientRect().bottom >= window.innerHeight * 0.5) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      });
    });
  }

  handleLinkClick() {
    document.body.classList.remove('is-menu-opened');
    const dropdown = document.querySelector('.header__dropdown');
    if (dropdown) {
      dropdown.classList.remove('is-show');
    }
  }
}

export default ScrollNavigationHighlight;