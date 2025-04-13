/*  INTRODUCE
1.Typescript là gì? (WHAT):
     - Ngôn ngữ lập trình theo hướng đối tượng.
     - Phát triển bởi Microsoft.
     - Typescript(.ts) chính là Javascript (.js): file ts biên dịch cũng ra js.
          + Nguyên tắc hoạt động giống SASS và CSS.
              + SASS = type script.
              + CSS = javascript.
              + Chẳng qua là làm cách viết CSS được đưa thêm phần lập trình vào CSS.
          + Typescript là cách viết thông minh hơn cho Javascript.
              + Javascript không hỗ trợ hoàn toàn lập trình hướng đối tượng, tức là khi làm lập trình OOP
              thì phải sử dụng thủ thuật.
              + Typescript xử lý phần thủ thuật đó cho mình.
              + Mình sử dụng Typescript lập trình như lập trình OOP thông thường, đoạn ngữ pháp,
              chuyển đổi sẽ do bộ dịch Typescript xử lý
     - Viết cho cả front end và backend.

2.Tại sao dùng ngôn ngữ Typescript? (WHY)
     - Để sử dụng ngôn ngữ Javascript (TS => JS + OOP)  như một ngôn ngữ lập trình hướng đối tượng như PHP, C#
        + Typescript phát triển bởi Anders Hejsberg - người tạo ra C#
        + Giải quyết điểm yếu của Javascript so với các ngôn ngữ lập trình chính thống.
     - Hỗ trợ check lỗi, biên dịch như biên dịch chương trình lập trình thông thường.
     - Các thế hệ mới của Javascript đều dựa trên Typescript: ví dụ Angular js 4.

3.Học Typescript như thế nào?(HOW)
    - Biến và các kiểu dữ liệu
    - Function
    - Lập trình hướng đối tượng
    - Generic
    - Module
    - Tổng hợp kiến thức qua thực hành bài tập */
// ================ String ==================
var str1;
str1 = '25 years old';
var str2;
str2 = "Mai Viet";
console.log("\n    I'm ".concat(str2, ", I'm ").concat(str2, "\n    "));
// ================ String ==================
// ================ Number And Array ================
var num1 = 10;
console.log(num1);
//Array string
var hocvien = ['teo', 'huy', 'lan'];
console.log(hocvien[0]);
for (var i = 0; i < hocvien.length; i++) {
    console.log(hocvien[i]);
}
var arrayNum = [1, 2, 3, 4];
for (var j = 0; j < arrayNum.length; j++) {
    console.log(arrayNum[j]);
}
//================ Number And Array ================
//================ BOOLEAN ================
var flag;
flag = true;
console.log(flag);
//================ BOOLEAN ================
//================ ENUM ================
// enum (viết tắt của enumeration) là tập hợp các hằng số có tên, 
// dùng khi bạn có một danh sách các giá trị cố định — ví dụ: trạng thái, loại vai trò, cấp độ...
var TrangThai;
(function (TrangThai) {
    TrangThai[TrangThai["HoanThanh"] = 1] = "HoanThanh";
    TrangThai[TrangThai["ThatBai"] = 2] = "ThatBai";
    TrangThai[TrangThai["DangXuLy"] = 3] = "DangXuLy";
})(TrangThai || (TrangThai = {}));
var VaiTro;
(function (VaiTro) {
    VaiTro["Admin"] = "ADMIN";
    VaiTro["User"] = "USER";
    VaiTro["Guess"] = "GUESS";
})(VaiTro || (VaiTro = {}));
//Cách sử dụng enum
var trangThaiDonHang = TrangThai.DangXuLy;
if (trangThaiDonHang === TrangThai.DangXuLy) {
    console.log("Don hang dang xu ly");
}
//================ ENUM ================
//================ TUPLE ================
// Trong TypeScript, tuple là một kiểu dữ liệu giúp bạn lưu trữ một dãy giá trị với các kiểu dữ liệu khác nhau,
//  khác với mảng (array) chỉ có một kiểu dữ liệu.
/* ✅ 1. Khai báo tuple
     Tuple có thể chứa các giá trị có kiểu khác nhau và có thể xác định số lượng phần tử.
     Dưới đây là cách khai báo một tuple trong TypeScript: */
var myTuple = [1, 'Hello', true];
// ✅ 2. Truy cập phần tử trong tuple
console.log(myTuple[0]);
console.log(myTuple[1]);
console.log(myTuple[2]);
/* ✅ 3. Tuple có độ dài cố định
     Điểm mạnh của tuple là bạn có thể xác định số lượng phần tử và kiểu của từng phần tử trong tuple. */
var person = ['Vietmd', 25];
/*✅ 4. Tuple có thể là kiểu tùy chọn
Bạn có thể sử dụng tuple để lưu trữ một số giá trị trong đó có thể có giá trị mặc định hoặc có thể null/undefined:*/
var user2 = ["Vietmd", 25];
/*✅ 5. Tuple có thể thay đổi kiểu phần tử
Nếu muốn thay đổi phần tử trong tuple, bạn chỉ cần thay phần tử đó bằng một giá trị có kiểu tương ứng:*/
var myTuple2 = ["Hello", 10];
myTuple2[1] = 20; // ✅ Được phép vì kiểu phần tử 1 là number
myTuple2[0] = "World"; // ✅ Được phép vì kiểu phần tử 0 là string
/*✅ 6. Tuple với Array trong Tuple Tuple cũng có thể chứa một array bên trong:*/
var student2 = ["Viemd", 25, ["Math", "Science"]];
/*✅ 7. Tuple với Rest Parameter Một tuple có thể sử dụng rest để nhận nhiều phần tử trong mảng:*/
var myTuple3 = ["Viemd", 1, 2, 3, 4];
// [string, number, number, number, number]
/*✅ 8. Sử dụng Tuple trong hàm
Tuple cũng rất hữu ích trong các hàm để trả về nhiều giá trị với các kiểu dữ liệu khác nhau:*/
function getUserInfor() {
    return ["vietmd", 25];
}
var userInfor = getUserInfor();
console.log(userInfor[0]);
console.log(userInfor[1]);
//================ TUPLE ================
//================ VOID ================
function calculate() {
    console.log("Hello my name is Viet");
}
calculate();
//================ VOID ================
//================ ÉP KIỂU ================
/*Ép kiểu trong Typescript
 Chỉ áp dụng covert từ any sang các kiểu cụ thể
 Có 2 cách : <type> hoặc as
*/
var var2;
var2 = "Day la kieu any";
console.log(var2.length);
console.log(var2.length);
//================ ÉP KIỂU ================
//================ HÀM TRẢ VỀ ================
console.log("================ HÀM TRẢ VỀ ================");
//number function
function tinhtong() {
    return 21 + 21;
}
var varNum = tinhtong();
console.log(varNum);
//string function
function hello() {
    return "function string";
}
var varStr = hello();
console.log(varStr);
//array string function
function functionArrayString() {
    return ['vietmd', 'quytv7', 'hieudm12'];
}
var var3 = functionArrayString();
console.log(var3);
//array number function
function functionArrayNumber() {
    return [212, 1212, 312];
}
var var4 = functionArrayNumber();
console.log(var4);
//array object
function arrayObject() {
    return {
        name: "Vietmd",
        age: 28,
        skill: {
            skill1: 1,
            skill2: 2,
            skill3: 3
        }
    };
}
var var5 = arrayObject();
console.log(var5);
//================ HÀM TRẢ VỀ ================
//================ HÀM CÓ THAM SỐ ================
console.log("//================ HÀM CÓ THAM SỐ ================");
function calculateSum(x, y) {
    return x + y;
}
var sum = calculateSum(60, 50);
console.log(sum);
//================ HÀM CÓ THAM SỐ ================
//================ Anonymous Function ================
console.log("================ Anonymous Function ================");
//Cách 1:
var z = function (x, y) {
    return x + y;
};
console.log(z(12, 33));
//Cách 2:
var x = function (x, y) {
    return x + y;
};
console.log(x(22, 31));
//================ Anonymous Function ==================
//================ Function ko cần function ================
var a = function (x, y) {
    return x + y;
};
console.log(a(10, 21));
//================ Function ko cần function ================
//================ OOP ================
console.log("================ OOP ================");
/*
1. Tính trừu tượng: là việc xác định những thuộc tính phương thức cần thiết cho 1 chương trình - class
2. Tính thừa kế: Lớp này có thể kế thừa thuộc tính và phương thức của lớp kia - extend
3. Tính đa hình: Cách mà viết lại thuộc tính và phương thức của lớp khác - interface, abstract
4. Tính đóng gói: Tính chất cho phép người dùng hay đối tượng khác thay đổi dữ liệu của đối tượng hiện tại.
    - access modifier
    - static
 */
//1. Tạo class
var hero = /** @class */ (function () {
    //Mục đính của hàm tạo để tạo ra instance
    function hero(name, slogan, blood) {
        this.name = name;
        this.slogan = slogan;
        this.blood = blood;
    }
    hero.prototype.skill1 = function () { };
    ;
    hero.prototype.skill2 = function () { };
    ;
    hero.prototype.ultimate = function () { };
    ;
    hero.prototype.getName = function () {
        return this.name;
    };
    hero.prototype.setName = function (name) {
        this.name = name;
    };
    hero.prototype.getDetail = function () {
        return "Hero : ".concat(this.name, ", blood: ").concat(this.blood);
    };
    return hero;
}());
//2. Tạo instance
var yasuo = new hero("yasuo", "My name is Yasuo", 650);
console.log(yasuo.getDetail());
var irelia = new hero("irelia", "My name is Irelia", 680);
console.log(irelia.getDetail());
//3. Trừu tượng hóa
var phone = /** @class */ (function () {
    function phone(name, price, vendor, color) {
        this.name = name;
        this.price = price;
        this.vendor = vendor;
        this.color = color;
    }
    return phone;
}());
var samsung = new phone("SamSung Galaxy S25 Ultra", 2000, "SamSung", ['White', 'Black', 'Gold']);
console.log(samsung);
//4. Class và Enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["CREATE"] = 1] = "CREATE";
    STATUS[STATUS["INPROGRESS"] = 2] = "INPROGRESS";
    STATUS[STATUS["DONE"] = 3] = "DONE";
})(STATUS || (STATUS = {}));
var toDo = /** @class */ (function () {
    function toDo(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    toDo.prototype.getInformation = function () {
        return "WorkId: ".concat(this.id, " - name: ").concat(this.name, " - status: ").concat(this.status);
    };
    return toDo;
}());
var work1 = new toDo(1, "Study Javascript", STATUS.DONE);
console.log(work1.getInformation());
var work2 = new toDo(2, "Study Typescript", STATUS.INPROGRESS);
console.log(work2.getInformation());
//5. Ý nghĩa của Static trong lập trình hướng đối tượng
/*
1. WHY:
    - là 1 trong những đặc điểm của lập trình hướng đối tượng là đóng gói và bảo mật
    - static là 1 trong những công cụ giúp người lập trình phần quyền truy cập
        + dùng cho property trong class
        + dùng cho method trong class
*/
var toDo2 = /** @class */ (function () {
    function toDo2(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    toDo2.prototype.getInformation = function () {
        return "WorkId: ".concat(this.id, " - name: ").concat(this.name, " - status: ").concat(this.status);
    };
    toDo2.getInformationStatic = function () {
        return "nameStatic: ".concat(this.nameStatic);
    };
    toDo2.nameStatic = "nameStatic";
    return toDo2;
}());
//Static giúp ta ko cần phải tạo instance mà vẫn có thể sử dụng được các thuộc tính và phương thức
console.log(toDo2.nameStatic);
console.log(toDo2.getInformationStatic());
/*6.Kế thừa trong Typescript
1. WHAT: Kế thừa là thừa hưởng lại các thuộc tính và phương thức của bố

2. WHY:

3. HOW:

 */
//================ OOP ================
