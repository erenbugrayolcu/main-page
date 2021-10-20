const dark = document.querySelector('#closed-light');
const light = document.querySelector('#opened-light');
let background = document.querySelector('.container');

let state = 'on' 
function switchLights(){
    if(state === 'off'){
        state = 'on'
        light.style.display = 'none';
        dark.style.display = 'block';
        background.style.background = '#fff'
    }else{
        state = 'off'
        dark.style.display = 'none';
        light.style.display = 'block';
        light.style.color = '#fff'
        background.style.background = '#222'

    }

}