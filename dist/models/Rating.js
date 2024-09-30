"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const uuid_1 = require("uuid");
class Rating {
    constructor(_rate, _user) {
        this._rate = _rate;
        this._user = _user;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    get rate() {
        return this._rate;
    }
    get user() {
        return this._user;
    }
    show() {
        console.log(`Avaliação de ${this.user.username}: ${this.rate}`);
    }
}
exports.Rating = Rating;
