// Khai báo một hàm nhận vào hai tham số, tham số đầu tiên là một mảng
//tham số thứ hai là số n (kích thước mảng con). Tiến hành chia mảng thành các mảng con có kích thước n

function chiaMangCon(mang, n) {
  let mangCon = [];
  for (let i = 0; i < mang.length; i += n) {
    let mangConMoi = mang.slice(i, i + n);
    mangCon.push(mangConMoi);
  }
  return mangCon;
}

// khai báo mọt mảng
let arr = [];
let m = +prompt("mời bạn nhập vào kích thước mảng mong muốn: ");
for (let i = 0; i < m; i++) {
  let x = +prompt("mời bạn nhập vào phần tử thứ " + i);
  arr.push(x);
}

// Khai báo kích thước mảng con
let n = +prompt("mời bạn nhập vào kích thước mảng con: ");
// Gọi hàm chiaMangCon
let mangCon = chiaMangCon(arr, n);
// In ra mảng con
alert("mảng con sau khi chia là: " + mangCon);
