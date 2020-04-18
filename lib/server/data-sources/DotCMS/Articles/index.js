"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bynderUtils = require("../@bynder-utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Articles = base => {
  var _temp;

  return _temp = class extends base {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "baseURL", void 0);

      _defineProperty(this, "token", void 0);
    }

    async getArticles({
      businessUnit,
      audience,
      newsType,
      from,
      to
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
                term: {
                  live: 'true'
                }
              }, {
                term: {
                  deleted: 'false'
                }
              }, {
                term: {
                  working: 'true'
                }
              }, {
                [`query_string`]: {
                  query: `+article.businessUnit:("${businessUnit.join('" "')}") +article.audience:("${audience.join('" "')}")${newsType && newsType.length ? ` +article.newsType:("${newsType.join('" "')}") ` : ' '}+article.channel:"aaghub" +languageId:1`
                }
              }, ...(from && to ? [{
                range: {
                  'article.publishDate': {
                    gte: from,
                    lte: to
                  }
                }
              }] : [])]
            }
          },
          sort: [{
            'article.publishDate': 'desc'
          }],
          size: 999
        }, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
        const {
          contentlets: articles
        } = response;
        return articles.map(({
          title,
          body,
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
        }) => {
          const test = typeof bynderSingleImageSelect === 'string' ? bynderSingleImageSelect : undefined;
          return {
            title,
            body,
            published: publishDate,
            updated: modDate,
            teaser,
            category: newsType,
            baseType,
            channel,
            author: modUserName,
            url: urlTitle,
            image: `${process.env.DOT_CMS_URL}${image}`,
            bynderImage: (0, _bynderUtils.parseBynderSingleImage)(test),
            inode
          };
        });
      } catch (error) {
        console.log('ERROR', error);
        throw new Error();
      }
    }

  }, _temp;
};

var _default = Articles;
exports.default = _default;