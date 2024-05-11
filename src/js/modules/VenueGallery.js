export default class VenueGallery {
  constructor() {
    this.allVenues = document.querySelectorAll('.js-projects-card');
    this.allVenuesCards = document.querySelectorAll('.projects-list__main-media-card');
    this.venueImageWrap = document.querySelector('.projects-list__main-media');
    this.venueImageInner = document.querySelector('.projects-list__main-media-inner');
    this.mouseX = 0;
    this.mouseY = 0;
    this.init();
  }

  init() {
    this.initVenues();
    this.updateVenuePosition();
  }

  initVenues() {
    this.allVenues.forEach((link, index) => {
      link.addEventListener('mouseenter', () => { this.venueHover(index); });
      link.addEventListener('mouseleave', () => { this.venueHover(null); });
      link.addEventListener('mousemove', this.moveVenueImage.bind(this));
    });
  }

  moveVenueImage(e) {
    const { clientX: xpos, clientY: ypos } = e;
    this.mouseX = xpos;
    this.mouseY = ypos;
  }

  updateVenuePosition() {
    const easeFactor = .15;
    const deltaX = this.mouseX - parseFloat(this.venueImageWrap.style.left || 0);
    const deltaY = this.mouseY - parseFloat(this.venueImageWrap.style.top || 0);

    this.venueImageWrap.style.left = parseFloat(this.venueImageWrap.style.left || 0) + deltaX * easeFactor + 'px';
    this.venueImageWrap.style.top = parseFloat(this.venueImageWrap.style.top || 0) + deltaY * easeFactor + 'px';

    requestAnimationFrame(this.updateVenuePosition.bind(this));
  }

  venueHover(index) {
    if (index !== null) {
      this.venueImageWrap.classList.add('is-show');
      this.allVenuesCards[index].classList.add('is-show');
    } else {
      this.venueImageWrap.classList.remove('is-show');
      this.allVenuesCards.forEach(card => {
        card.classList.remove('is-show');
      });
    }
  }
}
