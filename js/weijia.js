/**
 * Created by Administrator on 2018/8/2/002.
 */
window.onload=function () {
    let mmm=document.getElementsByClassName("mmm");
    let times=[0,0,0,0,0,0];
    let foot=document.querySelectorAll("footer");
    console.log(foot);
    for (let i=0;i<mmm.length;i++){
        let add=mmm[i].querySelector(".add");
        let jian=add.querySelectorAll(".ad");
        let span=add.querySelector("span");
        let js=document.querySelector(".js");
        let yuan=document.querySelector(".yuan");
        var img=jian[0].querySelector("img");
         if(span.innerText==0) {
            span.style.color = "transparent";
        }
        jian[0].onmousedown=function () {

            if(span.innerText==0){
                span.style.color = "transparent";
                return
            }
            span.innerText--;
            times[i]=parseInt(span.innerText);
            var num=times[0]+times[1]+times[2]+times[3]+times[4]+times[5];
            yuan.innerText="￥"+9*num;
            js.innerText=num;
            if (num==0){
                foot[1].style.display="block";
                foot[0].style.display="none";
            }

        }
        jian[1].onclick=function () {
             foot[1].style.display="none";
             foot[0].style.display="block";
            img.style.display="block";
            span.style.color="black";
            span.innerText++;
            times[i]=parseInt(span.innerText);
            var num=times[0]+times[1]+times[2]+times[3]+times[4]+times[5];
            yuan.innerText="￥"+9*num;
            js.innerText=num;
            console.log(times);
        }
    }
}