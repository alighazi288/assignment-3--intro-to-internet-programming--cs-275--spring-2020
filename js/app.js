let cells = document.getElementsByTagName(`td`);
let cellA = cells.item(0);
let cellB = cells.item(1);
let cellC = cells.item(2);
let cellD = cells.item(3);

let rotateCellA = () => {
    if (cellA.style.transform != `rotate(180deg)`) {
        cellA.style.transform = `rotate(180deg)`;
        cellA.style.color = `blue`;
    }
    else
        rotateBackA(cellA.style.color = `black`);
        rotateBackB(cellB.style.color = `black`);
        rotateBackC(cellC.style.color = `black`);
        rotateBackD(cellD.style.color = `black`);
}

let rotateBackA = () => {
    cellA.style.transform = `rotate(0deg)`;
}

let rotateCellB = () => {
    if (cellB.style.transform != `rotate(180deg)`) {
        cellB.style.transform = `rotate(180deg)`;
        cellB.style.color = `blue`;
    }
    else
        rotateBackB(cellB.style.color = `black`);
        rotateBackA(cellA.style.color = `black`);
        rotateBackC(cellC.style.color = `black`);
        rotateBackD(cellD.style.color = `black`);
}

let rotateBackB = () => {
    cellB.style.transform = `rotate(0deg)`;
}

let rotateCellC = () => {
    if (cellC.style.transform != `rotate(180deg)`) {
        cellC.style.transform = `rotate(180deg)`;
        cellC.style.color = `blue`;
    }
    else
        rotateBackC(cellC.style.color = `black`);
        rotateBackA(cellA.style.color = `black`);
        rotateBackB(cellB.style.color = `black`);
        rotateBackD(cellD.style.color = `black`);
}

let rotateBackC = () => {
    cellC.style.transform = `rotate(0deg)`;
}

let rotateCellD = () => {
    if (cellD.style.transform != `rotate(180deg)`) {
        cellD.style.transform = `rotate(180deg)`;
        cellD.style.color = `blue`;
    }
    else
        rotateBackD(cellD.style.color = `black`);
        rotateBackA(cellA.style.color = `black`);
        rotateBackB(cellB.style.color = `black`);
        rotateBackC(cellC.style.color = `black`);

}

let rotateBackD = () => {
    cellD.style.transform = `rotate(0deg)`;
};

cellA.addEventListener(`click`,rotateCellA);
cellB.addEventListener(`click`,rotateCellB);
cellC.addEventListener(`click`,rotateCellC);
cellD.addEventListener(`click`,rotateCellD);
