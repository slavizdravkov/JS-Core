function compoundInterest(array) {
    let [principalSum, rateInPercent, compoundingPeriod, totalTimespan] = array;
    let interestRate = rateInPercent / 100;
    let frequency = 12 / compoundingPeriod;
    let interest = principalSum * Math.pow(1 + interestRate / frequency, frequency * totalTimespan);

    console.log(interest.toFixed(2));
}

compoundInterest([100000, 5, 12, 25]);