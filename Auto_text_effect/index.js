const containerE1 = document.querySelector(".container");

const career = ["developer","mechanical engineer","Instructor","Leader","coder","machine learning engineer"];

let careerIndex=0;

let characterindex=0;

updatetext();

function updatetext(){
    characterindex++;
    containerE1.innerHTML=`
    <h1>I am ${career[careerIndex].slice(0,1)=== "I" ? "an" : "a"} ${career[careerIndex].slice(0,characterindex)}</h1>
    `;
    
    if (characterindex === career[careerIndex].length){
        careerIndex++;
        characterindex=0;
    }

    if (careerIndex === career.length){
        careerIndex=0;
    }
    setTimeout(updatetext, 400);

}

