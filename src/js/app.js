/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import './modules/CheckClipPathSupport.js';
import './libs/lenis.min.js';
import { LenisSetup } from './modules/LenisSetup.js';
import ScrollNavigationHighlight from './modules/ScrollNavigationHighlight.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import PopupManager from './modules/PopupManager.js';
import VenueGallery from './modules/VenueGallery.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // lenis scroll page infinite
  LenisSetup();
  // nav active anchor
  const scrollNavHighlight = new ScrollNavigationHighlight();
  scrollNavHighlight.init();
  // modal init
  new PopupManager();
  // projects card imgs
  const venueGallery = new VenueGallery();
  // header nav mobile toggle
  const headerBtnToggle = new HeaderBtnToggle();
})