/**
 * Bài tập tính tiền cáp
 * có 2 loại khách hàng : nhà dân và doanh nghiệp
 * tiền cáp nhà dân = Phí hóa đơn(4.5$) + Phí dịch vụ cơ bản(20.5$) + 7.5$* số kênh cao cấp
 * 
 * tiền cáp doanh nghiệp = Phí hóa đơn(15$) + 75$ + (số kết nối - 10)*5 + 50$ * số kênh cao cấp 
 */
var customer ; 
var customerCode ; 
var highChannel ; 
var soKN ; 

var feeBillDan = 4.5 ; 
var feeBasicDan = 20.5 ; 
var feeHighDan = 7.5 ; 

var feeBillDN = 15 ; 
var feeBasicDN1_10 = 75 ; 
var feeBasicDN_11 = 5 ;
var feeHighDN = 50 ;

function tienCap(customer , customerCode , highChannel ,soKN) {
    customer = document.getElementById("customer").value ; 
    customerCode = document.getElementById("codeCustomer").value ;
    highChannel = Number(document.getElementById("highChannel").value) ;
    soKN = Number(document.getElementById("soKN").value) ; 
    var SUM  ; 
    if(customer == "0"){
        alert("Vui lòng chọn loại khác hàng ")
    }else if(customer == "1"){
        SUM = sumDan(highChannel) ; 
    }else {
         SUM = sumDN(highChannel , soKN) ; 
    }
    console.log(SUM) ; 
    if(customer == "1"){
        document.getElementById("resutlBai4").innerHTML = "Khách hàng có mã " + customerCode + " phải trả số tiền cáp là " + SUM + "$" ; 
    }else{
        document.getElementById("resutlBai4").innerHTML = "Doanh nghiêp có mã " + customerCode + " phải trả số tiền cáp là " + SUM + "$" ;
    }
    
}
document.getElementById("customer").onchange = cusSelect ; 
document.getElementById("btnBai4").onclick = tienCap ; 
function cusSelect(customer){
    customer =  document.getElementById("customer").value ; 
    if(customer == "2"){
        document.getElementById("soKNDiv").style.display = "block" ; 
    }else {
        document.getElementById("soKNDiv").style.display = "none" ; 
    }
}
function sumDan( highChannel ) {
    return feeBillDan + feeBasicDan + feeHighDan * highChannel ; 
}
function sumDN( highChannel , soKN) {
    if(soKN >= 0 && soKN <= 10){
        return feeBillDN + feeBasicDN1_10 + feeHighDN * highChannel ; 
    }else {
        return feeBillDN + feeBasicDN1_10 + (soKN-10) *feeBasicDN_11 + feeHighDN * highChannel ; 
    }
}
