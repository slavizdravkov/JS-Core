function nowPlaying(inputArray) {
    let [trackName, artistName, duration] = inputArray;

    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09']);