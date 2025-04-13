export class SanPham{
    private _id: number;
    private _ten: string;
    private _gia: number;
    private _mota: string;
    private _tinhtrang: boolean;
    private _anh: string;

    constructor(id: number, ten: string, gia: number, mota: string, tinhtrang: boolean, anh: string) {
        this._id = id;
        this._ten = ten;
        this._gia = gia;
        this._mota = mota;
        this._tinhtrang = tinhtrang;
        this._anh = anh;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get ten(): string {
        return this._ten;
    }

    set ten(value: string) {
        this._ten = value;
    }

    get gia(): number {
        return this._gia;
    }

    set gia(value: number) {
        this._gia = value;
    }

    get mota(): string {
        return this._mota;
    }

    set mota(value: string) {
        this._mota = value;
    }

    get tinhtrang(): boolean {
        return this._tinhtrang;
    }

    set tinhtrang(value: boolean) {
        this._tinhtrang = value;
    }

    get anh(): string {
        return this._anh;
    }

    set anh(value: string) {
        this._anh = value;
    }


}