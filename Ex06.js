// viết chương  trình nhập vào một mảng số nguyên
// kiểm tra xem mảng số nguyên vừa nhập có phải dãy số cấp số cộng hay không

// đầu tiên khai báo một mảng số nguyên
let arr = [];

// cho người dùng nhập vào số phần tử mảng mong muốn
let n = +prompt("Nhập vào số phần tử mảng: ", 0);

// cho người dùng nhập vào các phần tử mảng
for (let i = 0; i < n; i++) {
  let x;
  do {
    x = +prompt("mời bạn nhập vào phần tử thứ " + i);
    if (x < 0) {
      alert("mời bạn nhập lại số mới lớn hơn 0");
    }
  } while (x < 0);
  arr.push(x);
}

// tạo hàm kiểm tra xem có phải cấp số cộng hay không
function checkArr(arr) {
  if (arr.length < 2) {
    return false;
  }
  let d = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== d) {
      return false;
    }
  }
  return true;
}

// gọi hàm kiểm tra
let result = checkArr(arr);

// kết luận
if (result) {
  alert("mảng số nguyên vừa nhập là dãy số cấp số cộng");
} else {
  alert("mảng số nguyên trên không phải cấp số cộng ");
}
