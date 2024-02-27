"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
require("./css/main.css");
require("./css/bootstrap.min.css");
require("./js/core/jquery.3.2.1.min.js");
require("./js/core/popper.min.js");
require("./js/aos.js");
require("./scripts/main.js");
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _Hearder = _interopRequireDefault(require("./components/Hearder"));
var _About = _interopRequireDefault(require("./components/page-contents/About"));
var _Contact = _interopRequireDefault(require("./components/page-contents/Contact"));
var _Education = _interopRequireDefault(require("./components/page-contents/Education"));
var _Experience = _interopRequireDefault(require("./components/page-contents/Experience"));
var _Portfolio = _interopRequireDefault(require("./components/page-contents/Portfolio"));
var _Profil = _interopRequireDefault(require("./components/page-contents/Profil"));
var _Reference = _interopRequireDefault(require("./components/page-contents/Reference"));
var _Skill = _interopRequireDefault(require("./components/page-contents/Skill"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//import "./css/aos.css";

/* js import */

//import "./js/core/bootstrap.min.js";
//import "./js/now-ui-kit.js";

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App",
    id: "top"
  }, /*#__PURE__*/React.createElement(_Hearder.default, null), /*#__PURE__*/React.createElement("div", {
    class: "page-content"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Profil.default, null), /*#__PURE__*/React.createElement(_About.default, null), /*#__PURE__*/React.createElement(_Skill.default, null), /*#__PURE__*/React.createElement(_Portfolio.default, null), /*#__PURE__*/React.createElement(_Experience.default, null), /*#__PURE__*/React.createElement(_Education.default, null), /*#__PURE__*/React.createElement(_Reference.default, null), /*#__PURE__*/React.createElement(_Contact.default, null))), /*#__PURE__*/React.createElement(_Footer.default, null));
}
var _default = exports.default = App;
//# sourceMappingURL=App.js.map