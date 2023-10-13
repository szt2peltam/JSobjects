// Task 1


let user = {firstName:"John",
            lastName:"Smith",
            };
console.log(user);
user.firstName = "Paul";
console.log(user);
delete user["firstName"];

console.log(user);

//Task 1 END

//Task 2

function isEmpty(object){

    let a = Object.keys(object).length == 0 ? true : false;

    return a;
}

console.log(isEmpty(user));

//Task 2 END


//Task 3

let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
 };


 const NamesContainer = document.querySelector(".names");
 const PaysContainer = document.querySelector(".pays");
 const SumContainer = document.querySelector(".sum");

let fizetesKeys = Object.keys(fizetes);
let fizetesValues = Object.values(fizetes);
let sum = 0;
for (let index = 0; index < fizetesKeys.length; index++) {
    NamesContainer.insertAdjacentHTML("afterbegin", `<p>${fizetesKeys[index]} :</p>`)
    PaysContainer.insertAdjacentHTML("afterbegin", `<p>${fizetesValues[index]}</p>`)
    sum += fizetesValues[index]
}

SumContainer.insertAdjacentHTML("beforeend", `<span>${sum}</span>`)