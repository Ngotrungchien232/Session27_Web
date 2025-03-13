let a = true;

function getNumber(promptText) {
  let num;
  while (true) {
    num = +prompt(promptText);
    if (!isNaN(num)) {
      return num;
    }
    alert("Vui lòng nhập một số!");
  }
}

// tạo các hàm khá ở đây
let mang = [];
function nhapMang() {
  let n = +prompt("mời bạn nhập vào số phần tử của mảng: ");
  for (let i = 0; i <= n; i++) {
    let x = +prompt("mời bạn nhập vào phần tử thứ " + i);
    mang.push(x);
  }
  // hiển thị danh sách số nguyên vừa nhập
  alert("Danh sách số nguyên vừa nhập: " + mang);
}

function tinhTbc() {
  let tong = 0;
  for (let i = 0; i < mang.length; i++) {
    tong += mang[i];
  }
  alert("tổng các số có trong mảng là: " + tong);
}

function soChanLonNhat() {
  let max = mang[0];
  for (let i = 1; i < mang.length; i++) {
    if (mang[i] > max && mang[i] % 2 == 0) {
      max = mang[i];
    }
    // hiển thị ra số lớn nhất là số nào
    alert("số lớn nhất có trong mảng là: " + max);
  }
}

function soLeNhoNhat() {
  let min = mang[0];
  for (let i = 1; i < mang.length; i++) {
    if (mang[i] < min && mang[i] % 2 != 0) {
      min = mang[i];
    }
  }
  alert("số lẻ nhỏ nhất có trong mảng là: " + min);
}

let menu = `
------ MENU ------
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.

Lựa chọn của bạn là gì?
`;

while (a) {
  let luachon = +prompt(menu);
  switch (luachon) {
    case 1:
      nhapMang();
      break;
    case 2:
      tinhTbc();
      break;
    case 3:
      soChanLonNhat();
      break;
    case 4:
      soLeNhoNhat();
      break;
    case 5:
      a = false;
      alert("Thoát chương trình!");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
