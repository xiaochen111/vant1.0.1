'use strict';

exports.__esModule = true;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _create = require('../utils/create');

var _create2 = _interopRequireDefault(_create);

var _picker = require('../picker');

var _picker2 = _interopRequireDefault(_picker);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _create2.default)({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('picker', { ref: "picker", class: _vm.b(), attrs: { "show-toolbar": "", "value-key": "name", "title": _vm.title, "loading": _vm.loading, "columns": _vm.columns, "item-height": _vm.itemHeight, "visible-item-count": _vm.visibleItemCount }, on: { "change": _vm.onChange, "confirm": function confirm($event) {
          _vm.$emit('confirm', $event);
        }, "cancel": function cancel($event) {
          _vm.$emit('cancel', $event);
        } } });
  },

  name: 'area',

  components: {
    Picker: _picker2.default
  },

  props: {
    value: String,
    title: String,
    loading: Boolean,
    areaList: Object,
    itemHeight: Number,
    visibleItemCount: Number,
    columnsNum: {
      type: [String, Number],
      default: 3
    }
  },

  computed: {
    listValid: function listValid() {
      return this.areaList && (0, _utils.isObj)(this.areaList.province_list);
    },
    columns: function columns() {
      if (!this.listValid) {
        return [];
      }

      var code = this.getCode();
      return [{ values: this.getList('province') }, { values: this.getList('city', code.slice(0, 2)) }, { values: this.getList('county', code.slice(0, 4)) }].slice(0, +this.columnsNum);
    }
  },

  watch: {
    columns: {
      handler: function handler() {
        this.$nextTick(this.setIndex);
      },

      immediate: true
    }
  },

  methods: {
    setIndex: function setIndex() {
      var code = this.getCode();
      this.$refs.picker && this.$refs.picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getCode: function getCode() {
      return this.value || this.listValid && (0, _keys2.default)(this.areaList.county_list)[0] || '';
    },

    // get list by code
    getList: function getList(type, code) {
      var result = [];
      if (!this.listValid || type !== 'province' && !code) {
        return result;
      }

      var list = this.areaList[type + '_list'];
      result = (0, _keys2.default)(list).map(function (code) {
        return {
          code: code,
          name: list[code]
        };
      });

      if (code) {
        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },

    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2));
      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      var code = values[index].code;

      if (index === 0) {
        var cityList = this.getList('city', code.slice(0, 2));
        picker.setColumnValues(1, cityList);
        code = cityList[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      this.$emit('change', picker, values, index);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues() : [];
    }
  }
});