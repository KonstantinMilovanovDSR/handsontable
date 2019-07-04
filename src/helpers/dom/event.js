import { getWindowScrollTop, getWindowScrollLeft } from './element';

/**
 * Prevent other listeners of the same event from being called.
 *
 * @param {Event} event
 */
export function stopImmediatePropagation(event) {
  event.isImmediatePropagationEnabled = false;
  event.cancelBubble = true;
}

/**
 * Check if event was stopped by `stopImmediatePropagation`.
 *
 * @param event {Event}
 * @returns {Boolean}
 */
export function isImmediatePropagationStopped(event) {
  return event.isImmediatePropagationEnabled === false;
}

/**
 * Prevent further propagation of the current event (prevent bubbling).
 *
 * @param event {Event}
 */
export function stopPropagation(event) {
  // ie8
  // http://msdn.microsoft.com/en-us/library/ie/ff975462(v=vs.85).aspx
  if (typeof event.stopPropagation === 'function') {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}

/**
 * Get horizontal coordinate of the event object relative to the whole document.
 *
 * @param {Event} event
 * @returns {Number}
 */
export function pageX(event) {
  if (event.pageX) {
    return event.pageX;
  }

  return event.clientX + getWindowScrollLeft();
}

/**
 * Get vertical coordinate of the event object relative to the whole document.
 *
 * @param {Event} event
 * @returns {Number}
 */
export function pageY(event) {
  if (event.pageY) {
    return event.pageY;
  }

  return event.clientY + getWindowScrollTop();
}

/**
 * Check if provided event was triggered by clicking the right mouse button.
 *
 * @param {Event} event DOM Event.
 * @returns {Boolean}
 */
export function isRightClick(event) {
  return event.button === 2;
}

/**
 * Check if provided event was triggered by clicking the left mouse button.
 *
 * @param {Event} event DOM Event.
 * @returns {Boolean}
 */
export function isLeftClick(event) {
  return event.button === 0;
}

let supportsPassive;

/**
 * Checks if passive listeners are supported by the browser.
 */
export function areEventListenerOptionsSupported() {
  // taken from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
  if (supportsPassive !== void 0) {
    return supportsPassive;
  }
  supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassive = true;
      }
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {
    // just ignore the error
  }

  return supportsPassive;
}
