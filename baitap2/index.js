console.log("hello");

function soTrungBinh() {
  let thuNhat =parseInt( document.getElementById("thuNhat").value);
  // console.log("thu nhat",thuNhat);
  let thuHai =parseInt( document.getElementById("thuHai").value);
  let thuBa = parseInt( document.getElementById("thuBa").value);
  let thuTu = parseInt( document.getElementById("thuTu").value);
  let thuNam = parseInt( document.getElementById("thuNam").value);
  // console.log("thu nhat",thuNhat);
  // console.log("thu hai",thuHai);
  // alert(123);
  let trungBinhCong = 0;
  trungBinhCong = (thuNhat + thuHai + thuBa + thuTu + thuNam) / 5;
  document.getElementById("tongLuong").innerHTML =
    "Giá Trị trung bình là : " + trungBinhCong;
}
