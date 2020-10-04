//DOM Objects
let main = document.querySelector("main");
let mainBox = document.querySelector("#info-box");
let select = document.querySelector("select");
let selectOption = document.querySelector("option");
let prefNameStage = document.querySelector("#pref-name");
let nameStage = document.querySelector("#name");
let ageStage = document.querySelector("#age");
let dobStage = document.querySelector("#dob");
let confStage = document.querySelector("#confession");
let loves = document.querySelector("#loves");
let hates = document.querySelector("#hates");
let goodAt = document.querySelector("#good-at");
let smoker = document.querySelector("#smoker");
let single = document.querySelector("#single");
let sexuality = document.querySelector("#sexuality");
let partner = document.querySelector("#partner");
let relations = document.querySelector("#relations");
let nationality = document.querySelector("#nationality");
let faveSong = document.querySelector("#fave-song");
let quote = document.querySelector("#quote");

console.log(select.selectedIndex)

let input = locke;
getFullName = "";

function getData(){
    mainBox.classList.remove("hidden");
    prefNameStage.classList.remove("hidden");
    data = select.value;
    input = eval(data);
    let getYear = input.dob.substr(length - 4);
    let dobString = parseInt(getYear);
    let age = currentYear - dobString;
    
    if (input.names.middleName){
    getFullName = ` ${input.names.firstName} ${input.names.middleName} ${input.names.lastName}`;
    } else {
        getFullName = ` ${input.names.firstName} ${input.names.lastName}`;
    }

    if(input.names.preferredName === undefined){
        prefNameStage.classList.add("hidden");
    } 

    // if(input.partner){
        // partner.innerText = input.partner.names.firstName;
        partner.innerText = ""
    // } else if(input.partner[0])
    //     {
        
    // } 

    // if(input.relations){
    //     relations.innerText = input.relations.names.firstName;
    // } else {
        relations.innerText = "";
    // }

    

    nameStage.innerText = `${getFullName} (#${input.number})`;
    prefNameStage.innerText = ` (AKA ${input.names.preferredName})`;
    dobStage.innerText = input.dob; 
    ageStage.innerText = age; 
    sexuality.innerText = input.sexuality; 
    // relations.innerText = input.relations; 
    confStage.innerText = input.confession; 
    nationality.innerText = input.nationality; 
    loves.innerText = input.loves; 
    hates.innerText = input.hates; 
    goodAt.innerText = input.goodAt; 
    faveSong.innerText = input.faveSong; 
    smoker.innerText = input.smoker; 
    single.innerText = input.single; 
    quote.innerText = input.quote; 
}

// getData();



select.addEventListener("change", getData)

