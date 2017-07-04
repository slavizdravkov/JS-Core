function solve(name, age, weight, height) {

    let person =  {
        'name': name,
        'personalInfo': getPersonalInfo(age, weight, height),
        'BMI': calculateBmi(weight, height),
        'status': defineStatus(calculateBmi(weight, height))
    };

    if (person.status === 'obese') {
        person['recommendation'] = 'admission required';
    }

    function getPersonalInfo(age, weight, height) {
        let info = {};
        info['age'] = age;
        info['weight'] = weight;
        info['height'] = height;

        return info;
    }


    function calculateBmi(weight, height) {
        return Math.round(weight / Math.pow(height / 100, 2));
    }

    function defineStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        }

        if (bmi < 25) {
            return 'normal';
        }

        if (bmi < 30) {
            return 'overweight';
        }

        if (bmi >= 30) {
            return 'obese';
        }
    }

    return person;
}

console.log(solve('Honey Boo Boo', 9, 57, 137));