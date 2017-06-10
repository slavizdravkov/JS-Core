function multiplication(number) {
    let html = '<table border="1">\n' + '<tr><th>x</th>';

    for (let i = 1; i <= number; i++) {
        html += `<th>${i}</th>`
    }
    html += '</tr>\n';

    for (let row = 1; row <= number; row++) {
        html += '<tr>';
        for (let col = 0; col <= number; col++) {
            if (col == 0) {
                html += `<th>${row}</th>`;
                continue;
            }
            html += `<td>${row * col}</td>`;
        }
        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);
}

multiplication(5);