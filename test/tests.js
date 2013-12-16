/**
 * Module dependencies
 */

var translate = require('translate');
var transform = require('transform-property');
var assert = require('assert');

describe('translate', function(){

  beforeEach(function(){
    this.el = document.createElement('div'); 
  });

  afterEach(function(){
    this.el = null;
  });

  it('should translate by pixel value', function(){

    translate(this.el, 10, 20);
    if(this.el.style[transform]){
      assert(/10px, 20px/.test(this.el.style[transform]));
    } else {
      assert('10px' == this.el.style.left);
      assert('20px' == this.el.style.top);
    }
  });

  it('should translate by percent value', function(){

    translate(this.el, '10%', '20%');
    if(this.el.style[transform]){
      assert(/10%, 20%/.test(this.el.style[transform]));
    } else {
      assert('10%' == this.el.style.left);
      assert('20%' == this.el.style.top);
    }

  });

});
