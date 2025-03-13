let a = true;

function cong(a, b) {
  return a + b;
}

function tru(a, b) {
  return a - b;
}

function nhan(a, b) {
  return a * b;
}

function chia(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Không thể chia cho 0";
  }
}

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

let menu = `
------ MENU ------
1. Cộng hai số 
2. Trừ hai số 
3. Nhân hai số 
4. Chia hai số 
5. Thoát

Lựa chọn của bạn là gì?
`;

while (a) {
  let luachon = +prompt(menu);
  switch (luachon) {
    case 1:
      let num1 = getNumber("Nhập số thứ nhất: ");
      let num2 = getNumber("Nhập số thứ hai: ");
      alert(`Kết quả: ${cong(num1, num2)}`);
      break;
    case 2:
      num1 = getNumber("Nhập số thứ nhất: ");
      num2 = getNumber("Nhập số thứ hai: ");
      alert(`Kết quả: ${tru(num1, num2)}`);
      break;
    case 3:
      num1 = getNumber("Nhập số thứ nhất: ");
      num2 = getNumber("Nhập số thứ hai: ");
      alert(`Kết quả: ${nhan(num1, num2)}`);
      break;
    case 4:
      num1 = getNumber("Nhập số thứ nhất: ");
      num2 = getNumber("Nhập số thứ hai: ");
      alert(`Kết quả: ${chia(num1, num2)}`);
      break;
    case 5:
      a = false;
      alert("Thoát chương trình!");
      break;
    default:
      alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
  }
}
