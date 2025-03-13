// tạo một biến lưu trữ bán kính của hình tròn
let r;
// tạo một biến lưu trữ chiều dài của hình chữ nhật
let dai;
// tạo một biến lưu trữ chiều rộng của hình chữ nhật
let rong;

// cho người dùng nhập vào bán kính của hình tròn
r = +prompt("mời bạn nhập bán kính của hình tròn: ", "");

// cho người dùng nhập vào chiều dài và rộng của hình chữ nhật
dai = +prompt("mời bạn nhập chiều dài của hình chữ nhật: ", "");
rong = +prompt("mời bạn nhập chiều rộng của hình chữ nhật: ", "");

// tạo các hàm khá ở đây
function tinhChuViHinhTron() {
  // tính chu vi của hình tròn
  let chuVi = 2 * 3.14 * r;
  alert("chu vi của hình tròn là: " + chuVi);
}

function tinhChuViHinhChuNhat() {
  // tính chu vi của hình chữ nhật
  let chuVi = 2 * (dai + rong);
  alert("chu vi của hình chữ nhật là: " + chuVi);
}

function tinhDienTichHinhTron() {
  // tính diện tích của hình tròn
  let dienTich = 3.14 * r * r;
  alert("diện tích của hình tròn là: " + dienTich);
}

function tinhDienTichHinhChuNhat() {
  // tính diện tích của hình chữ nhật
  let dienTich = dai * rong;
  alert("diện tích của hình chữ nhật là: " + dienTich);
}

let menu = `
------ MENU ------
1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát.

Lựa chọn của bạn là gì?
`;

while (a) {
  let luachon = +prompt(menu);
  switch (luachon) {
    case 1:
      tinhDienTichHinhTron();
      break;
    case 2:
      tinhChuViHinhTron();
      break;
    case 3:
      tinhDienTichHinhTron();
      break;
    case 4:
      tinhChuViHinhChuNhat();
      break;
    case 5:
      a = false;
      alert("Thoát chương trình!");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
