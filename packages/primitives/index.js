"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = exports.Text = exports.Button = exports.Input = exports.Flex = exports.Box = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _reactEmotion.default.div(_templateObject(), _styledSystem.space, _styledSystem.width, _styledSystem.fontSize, _styledSystem.color, _styledSystem.flex, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.display, _styledSystem.maxWidth, _styledSystem.minWidth, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.minHeight, _styledSystem.size, _styledSystem.ratio, _styledSystem.position, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius);

exports.Box = Box;

var Flex = _reactEmotion.default.div(_templateObject2(), _styledSystem.space, _styledSystem.width, _styledSystem.fontSize, _styledSystem.color, _styledSystem.alignItems, _styledSystem.alignContent, _styledSystem.justifyContent, _styledSystem.flexWrap, _styledSystem.flexBasis, _styledSystem.flexDirection, _styledSystem.flex, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.display, _styledSystem.maxWidth, _styledSystem.minWidth, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.minHeight, _styledSystem.size, _styledSystem.ratio, _styledSystem.position, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius);

exports.Flex = Flex;
Flex.defaultProps = {
  display: 'flex'
};

var Input = _reactEmotion.default.input(_templateObject3(), _styledSystem.space, _styledSystem.width, _styledSystem.fontSize, _styledSystem.color, _styledSystem.flex, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.display, _styledSystem.maxWidth, _styledSystem.minWidth, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.minHeight, _styledSystem.size, _styledSystem.ratio, _styledSystem.position, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius);

exports.Input = Input;

var Button = _reactEmotion.default.button(_templateObject4(), _styledSystem.space, _styledSystem.width, _styledSystem.fontSize, _styledSystem.color, _styledSystem.flex, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.display, _styledSystem.maxWidth, _styledSystem.minWidth, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.minHeight, _styledSystem.size, _styledSystem.ratio, _styledSystem.fontFamily, _styledSystem.textAlign, _styledSystem.lineHeight, _styledSystem.fontWeight, _styledSystem.letterSpacing, _styledSystem.position, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius);

exports.Button = Button;
Button.defaultProps = {
  height: 40,
  px: 3,
  fontWeight: 'bold'
};

var Text = _reactEmotion.default.p(_templateObject5(), _styledSystem.space, _styledSystem.width, _styledSystem.fontSize, _styledSystem.color, _styledSystem.flex, _styledSystem.justifySelf, _styledSystem.alignSelf, _styledSystem.display, _styledSystem.maxWidth, _styledSystem.minWidth, _styledSystem.height, _styledSystem.maxHeight, _styledSystem.minHeight, _styledSystem.size, _styledSystem.ratio, _styledSystem.fontFamily, _styledSystem.textAlign, _styledSystem.lineHeight, _styledSystem.fontWeight, _styledSystem.letterSpacing, _styledSystem.position, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius, (0, _styledSystem.responsiveStyle)({
  prop: 'fontStyle',
  cssProperty: 'fontStyle'
}));

exports.Text = Text;

var Heading = function Heading(_ref) {
  var _ref$is = _ref.is,
      is = _ref$is === void 0 ? 'h1' : _ref$is,
      props = _objectWithoutProperties(_ref, ["is"]);

  return _react.default.createElement(Text.withComponent(is), props);
};

exports.Heading = Heading;