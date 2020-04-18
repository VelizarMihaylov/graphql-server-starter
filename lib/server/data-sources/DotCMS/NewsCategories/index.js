"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const NewsCategories = base => {
  var _temp;

  return _temp = class extends base {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "baseURL", void 0);

      _defineProperty(this, "token", void 0);
    }

    async getNewsCategories() {
      try {
        const response = await this.post(`${this.baseURL}`, {
          query: {
            bool: {
              must: [{
                term: {
                  contenttype: 'newscategories'
                }
              }]
            }
          }
        }, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
        const {
          contentlets: [{
            newsTypeCategoriesData
          }]
        } = response;
        const {
          newsType
        } = JSON.parse(newsTypeCategoriesData);
        return newsType;
      } catch (error) {
        console.log('ERROR', error);
        throw new Error();
      }
    }

  }, _temp;
};

var _default = NewsCategories;
exports.default = _default;