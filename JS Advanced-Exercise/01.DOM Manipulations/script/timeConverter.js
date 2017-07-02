function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(event) {
        let sourceElement = event.target.parentNode.childNodes[3];
        let elementValue = Number(sourceElement.value);
        let elementId = sourceElement.getAttribute('id');

        switch (elementId) {
            case 'days':
                document.getElementById('hours').value = elementValue * 24;
                document.getElementById('minutes').value = elementValue * 24 * 60;
                document.getElementById('seconds').value = elementValue * 24 * 3600;
                break;
            case 'hours':
                document.getElementById('days').value = elementValue / 24;
                document.getElementById('minutes').value = elementValue  * 60;
                document.getElementById('seconds').value = elementValue  * 3600;
                break;
            case 'minutes':
                document.getElementById('days').value = elementValue / (24 * 60);
                document.getElementById('hours').value = elementValue  / 60;
                document.getElementById('seconds').value = elementValue  * 60;
                break;
            case 'seconds':
                document.getElementById('days').value = elementValue / (24 * 3600);
                document.getElementById('hours').value = elementValue  / 3600;
                document.getElementById('minutes').value = elementValue  / 60;
                break;
        }
        //console.dir(elementId);
    }
}

