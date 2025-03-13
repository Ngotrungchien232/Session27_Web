let a = true;
let danhSachSinhVien = [];

// Hàm nhập danh sách sinh viên
function nhapDanhSachSinhVien() {
  let soLuongSinhVien = getNumber("Nhập số lượng sinh viên: ");
  for (let i = 0; i < soLuongSinhVien; i++) {
    let tenSinhVien = prompt(`Nhập tên sinh viên ${i + 1}: `);
    danhSachSinhVien.push(tenSinhVien);
  }
}

// Hàm hiển thị danh sách sinh viên
function hienThiDanhSachSinhVien() {
  if (danhSachSinhVien.length === 0) {
    alert("Danh sách sinh viên trống!");
  } else {
    let danhSach = "";
    for (let i = 0; i < danhSachSinhVien.length; i++) {
      danhSach += `${i + 1}. ${danhSachSinhVien[i]}`;
    }
    alert(danhSach);
  }
}

// Hàm tìm sinh viên theo tên
function timSinhVienTheoTen() {
  let tenSinhVien = prompt("Nhập tên sinh viên cần tìm: ");
  let ketQua = danhSachSinhVien.find((sinhVien) => sinhVien === tenSinhVien);
  if (ketQua) {
    alert(`Sinh viên ${tenSinhVien} có trong danh sách.`);
  } else {
    alert(`Sinh viên ${tenSinhVien} không có trong danh sách.`);
  }
}

// Hàm xóa sinh viên khỏi danh sách
function xoaSinhVienKhoiDanhSach() {
  let tenSinhVien = prompt("Nhập tên sinh viên cần xóa: ");
  let index = danhSachSinhVien.indexOf(tenSinhVien);
  if (index !== -1) {
    danhSachSinhVien.splice(index, 1);
    alert(`Sinh viên ${tenSinhVien} đã được xóa khỏi danh sách.`);
  } else {
    alert(`Sinh viên ${tenSinhVien} không có trong danh sách.`);
  }
}

// Hàm thoát chương trình
function thoatChuongTrinh() {
  a = false;
}

let menu = `
------ MENU ------
1. Nhập danh sách sinh viên.
Cho người dùng nhập số lượng số sinh viên, nhập lần lượt tên đầy đủ từng sinh viên.
2. Hiển thị danh sách sinh viên.
Tìm sinh viên theo tên.
3. Cho người dùng nhập tên sinh viên cần tìm kiếm, hiển thị tên đầy đủ sinh viên nếu tìm thấy, trong trường hợp không tìm thấy sinh viên thông báo sinh viên không có trong danh sách .
4. Xóa sinh viên khỏi danh sách.
Cho người dùng nhập tên sinh viên cần xóa, trong trường hợp có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên.
5. Thoát.

Lựa chọn của bạn là gì?
`;

while (a) {
  let luachon = +prompt(menu);
  switch (luachon) {
    case 1:
      nhapDanhSachSinhVien();
      break;
    case 2:
      hienThiDanhSachSinhVien();
      break;
    case 3:
      timSinhVienTheoTen();
      break;
    case 4:
      xoaSinhVienKhoiDanhSach();
      break;
    case 5:
      thoatChuongTrinh();
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
