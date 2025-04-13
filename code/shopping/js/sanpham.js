"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanPham = void 0;
var SanPham = /** @class */ (function () {
    function SanPham(id, ten, gia, mota, tinhtrang, anh) {
        this._id = id;
        this._ten = ten;
        this._gia = gia;
        this._mota = mota;
        this._tinhtrang = tinhtrang;
        this._anh = anh;
    }
    Object.defineProperty(SanPham.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (value) {
            this._ten = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "gia", {
        get: function () {
            return this._gia;
        },
        set: function (value) {
            this._gia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "mota", {
        get: function () {
            return this._mota;
        },
        set: function (value) {
            this._mota = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "tinhtrang", {
        get: function () {
            return this._tinhtrang;
        },
        set: function (value) {
            this._tinhtrang = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "anh", {
        get: function () {
            return this._anh;
        },
        set: function (value) {
            this._anh = value;
        },
        enumerable: false,
        configurable: true
    });
    return SanPham;
}());
exports.SanPham = SanPham;
