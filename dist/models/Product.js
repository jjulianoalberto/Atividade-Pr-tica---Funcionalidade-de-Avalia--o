"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductType = void 0;
const uuid_1 = require("uuid");
const Comment_1 = require("./Comment");
const Rating_1 = require("./Rating");
const comments_1 = require("../database/comments");
var ProductType;
(function (ProductType) {
    ProductType["Clothes"] = "Clothes";
    ProductType["Shoes"] = "Shoes";
    ProductType["Home"] = "Home";
    ProductType["Pet"] = "Pet";
    ProductType["Special"] = "Special";
})(ProductType || (exports.ProductType = ProductType = {}));
class Product {
    constructor(_name, _value, _type) {
        this._name = _name;
        this._value = _value;
        this._type = _type;
        this._id = (0, uuid_1.v4)();
        this._ratings = [];
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get value() {
        return this._value;
    }
    show() {
        console.log(`${this._name} (R$ ${this._value.toFixed(2)})`);
        this.showComments();
        this.showRatings();
        return "\n-----------------------\n";
    }
    showRatings() {
        const averageRating = this.getAverageRating();
        if (averageRating === null) {
            console.log('Média das avaliações: Nenhuma avaliação ainda.');
        }
        else {
            console.log(`Média das avaliações: ${averageRating.toFixed(2)}`);
        }
    }
    showComments() {
        const productComments = comments_1.comments.filter(comment => comment.product === this);
        productComments.forEach(comment => {
            console.log(`  [${comment.from.username}]: ${comment.content}`);
        });
    }
    // Adiciona comentário no produto
    addComment(content, user) {
        const comment = new Comment_1.Comment(user, this, content);
        comments_1.comments.push(comment);
    }
    // Adiciona uma avaliação
    addRate(rate, user) {
        if (rate < 1 || rate > 5) {
            console.log('A avaliação deve ser entre 1 e 5.');
            return;
        }
        const rating = new Rating_1.Rating(rate, user);
        this._ratings.push(rating);
        console.log(`Avaliação de ${rate} adicionada por ${user.username}`);
    }
    // Calcula a média das avaliações
    getAverageRating() {
        if (this._ratings.length === 0)
            return null;
        const total = this._ratings.reduce((sum, rating) => sum + rating.rate, 0);
        return total / this._ratings.length;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            price: this._value,
            type: this._type,
            averageRating: this.getAverageRating()
        };
    }
}
exports.Product = Product;
