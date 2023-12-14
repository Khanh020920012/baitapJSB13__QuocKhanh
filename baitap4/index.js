console.log("helloocondi")


function hinhChuNhat(){
    // alert(123);
let chieuDai = document.getElementById("chieuDai").value * 1 ;
let chieuRong = document.getElementById("chieuRong").value * 1 ;
// console.log("chieu dai chieu rong", chieuDai)

let chuVi = 0;
let dienTich = 0;
dienTich = (chieuDai * chieuRong);
// console.log("dienTich", dienTich);
chuVi = (chieuDai + chieuRong) * 2 ;
// console.log("chuVi", chuVi);
dienTich = `Diên Tích : ${dienTich} ;` + `chu vi : ${chuVi} ` ;
document.getElementById("result").innerText = dienTich , chuVi;
}
