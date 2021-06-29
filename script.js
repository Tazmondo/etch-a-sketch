let getColorFromRadio = function () {
    let rainbowButton = document.querySelector('#rainbow-option');
    let whiteButton = document.querySelector('#white-option');
    if (rainbowButton.checked) return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    else if (whiteButton.checked) return '#ffffff';
}

let generateGrid = function (pixelCount) {
    let gridContainer = document.querySelector('#grid-container');
    gridContainer.replaceChildren();

    let pixelLength = gridContainer.clientWidth / pixelCount;

    for(let i = 0; i < pixelCount*pixelCount; i++) {
        let newDiv = document.createElement('div')

        newDiv.style.width = pixelLength + "px";
        newDiv.style.height = pixelLength + "px";
        newDiv.classList.toggle('pixel');

        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = getColorFromRadio();
        });

        gridContainer.appendChild(newDiv);
    }
}

let gridSize = 16;

let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => generateGrid(gridSize));

let pixelRange = document.querySelector('#pixel-range');
pixelRange.addEventListener('change', () => {
    generateGrid(pixelRange.value);
    gridSize = pixelRange.value;
});

generateGrid(gridSize);