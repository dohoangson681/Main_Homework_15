var diemChuan ; 
var diemMon1 ; 
var diemMon2 ;
var diemMon3 ; 
var doiTuongThi ; 
var khuVucThi ; 
function result1(diemChuan , diemMon1 , diemMon2 , diemMon3 , doiTuongThi , khuVucThi) {
    diemChuan = Number(document.getElementById("diemChuan").value) ; 
    diemMon1 = Number(document.getElementById("diemThi1").value) ;
    diemMon2 = Number(document.getElementById("diemThi2").value) ;
    diemMon3 = Number(document.getElementById("diemThi3").value) ;
    doiTuongThi = document.getElementById("doiTuong").value ; 
    khuVucThi = document.getElementById("khuVuc").value ; 
    var diemTong3Mon = diemMon1 + diemMon2 + diemMon3 ;
     
    var diemUuTienDoiTuong ; 
    if(doiTuongThi == "-1"){
        alert("Chọn đối tượng thi.")
    }else if(doiTuongThi == "0"){
        diemUuTienDoiTuong = 0 ;
    }
    else if(doiTuongThi == "1"){
        diemUuTienDoiTuong = 2.5 ;
    }
    else if(doiTuongThi == "2"){
        diemUuTienDoiTuong = 1.5 ;
    }else {
        diemUuTienDoiTuong = 1  ;
    }

    var diemUuTienKhuVuc  ;
    if(khuVucThi == "-1"){
        alert("Chọn khu vực thi.") ; 
    }else if(khuVucThi == "0"){
        diemUuTienKhuVuc = 0 ;
    }
    else if(khuVucThi == "1"){
        diemUuTienKhuVuc = 2 ;
    }
    else if(khuVucThi == "2"){
        diemUuTienKhuVuc = 1 ;
    }else {
        diemUuTienKhuVuc = 0.5  ;
    }

    var diemTong  = 0  ; 
    diemTong = diemTong3Mon + diemUuTienDoiTuong + diemUuTienKhuVuc ; 
    if(khuVucThi != "-1" && doiTuongThi != "-1" ){
    if(diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0 && diemTong >= diemChuan){
        document.getElementById("resultBai1").innerHTML ="Điểm của bạn là " + diemTong + ".Bạn đã trúng tuyển."
    }else if(diemMon1 != 0 && diemMon2 != 0 && diemMon3 != 0 && diemTong < diemChuan){
        document.getElementById("resultBai1").innerHTML ="Điểm của bạn là " + diemTong + ".Bạn đã trượt."
    }else if(diemMon1 == 0 || diemMon2 != 0 || diemMon3 != 0 && diemTong >= diemChuan){
        document.getElementById("resultBai1").innerHTML ="Điểm của bạn là " + diemTong + ".Bạn đã trượt do có bài đạt điểm 0 dù điểm tổng cao hơn điểm chuẩn."
    }else {
        document.getElementById("resultBai1").innerHTML ="Điểm của bạn là " + diemTong + ".Bạn đã trượt."
    }
}else {
    alert("Chọn đầy đủ khu vực và đối tượng thi.") ; 
}
    console.log(diemTong) ; 

}
document.getElementById("btnBai1").onclick = result1 ; 