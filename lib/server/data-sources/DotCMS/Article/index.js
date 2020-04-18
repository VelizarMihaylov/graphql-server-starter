"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bynderUtils = require("../@bynder-utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Article = base => {
  var _temp;

  return _temp = class extends base {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "baseURL", void 0);

      _defineProperty(this, "token", void 0);
    }

    async getArticle({
      url
    }) {
      try {
        const response = await this.post(`${this.baseURL}`, {
          query: {
            bool: {
              must: [{
                term: {
                  contenttype: 'article'
                }
              }, {
                [`query_string`]: {
                  query: `+article.urlTitle:"${url}"`
                }
              }]
            }
          }
        }, {
          headers: {
            Authorization: 'Bearer ' + this.token
          }
        });
        const {
          contentlets: [{
            body,
            title: articleTitle,
            publishDate,
            teaser,
            modDate,
            newsType,
            baseType,
            channel,
            modUserName,
            urlTitle,
            image,
            bynderSingleImageSelect,
            inode
          }]
        } = response;
        return {
          body,
          title: articleTitle,
          published: publishDate,
          updated: modDate,
          teaser,
          category: newsType,
          baseType,
          channel,
          author: modUserName,
          url: urlTitle,
          image: `${process.env.DOT_CMS_URL}${image}`,
          bynderImage: (0, _bynderUtils.parseBynderSingleImage)(bynderSingleImageSelect),
          inode
        };
      } catch (error) {
        console.log('ERROR', error);
        throw new Error();
      }
    }

  }, _temp;
};

var _default = Article;
exports.default = _default;