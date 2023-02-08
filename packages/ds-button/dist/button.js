"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSButton = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const button_styles_1 = require("./button.styles");
let DSButton = class DSButton extends lit_1.LitElement {
    render() {
        return (0, lit_1.html) `<button><slot></slot></button>`;
    }
};
DSButton.styles = button_styles_1.styles;
DSButton = __decorate([
    (0, decorators_js_1.customElement)('ds-button')
], DSButton);
exports.DSButton = DSButton;
//# sourceMappingURL=button.js.map