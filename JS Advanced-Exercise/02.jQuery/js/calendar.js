function calendar(array) {
    let [day, month, year] = array;
    let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let currentDate = new Date(year, month - 1, day);
    let currentDay = currentDate.getDate();
    let daysInMonth = new Date(year, month, 0).getDate();
    let firstDay = new Date(year, month - 1, 1).getDay();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.toLocaleString('en', {month:"long"});
    let emptyCells = 0;

    let container = $('#content');
    let table = $('<table>');
    $(`<caption>${currentMonth} ${currentYear}</caption>`).appendTo(table);
    let tBody = $('<tbody>');
    tBody.appendTo(table);
    let tableRow = $('<tr>');
    for (let i = 0; i < daysOfWeek.length; i++) {
        $(`<th>${daysOfWeek[i]}</th>`).appendTo(tableRow);
    }
    tableRow.appendTo(tBody);

    if (firstDay > 1) {
        emptyCells = firstDay - 1;
    }
    if (firstDay === 0) {
        emptyCells = 6;
    }
    let tableRows = Math.ceil((daysInMonth + emptyCells) / 7);
    let tableDay = 1;

    for (let row = 0; row < tableRows; row++) {
        let tr = $('<tr>');
        for (let col = 0; col <= 6; col++) {
            if (emptyCells > 0) {
                $('<td>').appendTo(tr);
                emptyCells--;
                continue;
            }
            if (tableDay > daysInMonth) {
                $('<td>').appendTo(tr);
                continue;
            }
            if (tableDay === day) {
                $(`<td class="today">${tableDay}</td>`).appendTo(tr);
            } else {
                $(`<td>${tableDay}</td>`).appendTo(tr);
            }
            tableDay++;
        }
        tr.appendTo(tBody);

    }
    container.append(table);
    // console.log(currentDate);
    // console.log(daysInMonth);
    // console.log(firstDay);
    // console.log(new Date(year, month, 1));
}
