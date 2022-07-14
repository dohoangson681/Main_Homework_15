/**
 * Tính thuế thu nhập cá nhân
 * Input : tên , thu nhập / năm , số người phụ thuộc
 * Thu nhập chịu thuế = tổng thu nhập năm = 4tr - số người phụ thuộc * 1.6tr
 */
var userName  ;
var userIncome ; 
var ngPT ; 
function tinhThue(userName , userIncome , ngPT) {
    userName = document.getElementById("userName3").value ; 
    userIncome = Number(document.getElementById("userIncome").value) ; 
    ngPT = Number(document.getElementById("ngPT").value) ;
    var thuNhapChiuThue = ThuNhapChiuThue(userIncome , ngPT ) ;
    var thueSuat = ThueSuat(thuNhapChiuThue) ; 
    document.getElementById("resultBai3").innerHTML ="Tiền thuế cá nhân của " + userName + " là " + thueSuat + " VND" ; 
    console.log(ngPT) ; 
}
function ThuNhapChiuThue(userIncome , ngPT ) {
    return userIncome - 4e+6 - 1.6e+6 * ngPT ; 
}
function ThueSuat(thuNhapChiuThue) {
    if(thuNhapChiuThue > 0 && thuNhapChiuThue <= 60e+6) return thuNhapChiuThue*(5/100) ; 
    else if(thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6)  return thuNhapChiuThue*(10/100) ; 
    else if(thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6)  return thuNhapChiuThue*(15/100) ; 
    else if(thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6)  return thuNhapChiuThue*(20/100) ; 
    else if(thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6)  return thuNhapChiuThue*(25/100) ; 
    else if(thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6)  return thuNhapChiuThue*(30/100) ; 
    else return thuNhapChiuThue*(35/100) ; 
}
document.getElementById("btnBai3").onclick = tinhThue ; 