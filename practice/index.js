var header = document.getElementById("Mydiv") 
var btns = header.getElementsByClassName("btn");
for(var i=0;i<btns.length;i++){
    btn[i].addEventListener("click",function(){

        var current =
        document.getElementsByClassName("active");
        current[0].className =
        current[0].className.replace("active","");
        this.className +="active";

    });
}