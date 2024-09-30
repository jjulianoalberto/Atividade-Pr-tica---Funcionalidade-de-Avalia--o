"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const uuid_1 = require("uuid");
class Comment {
    constructor(_from, _product, _content) {
        this._from = _from;
        this._product = _product;
        this._content = _content;
        this._id = (0, uuid_1.v4)();
    }
    get from() {
        return this._from;
    }
    get product() {
        return this._product;
    }
    get content() {
        return this._content;
    }
    show() {
        console.log(`Comentário de ${this.from.username}: "${this.content}"`);
    }
    toJson() {
        return {
            id: this._id,
            from: this._from,
            productId: this._product.id,
            content: this._content
        };
    }
}
exports.Comment = Comment;
