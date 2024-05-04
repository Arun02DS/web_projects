const imagecontainerEl = document.querySelector(".image-container");

const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click", () => {
    imgnum = 10;
    NewImageCreate();
});

function NewImageCreate() {
    for (let index = 0; index < imgnum; index++) {
        const newimgE1 = document.createElement("img");
        newimgE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;

        imagecontainerEl.appendChild(newimgE1);

    }

}