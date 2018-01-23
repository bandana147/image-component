'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./ImageComponent.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageComponent = function (_React$Component) {
  _inherits(ImageComponent, _React$Component);

  function ImageComponent(props) {
    _classCallCheck(this, ImageComponent);

    var _this = _possibleConstructorReturn(this, (ImageComponent.__proto__ || Object.getPrototypeOf(ImageComponent)).call(this, props));

    _this.onImageError = function () {
      return _this.setState({ imageError: true });
    };

    _this.onImageLoad = function () {
      return _this.setState({ imageLoaded: true });
    };

    _this.onPlaceholderImage = function () {
      return _this.setState({ placeholderImageLoaded: true });
    };

    _this.state = {
      placeholderImageLoaded: false,
      imageLoaded: !props.placeholderImageUrl,
      imageError: false
    };
    return _this;
  }

  _createClass(ImageComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var image = this.refs.image;

      if (image) {
        _reactDom2.default.findDOMNode(image).addEventListener('error', this.onImageError);
      }
    }
  }, {
    key: 'renderLoader',
    value: function renderLoader() {
      if (this.state.placeholderImageLoaded && !this.state.imageLoaded) {
        return _react2.default.createElement(
          'div',
          { className: 'image__loader' },
          _react2.default.createElement('div', { className: 'image__l__bar' }),
          _react2.default.createElement('div', { className: 'image__l__bar' }),
          _react2.default.createElement('div', { className: 'image__l__bar' }),
          _react2.default.createElement('div', { className: 'image__l__bar' })
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          imageUrl = _props.imageUrl,
          placeholderImageUrl = _props.placeholderImageUrl,
          classname = _props.classname,
          alt = _props.alt,
          border = _props.border,
          height = _props.height,
          sizes = _props.sizes,
          srcset = _props.srcset,
          longdesc = _props.longdesc,
          ismap = _props.ismap;

      var imageContClass = (0, _classnames2.default)('image-cont', classname, {
        'main-image--loaded': this.state.imageLoaded,
        'main-image--error': this.state.imageError
      });

      return _react2.default.createElement(
        'div',
        { className: imageContClass },
        _react2.default.createElement('img', {
          className: 'main-image__placeholder',
          src: placeholderImageUrl || imageUrl,
          role: 'presentation',
          onLoad: this.onPlaceholderImage,
          alt: alt,
          border: border,
          height: height,
          sizes: sizes,
          srcset: srcset,
          longdesc: longdesc,
          ismap: ismap
        }),
        _react2.default.createElement('img', {
          className: 'main-image__image',
          src: imageUrl,
          role: 'presentation',
          onLoad: this.onImageLoad,
          ref: 'image',
          alt: alt,
          border: border,
          height: height,
          sizes: sizes,
          srcset: srcset,
          longdesc: longdesc,
          ismap: ismap
        }),
        this.renderLoader()
      );
    }
  }]);

  return ImageComponent;
}(_react2.default.Component);

ImageComponent.propTypes = {
  imageUrl: _propTypes2.default.string.isRequired,
  placeholderImageUrl: _propTypes2.default.string,
  classname: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  border: _propTypes2.default.string,
  height: _propTypes2.default.string,
  sizes: _propTypes2.default.string,
  srcset: _propTypes2.default.string,
  longdesc: _propTypes2.default.string,
  ismap: _propTypes2.default.string
};

exports.default = ImageComponent;