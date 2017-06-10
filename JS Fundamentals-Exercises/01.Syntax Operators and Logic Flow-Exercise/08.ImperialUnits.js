function unitConvertor(unit) {
    let foots = Math.floor(unit / 12);
    let inches = unit % 12;

    console.log(`${foots}'-${inches}"`);
}

unitConvertor(36);