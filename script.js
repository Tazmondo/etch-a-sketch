let generateGrid = function (pixelCount) {
    let gridContainer = document.querySelector('#grid-container');
    let pixelLength = gridContainer.clientWidth / pixelCount;
    for(let i = 0; i < pixelCount*pixelCount; i++) {
        let newDiv = document.createElement('div')
        newDiv.style.width = pixelLength + "px";
        newDiv.style.height = pixelLength + "px";
        newDiv.classList.toggle('pixel');
        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        });
        gridContainer.appendChild(newDiv);
    }
}

generateGrid(100);