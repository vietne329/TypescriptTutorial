"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuanLyHang = void 0;
var sanpham_1 = require("./sanpham");
var QuanLyHang = /** @class */ (function () {
    function QuanLyHang() {
        this.hang = sanpham_1.SanPham[''] = [];
    }
    QuanLyHang.prototype.getCacSanPham = function () {
        return [];
    };
    QuanLyHang.prototype.getSanPhamById = function () {
        var motSanPham = new sanpham_1.SanPham(1, 'Sp1', 90000, "Mo ta", true, "images/1.png");
        return motSanPham;
    };
    QuanLyHang.prototype.addSanPham = function () {
    };
    QuanLyHang.prototype.showSanPham = function () {
        return '';
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
