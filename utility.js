var readlineSync = require('readline-sync');

function name_check(){
    let name;
    let regex_alph = /^[A-Z][a-z\s]{3,}$/; 
    do{name = readlineSync.question("enter your name ");
    }
    while(!regex_alph.test(name));
    console.log(name);
    return name;
}
function city_check(){
    let city;
    let regex_alph = /^[A-Za-z\s]{3,}$/; 
    do{
        city = readlineSync.question("enter your city ");
    }while(!regex_alph.test(city));
    return city;
    console.log(city);
}
function state_check(){
    let state;
    let regex_alph = /^[A-Za-z]{3,}$/; 
    do{state = readlineSync.question("enter your state ");
    }
    while(!regex_alph.test(state));
    console.log(state);
    return state;
}

function address_check(str) {
    let address;
    let regex_aplh_num = /^[a-zA-Z0-9\s]{5,}$/;
    do{
        address=readlineSync.question("enter the address");
    }while(!regex_aplh_num.test(address))
    console.log(address)
    return (address);
}
function phoneno_check(num){
    let phone_no;
    let regex_num = /^[0-9]{10,12}$/;
    do{
        phone_no=readlineSync.question('enter the phone number')
    }while(!regex_num.test(phone_no))
    return(phone_no);
}
function zip_check(num){
    let zip_code;
    let regex_num = /^[0-9]{6}$/;
    do{
        zip_code=readlineSync.question('enter the zip code')
    }while(!regex_num.test(zip_code))
    return(zip_code);
}

/*n="456";
m="door no 45"
o=7897890
console.log(isAlphanumeric(m));
console.log(numeric(o));*/
module.exports={name_check,city_check,state_check,address_check,phoneno_check,zip_check};