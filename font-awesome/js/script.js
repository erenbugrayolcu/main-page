const dark = document.querySelector('#closed-light');
const light = document.querySelector('#opened-light');
let text = document.querySelector('.text');
let background = document.querySelector('.container');

let state = 'on' 
function switchLights(){
    if(state === 'off'){
        state = 'on'
        light.style.display = 'none';
        dark.style.display = 'block';
        background.style.background = '#fff'
        text.style.color ='#000';
    }else{
        state = 'off'
        dark.style.display = 'none';
        light.style.display = 'block';
        light.style.color = '#fff'
        background.style.background = '#222'
        text.style.color ='#fff';
    }

}