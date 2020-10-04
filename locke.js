//Locke's conglomerate

let currentYear = (new Date().getFullYear());

let locke = {
    number: 00,
    names: 
        {
        firstName: "Seymour",
        middleName: "Locke",
        lastName: "Debuch",
        preferredName: "Locke"
        },
    dob: "04.05.1997",
    sexuality: "Bisexual",
    confession: "Agnostic",
    nationality: "German",
    loves: "Writing",
    hates: "Writing",
    goodAt: "Not writing",
    faveSong: "Brand New - Degausser",
    smoker: true,
    single: true,
    quote: "These are but rowdy children and I am a weary parent, too weathered to be exasperated, occasionally looking up from my phone to say things like no, don’t put that in your mouth or where even ARE your trousers?"
}

let _01 = {
    number: 01,
}

let lucas = {
    number:02,
    names:{
        firstName: "Lucas",
        lastName: "Fairchild",
        preferredName: "Zed"
    },
    dob: "09.01.1962",
    sexuality: "Bisexual",
    confession: "Agnostic",
    nationality: "US",
    loves: "Photography",
    hates: "People",
    goodAt: "Empathy",
    faveSong: "35mm - The Ballad of Sara Berry",
    smoker: false,
    single: false,
    quote: "You can wear socks without it being a symbol of oppression, you know."
}

let anthony = {
    number: 03,
        names:{
        firstName: "Anthony",
        lastName: "Marlowe"
        },
    dob: "21.05.1638",
    sexuality: "Bisexual",
    confession: "Protestant",
    nationality: "English",
    loves: "Bigamy",
    hates: "The downfall of feudalism",
    goodAt: "Looking Smug",
    faveSong: "Port d' Amsterdam",
    smoker: true,
    single: false,
    quote: "I hate ships. I married a pirate. I also hate myself."
}

let frank = {
    number: 04,
    names:{
        firstName: "Frank",
        lastName: "Coyle"
    },
    dob: "26.12.1951",
    sexuality: "Bisexual",
    confession: "Atheist",
    nationality: "US",
    loves: "His daughter Lara",
    hates: "His lawyer",
    goodAt:"Martial arts",
    faveSong: "BRMC - Red Eyes and Tears",
    smoker: true,
    single: false,
    quote: "Never trust a policeman, a lawyer or a man with very cheap weed."
}

let tom = {
    number: 05,
    names:{
        firstName: "Thomas", 
        middleName: "Jonathan",
        lastName: "Rosseau"
    },
    dob: "30.09.1963",
    sexuality: "Gay",
    confession: "Catholic, he guesses",
    nationality: "US",
    loves: "Complaining",
    hates: "Solution-oriented advice",
    goodAt: "Accounting",
    faveSong: "Amanda Palmer - Mandy Goes to Med School",
    smoker: true,
    single: false,
    quote: "Honey, I'm not your problem. I'm everyone's problem."
}

let damien = {
    number: 06,
    names:{
        firstName: "Damien",
        lastName: "Rosseau"
    },
    dob: "29.10.1962",
    sexuality: "Bisexual",
    confession: "Agnostic",
    nationality: "US",
    loves: "Writing",
    hates: "His Stepfather",
    goodAt: "Ballet",
    faveSong: "Lady Gaga - Judas",
    smoker: true,
    single: false,
    quote: "If you can’t have a happy and fulfilled life, at least you can have flair.",
}

let anouk = {
    number: 07,
    names:{
        firstName: "Anouk",
        lastName: "Toskha"
    },
    dob: "26.03.1959",
    sexuality: "Straight",
    confession: "Muslim",
    nationality: "Canadian-Moroccan",
    loves: "Swimming",
    hates: "Her husbands incense sticks",
    goodAt: "Listening",
    faveSong: "Stromae - Papaoutai",
    smoker: true,
    single: false,
    quote: "I could kill for a snack right now."
}

let dan = {
    number: 08,
    names:{
        firstName: "Dan",
        lastName: "Malanez",
        preferredName: "Dante"
    },
    dob: "02.11.1982",
    sexuality: "Bisexual",
    confession: "Nothing to confess here, Sir",
    nationality: "Australian",
    loves: "Banter",
    hates: "People who take themselves seriously",
    goodAt: "Making stupid jokes",
    faveSong: "Skrillex - Ragga Bomb",
    smoker: true,
    single: false,
    quote: "Aren't you a nosy little [redacted]?"
}

let shula = {
    number: 09,
    names:{
        firstName: "Shula",
        middleName: "Raiza",
        lastName: "Toskha"
    },
    dob: "02.02.1991",
    sexuality: "Bisexual",
    confession: "Muslim",
    nationality: "Canadian-Morrocan",
    loves: "Dancing",
    hates: "Old people thinking they know it all just bc they're old",
    goodAt: "Giving actually really quality advice",
    faveSong: "Muse - Plug In Baby",
    smoker: true,
    single: false,
    quote: "I haven’t gone shopping in one and a half years. I am suffering."
}

let vin = {
    number: 10,
    names:{
        firstName: "Vincent",
        lastName: "Malanez",
        preferredName: "Vin"
    },
    dob: "02.11.1982",
    sexuality: '"Straight"',
    confession: "Christian",
    nationality: "English",
    loves: "Winter",
    hates: "God",
    goodAt: "Plotting revenge",
    faveSong: "Skrillex - Kyoto",
    smoker: true,
    single:true,
    quote: "No."
}

let richard = {
    number: 11,
    names: {
        firstName: "Richard",
        middleName: "Bryce",
        lastName: "Rosseau"
    },
    dob: "18.12.1966",
    sexuality: "Straight",
    confession: "Catholic",
    nationality: "US",
    loves: "His wife",
    hates: "Nothing, really",
    goodAt: "Calming Damien down",
    faveSong: "The Beatles - Yesterday",
    smoker: false,
    single: false,
    quote: "It's all gonna be okay. Deep breaths, hm?"
}

let john = {
    number: 12,
        names:{
        firstName: "John",
        lastName: "Islington"
        },
    dob: "10.05.1954",
    sexuality: "Bisexual",
    confession: "Agnostic",
    nationality: "English",
    loves: "Smoking",
    hates: "Cops",
    goodAt: "Somehow not dying",
    faveSong: "The Struts - Body Talks",
    smoker: true,
    single: false,
    quote: "This is the best holiday I ever had, 10/10 on yelp."
}

lucas.partner = damien;

anthony.partner = ["Yaim Marlowe", "Jessamyn Fytenham", "Loretta Marlowe (divorced)"];

frank.partner = tom;

tom.partner = frank;
tom.relations = damien, richard;

damien.partner = lucas;
damien.relations = tom, richard;

anouk.partner = "Diwan Toskha";
anouk.relations = shula;

dan.partner = john;
dan.relations = vin;

shula.partner = "Lara Coyle";
shula.relations = anouk;

vin.relations = dan;

richard.partner = "Tammy Rosseau";
richard.relations = damien, tom;

john.partner = dan;



let lockeList = [
    locke, _01, lucas, anthony, frank, tom, damien, anouk, dan, shula, vin, richard, john
]