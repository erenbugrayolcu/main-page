function sendForm(){
    const username = document.getElementById('uName');
    const email = document.getElementById('eMail');
    const subject = document.getElementById('sub');
    const message = document.getElementById('mess');

    if(username.value === ""){
        username.style.borderBottom = "1px solid red";
    }else{
        username.style.borderBottom = "1px solid green";
    }

    if(email.value === ""){
        email.style.borderBottom = "1px solid red";
    }else{
        email.style.borderBottom = "1px solid green";
    }

    if(subject.value === ""){
        subject.style.borderBottom = "1px solid red";
    }else{
        subject.style.borderBottom = "1px solid green";
    }

    if(message.value === ""){
        message.style.borderBottom = "1px solid red";
    }else{
        message.style.borderBottom = "1px solid green";
    }
}