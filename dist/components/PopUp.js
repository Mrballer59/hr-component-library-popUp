"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../style/popUp.css");
function PopUp(_ref) {
  var setIsOpen = _ref.setIsOpen;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bigDiv",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "mainDiv"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContent"
  }, "Employee Created!"), /*#__PURE__*/_react.default.createElement("div", {
    className: "M-Actions"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "actionsContainer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "Btn-succ",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "OK"))))));
}
var _default = PopUp;
exports.default = _default;