// document.querySelectorAll(".nav-link").forEach((item)=>{
//     item.classList.toggle(";bg-primary",item.classList.contains("active"))
// })
function timSoNguyenNhoNhat () {
    var n = 0;
    var tong = 0;
    var dk = true;
    while (tong < 10000) {
        n++;
        for (let i=1;i<=n;i++) {
            tong +=i;
        }
        if (tong < 10000) {
            tong = 0;
        } else if (tong > 10000) {
            return n;
        }
    }
}
document.getElementById("btnTinh").onclick = function () {
document.getElementById("txtNumber").innerHTML = timSoNguyenNhoNhat()
    console.log("hello");
}
document.getElementById("btnTinh2").onclick = function () {
    var x = document.getElementById("num-1").value*1;
    var n = document.getElementById("num-2").value*1 ;
    var ketQua = 0;
    for (let i=1;i<=n;i++ ) {
        ketQua += Math.pow(x,i);
    }
    console.log(ketQua);
    document.getElementById("ketQua2").innerHTML = ketQua

}
document.getElementById("btnTinh3").onclick = function () {
    var x = document.getElementById("bai3-num").value*1 
    var ketQua = 1;
    for (let i=1; i<=x ;i++) {
        ketQua*=i;
    }
    document.getElementById("bai3-ketqua").innerHTML = ketQua
}
document.getElementById("btnTaoDiv").onclick = function () {
    for (let i=1;i<=10;i++) {
        if (i%2 == 0) {
            var divChan = document.createElement("div")
            divChan.classList.add("bg-danger");
            divChan.innerText = `div chẵn ${i}`
            document.getElementById("taodiv").appendChild(divChan)
    }else if (i%2 == 1) {
        var divLe = document.createElement("div")
        divLe.classList.add("bg-primary");
        divLe.innerText = `div lẽ ${i}`
        document.getElementById("taodiv").appendChild(divLe)
        }
    } 
}
var timSoNguyen = function (x) {
    var isPrime = true;
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            isPrime = false;
            break;
        }
}   
if (!isPrime) return "";
if (isPrime) return x;
    
}
document.getElementById("btnBai5").onclick = function () {
    var num = document.getElementById("bai5-num").value*1;
    console.log("hello");
    var chuoiNguyen = "";
    for (let i=2;i<=num;i++) {
        console.log(i);
        chuoiNguyen += `${timSoNguyen(i)} `
    }
    document.getElementById("bai5-ketqua").innerHTML = chuoiNguyen; 
}
