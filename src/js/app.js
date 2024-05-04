/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import StickyHeader from './modules/StickyHeader.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import PopupManager from './modules/PopupManager.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

// modal init
new PopupManager();

document.addEventListener('DOMContentLoaded', function() {
  // header sticky
  new StickyHeader('.js-header-sticky', 'is-sticky');
  // header nav mobile toggle
  const headerBtnToggle = new HeaderBtnToggle();
});