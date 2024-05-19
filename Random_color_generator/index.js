const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorcontainerEl = document.createElement("div");
    colorcontainerEl.classList.add("color-generator");
    containerEl.appendChild(colorcontainerEl);
    
}

const colorcontainerEls = document.querySelectorAll(".color-generator")

geenratecolorcode()

function geenratecolorcode(){
    colorcontainerEls.forEach((colorcontainerEl)=>{
        const newcolorcode = randomcolor()
        colorcontainerEl.style.backgroundColor = "#" + newcolorcode
        colorcontainerEl.innerHTML = "#"+newcolorcode
    })
}


function randomcolor(){
    const chars = "0123456789abcdef";
    const colorcodelength = 6;
    let colorcode = ""

    for (let index = 0; index < colorcodelength; index++) {
        const randomnumber=Math.floor(Math.random()*chars.length);
        colorcode += chars.substring(randomnumber,randomnumber+1);
    }
    return colorcode

}