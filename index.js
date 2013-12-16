
/**
 * Module dependencies.
 */

var transform = require('transform-property');
var has3d = require('has-translate3d');


/**
 * Regexp to check "End with %"
 */

var percentRegexp = /%$/;


/**
 * Expose `translate`.
 */

module.exports = translate;


/**
 * Translate `el` by `(x, y)`.
 *
 * @param {Element} el
 * @param {Number|String} x
 * @param {Number|String} y 
 * @api public
 */


function translate(el, x, y){
  
  if (!percentRegexp.test(x)) x += 'px';
  if (!percentRegexp.test(y)) y += 'px';

  if (transform) {
    if (has3d) {
      el.style[transform] = 'translate3d(' + x + ', ' + y + ', 0)';
    } else {
      el.style[transform] = 'translate(' + x + ',' + y + ')';
    }
  } else {
    el.style.left = x;
    el.style.top = y;
  }
};
