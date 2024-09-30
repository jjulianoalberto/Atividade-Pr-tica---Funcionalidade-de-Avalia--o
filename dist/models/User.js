"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(_name, _username, _email) {
        this._name = _name;
        this._username = _username;
        this._email = _email;
        this._id = (0, uuid_1.v4)();
        this._cart = [];
    }
    get id() {
        return this._id;
    }
    get username() {
        return this._username;
    }
    get email() {
        return this.email;
    }
    // Adiciona produto no carrinho do usuário
    addToCart(product) {
        this._cart.push(product);
        console.log(`Produto adicionado no carrinho: ${product.name}`);
    }
    // Remove um produto do carrinho
    removeFromCart(product) {
        // Se o produto estiver presente, index será o índice do produto;
        // caso contrário, o index será -1.
        const index = this._cart.indexOf(product);
        if (index !== -1) {
            this._cart.splice(index, 1);
            console.log(`${product.name} removido com sucesso.`);
        }
        else {
            console.log(`${product.name} não está no carrinho.`);
        }
    }
    showProducts() {
        let total = 0;
        this._cart.forEach(item => {
            console.log(item.show());
            // total = total + item.value
            total += item.value;
        });
        return `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    }
    toJson() {
        return {
            id: this._id,
            name: this._name,
            username: this._username,
            email: this._email
        };
    }
}
exports.User = User;
