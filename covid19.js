// Understand covid 19 with python and javascript part 2/2

const personActions = ["Coughing", "Sneezing", "Speaking", "Singing"];

const normalSymptoms = {
    soreThroat: "a sorethroat",
    runningNose: "running nose",
    fever: "fever",
    fatigue: "fatigue",
    currentSymptom: function (key) {
        return this[key];
    },
    describe: function (days, key) {
        console.log(`For the last ${days} days i have only experience ${this.currentSymptom(key)}`);
    }
};

const alarmingSymptoms = {
    lostOfTaste: 'lost my taste',
    lostOfSmell: 'lost my sense of smell',
    severFever: 'I have sever fever',

    currentSymptom: (key) => this[key],
    describe: function (days, key) {
        console.log(`For the last ${days} days i have only experience ${this.currentSymptom(key)}`);
    }
};



class Person {
    constructor(name, age, healhStatus, wearingMask) {
        this.name = name;
        this.healhStatus = healhStatus;
        this.age = age;
        this.wearingMask = wearingMask;
        this.action = personActions[Math.floor(Math.random() * personActions.length)];
    }

    treatment(isSevere) {
        if (!!isSevere) {
            console.log("Go to the hospital");
        } else {
            console.log("Please do have some rest and basic home treaments");
        }
    }

    testCovid() {
        console.log(`${this.name} has tested ${this.healhStatus}`);
    }

    infect(person) {
        if (person.healhStatus == 'negative') {
            person.infected();
            console.log('sadly you have been infected by the virus');
        }
    }

    infected() {
        this.healhStatus = 'positive';
    }

    showSymptomes(daysSinceContractingTheVirus) {
        if (this.healhStatus == 'positive') {
            if (daysSinceContractingTheVirus <= 7) {

                const listNormalSymptomes = Object.keys(normalSymptoms).map((el) => {
                    console.log("Nice nice", el);
                    if (!['describe', 'currentSymptom'].includes(el)) {
                        return el;
                    } else {
                        return 'soreThroat';
                    }
                });
                console.log(listNormalSymptomes);
                const currentSymptom = listNormalSymptomes[Math.floor(Math.random() * listNormalSymptomes.length)];
                normalSymptoms.describe(daysSinceContractingTheVirus, currentSymptom);
            } else {
                const listAlarmingSymptomes = Object.keys(alarmingSymptoms).map((el) => {

                    if (!['describe', 'currentSymptom'].includes(el)) {
                        return el;
                    } else {
                        return 'severFever';
                    }
                });
                const currentSymptom = listAlarmingSymptomes[Math.floor(Math.random() * listAlarmingSymptomes.length)];
                alarmingSymptoms.describe(daysSinceContractingTheVirus, currentSymptom);
            }
        }
    }
}

class CoronaVirusBaseClass {
    constructor(virusName) {
        this.name = virusName;
    }
}

class SarsCovid extends CoronaVirusBaseClass {
    constructor() {
        super('Servere Acute Respiratory Syndrome');
    }
}

class MersCovid extends CoronaVirusBaseClass {
    constructor() {
        super('Middle East Respiratory Syndrome');
    }
}

class Covid19 extends CoronaVirusBaseClass {
    constructor() {
        super('Corona virus 2019');
    }

    transmission(infectedPerson, notYetInfectedPerson, socialDistance) {
        if (socialDistance < 2 && infectedPerson.wearingMask == false) {
            infectedPerson.infect(notYetInfectedPerson);
        } else {
            console.log("Social Distancing is good and/or wearing of the mask helps to prevent the spreading of the disease");
        }
    }
}

const virus = new Covid19();
const sickPerson = new Person('Person 1', 50, 'positive', false);
const notYetSickPerson = new Person('Person not sick', 35, 'negative', false);
virus.transmission(sickPerson, notYetSickPerson, 1);

notYetSickPerson.testCovid();
notYetSickPerson.showSymptomes(3);