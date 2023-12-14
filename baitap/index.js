console.log("hello")


function tinhTongLuong(){
    // alert(123)
    let tienLuong1h = document.getElementById('tienLuong1h').value;
    let soGioLam = document.getElementById('soGioLam').value;
    // console.log('tienLuong',tienLuong1h)
    // console.log('soGioLam',soGioLam)
    let tongLuong = 0;
    tongLuong = tienLuong1h * soGioLam;
 
 
    document.getElementById('tongLuong').innerHTML = "Tổng lương của bạn là :" + tongLuong;
   
 }
 

 
 let tongLuong = document.getElementById('tongLuong')
 tongLuong.style.background = "red"
 tongLuong.style.padding = "20px" 