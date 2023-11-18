const convas = document.querySelector('.grid-container');

let gridResolution = 16;

function generateDivs(gridResolution) {
    for(let i = 1; i <= gridResolution; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        convas.appendChild(column);
        for(let k = 1; k <= gridResolution; k++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            column.appendChild(cell);
        };
    };
};

generateDivs(gridResolution);