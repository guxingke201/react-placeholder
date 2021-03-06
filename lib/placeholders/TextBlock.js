'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextRow = require('./TextRow');

var _TextRow2 = _interopRequireDefault(_TextRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBlock = (_temp2 = _class = function (_React$Component) {
  _inherits(TextBlock, _React$Component);

  function TextBlock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextBlock.__proto__ || Object.getPrototypeOf(TextBlock)).call.apply(_ref, [this].concat(args))), _this), _this.getRowStyle = function (i) {
      var _this$props = _this.props,
          rows = _this$props.rows,
          color = _this$props.color,
          widths = _this$props.widths;


      return {
        backgroundColor: color,
        maxHeight: 100 / (rows * 2 - 1) + '%',
        width: widths[(i + widths.length) % widths.length] + '%'
      };
    }, _this.getRows = function () {
      var _this$props2 = _this.props,
          rows = _this$props2.rows,
          lineSpacing = _this$props2.lineSpacing;

      var range = Array.from({ length: rows }); // eslint-disable-line prefer-spread
      return range.map(function (x, i) {
        return _react2.default.createElement(_TextRow2.default, {
          style: _this.getRowStyle(i),
          lineSpacing: i !== 0 ? lineSpacing : 0,
          key: i
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className;


      var classes = ['text-block', className].filter(function (c) {
        return c;
      }).join(' ');

      return _react2.default.createElement(
        'div',
        { className: classes, style: _extends({}, style, { width: '100%' }) },
        this.getRows()
      );
    }
  }]);

  return TextBlock;
}(_react2.default.Component), _class.propTypes = {
  rows: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string.isRequired,
  lineSpacing: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  widths: _propTypes2.default.arrayOf(_propTypes2.default.number),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
}, _class.defaultProps = {
  widths: [97, 100, 94, 90, 98, 95, 98, 40]
}, _temp2);
exports.default = TextBlock;