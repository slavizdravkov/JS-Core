function solve(arr) {
    let html = "<table>\n";

    function htmlEscape(text) {
        if (Number(text) === text) {
            return text;
        }
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    for (let jsonLine of arr) {
        let line = JSON.parse(jsonLine);
        html += "   <tr>\n";
        html += `       <td>${htmlEscape(line["name"])}</td>\n`;
        html += `       <td>${htmlEscape(line["position"])}</td>\n`;
        html += `       <td>${line["salary"]}</td>\n`;
        html += "   <tr>\n";
    }

    html += "</table>";

    console.log(html);
}

solve(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'

    ]
);