/*
* @Author: langkai1
* @Date:   2018-05-20 11:20:10
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-29 10:42:15
*/

window.onload=function(){
  var tel=document.querySelector("#txt1");
  $("#yzm").on("click",function(){
     console.log(tel.value);
     var i=tel.value/100000000;
     console.log(i);
     if (i>130&&i<140||i>145&&i<147||i>147&&i<149||i>150&&i<154||i>155&&i<160||i>166&&i<167||i>170&&i<172||i>173&&i<174||i>176&&i<179||i>180&&i<190||i>198&&i<199) 
     {
       $("#s").css({"display":"block"});
       $("#shouji").css({"display":"none"});
        var yzm=document.querySelector("#yzm");
        var j=30;
        setInterval(function(){
           yzm.innerHTML=j+"s";
           j--;
           if (j==0||j<0) {
             yzm.innerHTML="获取验证码";
              clearInterval();
           }
        },1000)
        

     }
     else{
       $("#shouji").css({"display":"none"});
       $("#s").css({"display":"none"});
       $("#qingchu").css({"display":"block"});
       $(".error").css({"display":"block"});
     };
      $("#txt1").on("click",function(){
         $("#qingchu").css({"display":"none"});
         $(".error").css({"display":"none"});
         $("#shouji").css({"display":"block"});
         $("#s").css({"display":"none"});
      })
  })
  function tran(){
    if(1)
    {  
          $("#s3").on("click",function(){
               $("#sss").attr("type", "text");
               $("#s3").on("click",function(){
                  $("#sss").attr("type", "password");  
                 });
             });

         }
  }
   $("#sss").on("click",function(){
        $("#ss").css({"display":"none"});
        $("#s3").css({"display":"block"});
        tran();
   })
  
}