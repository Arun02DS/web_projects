const textareaEl = document.getElementById("textarea");

const totalcounterEl = document.getElementById("total-counter");
const remainingcounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",()=>{
    updatecounter();
});

updatecounter();

function updatecounter(){
    totalcounterEl.innerText = textareaEl.value.length;

    remainingcounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}