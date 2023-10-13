// Task 1


let user = {firstName:"John",
            lastName:"Smith",
            }
console.log(user);
user.firstName = "Paul"
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