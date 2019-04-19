"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var StyleMaker = function StyleMaker(css, id, mute) {
  if (css) {
    if (mute === '--verbose' || mute === '-v') console.log('Initialising Style Maker', css);
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    if (id) style.id = id;
    style.type = 'text/css';

    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
    if (mute === '--verbose' || mute === '-v') console.log('Style Added');
  } else {
    console.log('Please call StylerMaker with a valid cssText argument');
  }
};

var _default = StyleMaker;
exports.default = _default;
