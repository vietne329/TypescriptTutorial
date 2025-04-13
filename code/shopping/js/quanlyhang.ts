import { SanPham } from "./sanpham"

export class QuanLyHang{
    private hang = SanPham[''] = [];

    constructor() {}

    getCacSanPham() : SanPham[]{
        return [];
    }

    getSanPhamById() : SanPham {
        var motSanPham = new SanPham(1,'Sp1',90000, "Mo ta", true , "images/1.png");
        return motSanPham;
    }

    addSanPham() : void {

    }

    showSanPham() : string {
        return '';
    }



}