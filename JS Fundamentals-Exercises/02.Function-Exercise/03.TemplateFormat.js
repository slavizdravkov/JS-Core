function templateFormat(arr) {
    function removeQuotes(string) {
        let output =  string.substr(0);
        return output.slice(0, string.length);
    }

    function generateXmlBody(question, answer) {
        let output = `  <question>\n    ${question}\n  </question>\n`;
        output += `  <answer>\n    ${answer}\n  </answer>\n`;

        return output;

    }

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';

    for (let i = 0; i < arr.length; i += 2) {
        let question = removeQuotes(arr[i]);
        let answer = removeQuotes(arr[i + 1]);
        xml += generateXmlBody(question, answer);
    }

    xml += '</quiz>';

    console.log(xml);
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);
//console.log(removeQuotes('"Who was the forty-second president of the U.S.A.?"'));
// generateXmlBody('Who was the forty-second president of the U.S.A.?', 'William Jefferson Clinton');

