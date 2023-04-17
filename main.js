class OrcSentence {
    constructor(idn, orc, eng) {
        this.idn = idn ; 
        this.orc = orc ; 
        this.eng = eng ;
    } 

    get getidn() {
        return this.idn ;
    }


    get getorc() {
        return this.orc;
    }

    get geteng() {
        return this.eng ;
    }

}

const one = new OrcSentence(1, "Aka'Magosh", "A blessing on you and yours");
const two = new OrcSentence(2, "Bin mog g'thazag cha", "I will protect you");
const three = new OrcSentence(3, "Dae'mon", "Twited soul");
const four = new OrcSentence(4, "Dra'gora", "Draenor's Honor");
const five = new OrcSentence(5, "Dranosh", "Heart of Draenor");
const six = new OrcSentence(6, "Garrosh", "Warrior's Heart");
const seven = new OrcSentence(7, "Gol'Kosh!", "By my axe!");
const eight = new OrcSentence(8, "Gor'krosh", "The Long Knives");
const nine = new OrcSentence(9, "Grombolar", "Bowels of the giant");
const ten = new OrcSentence(10, "Grommash", "The Giant's Heart");
const eleven = new OrcSentence(11, "Kagh!", "Run!");
const twelve = new OrcSentence(12, "Lohn'goron", "Hero's sojourn");
const thirteen = new OrcSentence(13, "Lok-Narash!", "To Arms!");
const fourteen = new OrcSentence(14, "Lok-Regar", "Ready for orders");
const fifteen = new OrcSentence(15, "Lok-tar!", "Victory!");
const sixteen = new OrcSentence(16, "Lok-tar ogar!", "Victory or death!");
const seventeen = new OrcSentence(17, "Lok'osh", "Song of the heart");
const eighteen = new OrcSentence(18, "Mag'har", "Uncorrupted");
const nineteen = new OrcSentence(19,"Mak'gora", "Duel of Honor");
const twenty = new OrcSentence(20, "Mak'Rogahn", "Duel of will");
const twentyone = new OrcSentence(21, "Mok-thorin ka!", "Engage the enemy!");
const twentytwo = new OrcSentence(22, "Nagrand", "Land of Winds");
const twentythree = new OrcSentence(23, "Nelghor", "Loyal beasts");
const twentyfour = new OrcSentence(24, "Nelghor-shomash", "Cry of the Beasts"); 
const twentyfive = new OrcSentence(25, "No'ku kil zil'nok ha tar", "Blood and thunder, my son");
const twentysix = new OrcSentence(26, "Om'gora", " Rite of honor");
const twentyseven = new OrcSentence(27, "Oshu'gun", "Mountain of Spirits");
const twentyeight = new OrcSentence(28, "Ur'gora", "Not-honor");
const twentynine = new OrcSentence(29, "Wor'gol", "Wolf Home");
const thirty = new OrcSentence(30, "Zug-zug", "Okay");

const dataArray = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirteen];

getRandomOrcPhrase = () => {
    const randomNumber = Math.floor(Math.random()*31)
    return dataArray[randomNumber];
   }

const orcButton = document.getElementById("GenerateSentence");

const getOrcPhrase = () => {
    orcButton.addEventListener('click', generateSentence);
}

const generateSentence = () => {
    let randomSentence = getRandomOrcPhrase();
    document.getElementById("orcSentence").innerHTML = randomSentence.orc;
    document.getElementById("humanSentence").innerHTML = randomSentence.eng;
}

getOrcPhrase();

