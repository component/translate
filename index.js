
/**
 * Module dependencies.
 */

var transform = require('transform-property');
var has3d = require('has-translate3d');

/**
 * Expose `translate`.
 */

module.exports = translate;

var percentEndPattern = /%$/;

/**
 * Translate `el` by `(x, y)`.
 *
 * @param {Element} el
 * @param {Number|String} x Pixel value in number of percent value
 * @param {Number|String} y 
 * @api public
 */


function translate(el, x, y){
  
  if (!percentEndPattern.test(x)) x += 'px';
  if (!percentEndPattern.test(y)) y += 'px';

  if (transform) {
    if (has3d) {
      el.style[transform] = 'translate3d(' + x + ', ' + y + ', 0)';
    } else {
      el.style[transform] = 'translate(' + x + ',' + y + ')';
    }
  } else {
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  }
};
