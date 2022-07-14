/**
 * Bài tập tính tiền điện
 */
var userName ;
var kWNumber ; 
var price1_50 = 500 ; 
var price51_100 = 650 ; 
var price101_200 = 850 ; 
var price201_350 = 1100 ; 
var price_out350 = 1300 ; 
function result3(userName , kWNumber ) {
    userName= document.getElementById("eUser").value ; 
    kWNumber = Number(document.getElementById("kWNumber").value) ;
    if(userName == ""){
        alert("Nhập tên đê !") ;
    }else {
        var sum = cal(kWNumber) ; 
        console.log(sum) ;
        document.getElementById("resultBai2").innerHTML ="Chào " + userName +  ".Số tiền điện bạn phải trả là : " + sum ; 
    }
     
    

}
function cal(kWNumber) {
    if(kWNumber <=  50) return kWNumber *  price1_50 ; 
    else if(kWNumber > 50 && kWNumber <= 100) return 50 * price1_50 + (kWNumber -50) * price51_100 ; 
    else if(kWNumber > 100 && kWNumber <= 200) return 50 * price1_50 + 50 * price51_100 + (kWNumber - 100) * price101_200 ; 
    else if(kWNumber > 200 && kWNumber <= 350) return 50 * price1_50 + 50 * price51_100 + 100 * price101_200 + (kWNumber - 200) * price201_350 ; 
    else return 50 * price1_50 + 50 * price51_100 + 100 * price101_200 + 150 * price201_350 + (kWNumber - 350) * price_out350 ; 
}
document.getElementById("btnBai2").onclick = result3 ; 