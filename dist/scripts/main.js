"use strict";

var _aos = _interopRequireDefault(require("aos"));
var _jquery = _interopRequireDefault(require("jquery"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

(0, _jquery.default)(document).ready(function () {
  _aos.default.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
(0, _jquery.default)("a.smooth-scroll").click(function (event) {
  // On-page links
  if (window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && window.location.hostname === this.hostname) {
    // Figure out element to scroll to
    var target = (0, _jquery.default)(this.hash);
    target = target.length ? target : (0, _jquery.default)("[name=" + this.hash.slice(1) + "]");
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      (0, _jquery.default)("html, body").animate({
        scrollTop: target.offset().top
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = (0, _jquery.default)(target);
        $target.focus();
        if ($target.is(":focus")) {
          // Checking if the target was focused
          return false;
        } else {
          $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        }
      });
    }
  }
});
//# sourceMappingURL=main.js.map