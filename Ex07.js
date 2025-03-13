// Hàm tìm số nguyên còn thiếu
function timSoThieu(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }

  return null;
}

let n = parseInt(prompt("Nhập số lượng số nguyên: "));
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(parseInt(prompt(`Nhập số nguyên thứ ${i + 1}: `)));
}

arr.sort((a, b) => a - b);
let soThieu = null;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i + 1] !== arr[i] + 1) {
    soThieu = arr[i] + 1;
    break;
  }
}

if (soThieu !== null) {
  alert(`Số bị thiếu là: ${soThieu}`);
} else {
  alert("Không có số nào bị thiếu trong dãy");
}
