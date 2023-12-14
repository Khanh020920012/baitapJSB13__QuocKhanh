// console.log("helloa1")


function quyDoiTien(){
    let soTien = document.getElementById("soTien").value;
    let quyDoiTien = 0;
    quyDoiTien = (23500 * soTien);
    // console.log("quyDoitien", quyDoitien);
    quyDoiTien = `tiền quy đổi : ${quyDoiTien} $`;
    document.getElementById("result").innerText = quyDoiTien;
}