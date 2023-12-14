console.log("hello");

function tongKyso() {
  let sum = Number(document.getElementById("numBer").value);
  let num = 0;

  let ten = 0;
  let unit = 0;

  let num2 = sum % 100;// cho~ nay phai la sum chu nhi
  ten = Math.floor(num2 / 10);

  unit = num2 % 10;
  sum = ten + unit;
  console.log("Tổng các chữ số : " + sum);
  document.getElementById("result").innerHTML = `tổng các ký số:  ${sum}`;
}
