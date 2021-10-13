function hideShow(){

    var btn1 = document.getElementById('buton1');
    var btn2 = document.getElementById('buton2');
    var btn3 = document.getElementById('buton3');
    var btn4 = document.getElementById('buton4');
    var btn5 = document.getElementById('buton5');
    var btn6 = document.getElementById('buton6');
    var btn7 = document.getElementById('buton7');
    var btn8 = document.getElementById('buton8');
    var btn9 = document.getElementById('buton9');
    var btn10 = document.getElementById('buton10');
    var btn11 = document.getElementById('buton11');
    var btn12 = document.getElementById('buton12');

    if(btn1.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn12.style.visibility = "visible";
    }));
    if(btn2.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn8.style.visibility = "visible";
    }));
    if(btn3.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn10.style.visibility = "visible";
    }));
    if(btn4.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn6.style.visibility = "visible";
    }));
    if(btn5.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn1.style.visibility = "visible";
    }));
    if(btn6.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn2.style.visibility = "visible";
    }));
    if(btn7.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn5.style.visibility = "visible";
    }));
    if(btn8.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn7.style.visibility = "visible";
    }));
    if(btn9.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn4.style.visibility = "visible";
    }));
    if(btn10.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn9.style.visibility = "visible";
    }));
    if(btn11.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn3.style.visibility = "visible";
    }));
    if(btn12.addEventListener("mouseover", function(hideShow){
        this.style.visibility = "hidden";
        btn11.style.visibility = "visible";
    }));
}
