let array = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let code = document.querySelector(".code");
let btn = document.querySelector(".btn");
let bodyBc = document.querySelector("body");

btn.addEventListener("click",() => {

let hexaCode = "#";
for(let i=0; i<6; i++){
    let random = Math.floor(Math.random() * array.length);
    hexaCode += array[random];
}
bodyBc.style.backgroundColor = hexaCode;
code.innerHTML = hexaCode;

}
)
