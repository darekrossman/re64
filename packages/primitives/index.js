"use strict";

exports.__esModule = true;
exports.Heading = exports.Text = exports.Button = exports.Input = exports.Flex = exports.Box = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var Box =
/*#__PURE__*/
(0, _reactEmotion.default)("div", {
  target: "eulnskz0"
})(_styledSystem.space, "\n  ", _styledSystem.width, "\n  ", _styledSystem.fontSize, "\n  ", _styledSystem.color, "\n  ", _styledSystem.flex, "\n  ", _styledSystem.justifySelf, "\n  ", _styledSystem.alignSelf, "\n  ", _styledSystem.display, "\n  ", _styledSystem.maxWidth, "\n  ", _styledSystem.minWidth, "\n  ", _styledSystem.height, "\n  ", _styledSystem.maxHeight, "\n  ", _styledSystem.minHeight, "\n  ", _styledSystem.size, "\n  ", _styledSystem.ratio, "\n  ", _styledSystem.position, "\n  ", _styledSystem.borders, "\n  ", _styledSystem.borderColor, "\n  ", _styledSystem.borderRadius);
exports.Box = Box;
var Flex =
/*#__PURE__*/
(0, _reactEmotion.default)("div", {
  target: "eulnskz1"
})(_styledSystem.space, "\n  ", _styledSystem.width, "\n  ", _styledSystem.fontSize, "\n  ", _styledSystem.color, "\n  ", _styledSystem.alignItems, "\n  ", _styledSystem.alignContent, "\n  ", _styledSystem.justifyContent, "\n  ", _styledSystem.flexWrap, "\n  ", _styledSystem.flexBasis, "\n  ", _styledSystem.flexDirection, "\n  ", _styledSystem.flex, "\n  ", _styledSystem.justifySelf, "\n  ", _styledSystem.alignSelf, "\n  ", _styledSystem.display, "\n  ", _styledSystem.maxWidth, "\n  ", _styledSystem.minWidth, "\n  ", _styledSystem.height, "\n  ", _styledSystem.maxHeight, "\n  ", _styledSystem.minHeight, "\n  ", _styledSystem.size, "\n  ", _styledSystem.ratio, "\n  ", _styledSystem.position, "\n  ", _styledSystem.borders, "\n  ", _styledSystem.borderColor, "\n  ", _styledSystem.borderRadius);
exports.Flex = Flex;
Flex.defaultProps = {
  display: "flex"
};
var Input =
/*#__PURE__*/
(0, _reactEmotion.default)("input", {
  target: "eulnskz2"
})("appearance:none;", _styledSystem.space, "\n  ", _styledSystem.width, "\n  ", _styledSystem.fontSize, "\n  ", _styledSystem.color, "\n  ", _styledSystem.flex, "\n  ", _styledSystem.justifySelf, "\n  ", _styledSystem.alignSelf, "\n  ", _styledSystem.display, "\n  ", _styledSystem.maxWidth, "\n  ", _styledSystem.minWidth, "\n  ", _styledSystem.height, "\n  ", _styledSystem.maxHeight, "\n  ", _styledSystem.minHeight, "\n  ", _styledSystem.size, "\n  ", _styledSystem.ratio, "\n  ", _styledSystem.position, "\n  ", _styledSystem.borders, "\n  ", _styledSystem.borderColor, "\n  ", _styledSystem.borderRadius);
exports.Input = Input;
Input.defaultProps = {
  border: 0,
  p: 0,
  m: 0,
  minWidth: 0,
  fontSize: '1rem',
  fontFamily: 'inherit'
};
var Button =
/*#__PURE__*/
(0, _reactEmotion.default)("button", {
  target: "eulnskz3"
})("appearance:none;", _styledSystem.space, "\n  ", _styledSystem.width, "\n  ", _styledSystem.fontSize, "\n  ", _styledSystem.color, "\n  ", _styledSystem.flex, "\n  ", _styledSystem.justifySelf, "\n  ", _styledSystem.alignSelf, "\n  ", _styledSystem.display, "\n  ", _styledSystem.maxWidth, "\n  ", _styledSystem.minWidth, "\n  ", _styledSystem.height, "\n  ", _styledSystem.maxHeight, "\n  ", _styledSystem.minHeight, "\n  ", _styledSystem.size, "\n  ", _styledSystem.ratio, "\n  ", _styledSystem.fontFamily, "\n  ", _styledSystem.textAlign, "\n  ", _styledSystem.lineHeight, "\n  ", _styledSystem.fontWeight, "\n  ", _styledSystem.letterSpacing, "\n  ", _styledSystem.position, "\n  ", _styledSystem.borders, "\n  ", _styledSystem.borderColor, "\n  ", _styledSystem.borderRadius);
exports.Button = Button;
Button.defaultProps = {
  display: 'inline-block',
  bg: 'transparent',
  height: 40,
  px: 3,
  fontSize: 1,
  fontWeight: "bold",
  border: 0
};
var Text =
/*#__PURE__*/
(0, _reactEmotion.default)("p", {
  target: "eulnskz4"
})(_styledSystem.space, "\n  ", _styledSystem.width, "\n  ", _styledSystem.fontSize, "\n  ", _styledSystem.color, "\n  ", _styledSystem.flex, "\n  ", _styledSystem.justifySelf, "\n  ", _styledSystem.alignSelf, "\n  ", _styledSystem.display, "\n  ", _styledSystem.maxWidth, "\n  ", _styledSystem.minWidth, "\n  ", _styledSystem.height, "\n  ", _styledSystem.maxHeight, "\n  ", _styledSystem.minHeight, "\n  ", _styledSystem.size, "\n  ", _styledSystem.ratio, "\n  ", _styledSystem.fontFamily, "\n  ", _styledSystem.textAlign, "\n  ", _styledSystem.lineHeight, "\n  ", _styledSystem.fontWeight, "\n  ", _styledSystem.letterSpacing, "\n  ", _styledSystem.position, "\n  ", _styledSystem.borders, "\n  ", _styledSystem.borderColor, "\n  ", _styledSystem.borderRadius, "\n  ", (0, _styledSystem.responsiveStyle)({
  prop: "fontStyle",
  cssProperty: "fontStyle"
}));
exports.Text = Text;
Text.defaultProps = {
  m: 0,
  p: 0,
  fontWeight: 400,
  fontSize: 1,
  lineHeight: '1.5em'
};

var Heading = function Heading(_ref) {
  var _ref$is = _ref.is,
      is = _ref$is === void 0 ? "h1" : _ref$is,
      props = _objectWithoutProperties(_ref, ["is"]);

  return _react.default.createElement(Text.withComponent(is, {
    target: "eulnskz5"
  }), props);
};

exports.Heading = Heading;
Heading.defaultProps = {
  m: 0,
  p: 0,
  fontWeight: 400,
  fontSize: 2,
  lineHeight: '1.5em'
};