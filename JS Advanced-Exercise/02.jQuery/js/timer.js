function timer() {
    let startBtn = $('#start-timer');
    startBtn.click(startTimer);
    let pauseBtn = $('#stop-timer');
    pauseBtn.click(pauseTimer);

    let seconds = 0;
    let time = null;
    let ticking = false;

    function timeCount() {
        seconds++;
        formatOutput(seconds);
    }

    function startTimer() {
        if (!ticking) {
            time = setInterval(timeCount, 1000);
            ticking = true;
        }
    }

    function pauseTimer() {
        clearInterval(time);
        ticking = false;
    }

    function formatOutput(value) {
        let hours = ("0" + (Math.trunc(value / 3600)) % 100).slice(-2);
        let minutes = ("0" + (Math.trunc(value / 60)) % 60).slice(-2);
        let seconds = ("0" + value % 60).slice(-2);

        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }
}
