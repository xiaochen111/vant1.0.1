'use strict';

exports.__esModule = true;

exports.default = function (sfc) {
  sfc.name = 'van-' + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(_i18n2.default, _bem2.default);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = _.isDef;

  return sfc;
};

require('../locale');

var _bem = require('../mixins/bem');

var _bem2 = _interopRequireDefault(_bem);

var _i18n = require('../mixins/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a basic component with common options
 */
var install = function install(Vue) {
  Vue.component(this.name, this);
};

;