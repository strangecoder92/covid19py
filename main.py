
# Type of coronavirus SARS MERS COVID

from enum import Enum
import random

actions = ["Coughing", "Sneezing", "Speaking", "Singing"]


class NormalSymptoms(Enum):
    sorethroat = "a sore throat"
    runningNose = "running noe"
    feve = "fever"
    fatigue = "fatigue"

    def describe(self, days):
        print(f'For the last {days} days i have only experience {self.value}')

class AlarmingSymptoms(Enum):
    lostOftaste = "lost my state"
    lostOfSmell = "lost my sense of smell"
    severFever = "I have sever fever"

    def describe(self, days):
        print(f'Among others symptoms i also {self.value}')



class Person():
    myAction = ''

    def __init__(self, name, age, healthStatus, wearingMask) :
        self.name = name
        self.healthStatus = healthStatus
        self.wearingMask = wearingMask
        self.myAction = actions[random.randrange(0,len(actions) + 1)]

    
    def treatment(self, isSevere = None):
        if isSevere is not None:
            print("Go to the Hospital")
        else:
            print("Please do have some rest and basic home treaments")
    def testCovid(self):
        print(f'{self.name} has tested {self.healthStatus}')

    def infect(self, person):
        print(f'{person.healthStatus}')
        if person.healthStatus == "negative":
            print("Sadly you have been infected by the virus")
            person.infected()

    def infected(self):
        self.healthStatus = "positive"

    def showSymptoms(self, daysSinceTranctionofTheVirus):
        if self.healthStatus == "positive":
            if(daysSinceTranctionofTheVirus in range(7)):
                listOfAllSymptomes = list(NormalSymptoms)
                mySymptome = listOfAllSymptomes[random.randrange(0, len(listOfAllSymptomes) + 1)]
                mySymptome.describe(daysSinceTranctionofTheVirus)
                self.treatment()
            else:
                listOfAllSymptomes = list(AlarmingSymptoms)
                mySymptome = listOfAllSymptomes[random.randrange(0, len(listOfAllSymptomes) + 1)]
                mySymptome.describe(daysSinceTranctionofTheVirus)
                self.treatment()


class CoronaVirusBaseClass():
    def __init__(self, name):
        self.name = name


class SarsCov(CoronaVirusBaseClass):
    def __init__(self):
        super().__init__("Severe Acute Respiratory Syndrome")

class MersCov(CoronaVirusBaseClass):
    def __init__(self):
        super().__init__("Middle East Respiratory Syndrome")

class Covid19(CoronaVirusBaseClass):
    def __init__(self):
        super().__init__("Corona Virus 2019")

    def transmission(self, infectedPerson, notYetInfectedPerson, socialDistance):
        if(socialDistance < 2 and infectedPerson.wearingMask == False):
            infectedPerson.infect(notYetInfectedPerson)
        else:
            print("Social distancing is good and/or wearing a mask is a good thing too")


virus = Covid19()
sickPerson = Person('Person 1', 50, 'positive', False)
notYetSickPerson = Person('Person 2', 35, 'negative', False)

virus.transmission(sickPerson, notYetSickPerson, 1)

notYetSickPerson.testCovid()
notYetSickPerson.showSymptoms(3)


