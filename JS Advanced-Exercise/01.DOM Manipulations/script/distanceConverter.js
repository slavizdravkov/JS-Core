function attachEventsListeners() {
    let conversionRates = {'km': 1000, 'm': 1, 'cm': 0.01, 'mm': 0.001, 'mi': 1609.34, 'yrd': 0.9144, 'ft': 0.3048, 'in': 0.0254};
    document.getElementById('convert').addEventListener('click', convert);

    function convert(event) {
        let inputDistance = document.getElementById('inputDistance').value;
        let outputDistance = document.getElementById('outputDistance');
        let inputUnit = document.getElementById('inputUnits').value;
        let distanceInMeters = conversionRates[inputUnit];
        let outputUnit = document.getElementById('outputUnits').value;

        switch (outputUnit) {
            case 'km':
                outputDistance.value = inputDistance * (distanceInMeters / 1000);
                break
            case 'm':
                outputDistance.value = inputDistance * distanceInMeters;
                break
            case 'cm':
                outputDistance.value = inputDistance * (distanceInMeters * 100);
                break
            case 'mm':
                outputDistance.value = inputDistance * (distanceInMeters * 1000);
                break
            case 'mi':
                outputDistance.value = inputDistance * (distanceInMeters / 1609.34);
                break
            case 'yrd':
                outputDistance.value = inputDistance * (distanceInMeters / 0.9144);
                break
            case 'ft':
                outputDistance.value = inputDistance * (distanceInMeters / 0.3048);
                break
            case 'in':
                outputDistance.value = inputDistance * (distanceInMeters / 0.0254);
                break
        }
        //console.dir(distanceInMeters);
    }
}

