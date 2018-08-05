/**
 * Created by Administrator on 2018/8/4/004.
 */
window.onload=function () {
    let close=document.querySelector(".close");
    let payy=document.querySelector(".payy");
    let box3=document.querySelector(".box3");
    close.onclick=function () {
        payy.style.display="none";
    }
    box3.onclick=function () {
        payy.style.display="block";
    }
}