"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBynderSingleImage = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseBynderSingleImage = bynderSingleImageSelect => {
  const parsedBynderSingleImage = bynderSingleImageSelect ? JSON.parse(bynderSingleImageSelect)[0] : undefined;
  const {
    image: {
      id
    },
    meta: {
      title,
      altText,
      caption
    }
  } = parsedBynderSingleImage || {
    image: {
      id: undefined,
      url: undefined
    },
    meta: {
      title: undefined,
      altText: undefined,
      caption: undefined
    }
  };
  const articleJpgUrl = (0, _get.default)(parsedBynderSingleImage, 'image.files["Article JPG"].url', undefined);
  return {
    id,
    url: articleJpgUrl,
    title,
    altText,
    caption
  };
};

exports.parseBynderSingleImage = parseBynderSingleImage;