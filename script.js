var column = document.getElementById ('column')
var inRow = document.getElementById ('row')

function add() {
    var tableHTML = '<table>'
    for(row = 1; row <= inRow.value; row++){
        tableHTML += '<tr>';
        for(col = 1; col <= column.value; col++){
            tableHTML += `<td>${col} + ${row} = ${parseFloat(col) + parseFloat(row)}</td>`
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    document.getElementById('tableContainer').innerHTML = tableHTML;
}

function minus() {
    var tableHTML = '<table>'
    for(row = 1; row <= inRow.value; row++){
        tableHTML += '<tr>';
        for(col = 1; col <= column.value; col++){
            tableHTML += `<td>${col} - ${row} = ${col - row}</td>`
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    document.getElementById('tableContainer').innerHTML = tableHTML;
}

function divide() {
    var tableHTML = '<table>'
    for(row = 1; row <= inRow.value; row++){
        tableHTML += '<tr>';
        for(col = 1; col <= column.value; col++){
            tableHTML += `<td>${col} / ${row} = ${col / row}</td>`
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    document.getElementById('tableContainer').innerHTML = tableHTML;
}

function times() {
    var tableHTML = '<table>'
    for(row = 1; row <= inRow.value; row++){
        tableHTML += '<tr>';
        for(col = 1; col <= column.value; col++){
            tableHTML += `<td>${col} * ${row} = ${col * row}</td>`
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    document.getElementById('tableContainer').innerHTML = tableHTML;
}

const click = document.getElementById ('check')
const table = document.getElementById ('tableContainer')

click.addEventListener('click', () =>{
    table.classList.remove('d-none');
    table.classList.add('d-block');
})