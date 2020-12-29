"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pagesController_1 = __importDefault(require("./pagesController"));
var postsController_1 = __importDefault(require("./postsController"));
var arr = [
    new pagesController_1.default(),
    new postsController_1.default()
    //ADD OTHERS CONTROLLERS
];
exports.default = arr;
