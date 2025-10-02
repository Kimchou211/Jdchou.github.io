const body = document.body;
const array_a = document.getElementsByTagName("a");
const array_h4 = document.getElementsByTagName("h4");
const logo_span = document.getElementsByTagName("span");


function changemode(){
    body.classList.toggle("blackMod");
    for(let i = 0; i<array_a.length; i++){
        array_a[i].classList.toggle("Modecolor");
    }
    for(let i = 0; i<array_h4.length; i++){
        array_h4[i].classList.toggle("Modecolor");
    }
    for(let i = 0; i<logo_span.length; i++){
        logo_span[i].classList.toggle("Modecolor");
    }
}