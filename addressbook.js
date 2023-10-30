var fs = require('fs');
var readlineSync = require('readline-sync');
const filename = 'data.json'; // Define filename here

let { name_check, city_check, state_check, address_check, phoneno_check, zip_check } = require("./utility.js");
const data = fs.readFileSync(filename);
address_book = JSON.parse(data);
console.log(address_book);
console.log(address_book[1].address);

//console.log(address_book[0].name)
function add() {
    let name = name_check();
    let city = city_check();
    let state = state_check();
    let address = address_check();
    let phone_no = phoneno_check();
    let zip = zip_check();
    const newEntry = {
        "name": name,
        "address": address,
        "city": city,
        "state": state,
        "zip": parseInt(zip),
        "phone_no": parseInt(phone_no)
    };
    //address_book.push(newEntry)
    //console.log("NEW ENTRY",newEntry)

    //console.log(address_book);
    let address_book = [];

    if (fs.existsSync('data.json')) {
        const data = fs.readFileSync('data.json');
        address_book = JSON.parse(data);
    }
    address_book.push(newEntry);
    fs.writeFileSync('data.json', JSON.stringify(address_book));
    console.log(address_book);
}
//add()
function eliminate() {
    const index = readlineSync.question("enter index from the index book which you want to delete")

    /* if (index>=0 && index < address_book.length) {
         const deletedentry = address_book.splice(index, 1);
         console.log(deletedentry[0]);
         console.log(address_book);}
     else{console.log("invalid index");}
     console.log(address_book);*/
    const filename = 'data.json'; 
    const data = fs.readFileSync(filename, 'data.json');//const data = fs.readFileSync(filename, 'utf8'); 
    const jsonData = JSON.parse(data);
    if (index >= 0 && index < jsonData.length) {
        jsonData.splice(index, 1);
        const updatedData = JSON.stringify(jsonData);
        fs.writeFileSync(filename, updatedData, 'data.json');
        console.log('removed successfully.');
    } else 
    { console.log('invalide index number');
    }
}
    //eliminate()
    const Update = () => {
        const filename = 'data.json'; 
        //const data = fs.readFileSync(filename,'data.json');//const data = fs.readFileSync(filename, 'utf8'); 
        //const jsonData = JSON.parse(data);
        const data = fs.readFileSync(filename);
        const jsonData = JSON.parse(data);

        const index = readlineSync.question("enter the index in which u want to alter");
        if (index >= 0 && index < address_book.length) {
            const subindex = readlineSync.question("1 for name change\n2 for address change\n3 for city change\n4 for state change \n5 for zip change\n 6 for phone number change");
            switch (subindex) {
                case "1":
                    var name = readlineSync.question("enter the name you want to alter")
                    jsonData[index].name = name;               
                    break;
                case "2":
                    var address = readlineSync.question("enter the address you want to alter")
                    jsonData[index].address = address;
                    break;
                case "3":
                    var city = readlineSync.question("enter the city you want to alter")
                    jsonData[index].city = city;
                    break;
                case "4":
                    var state = readlineSync.question("enter the state you want to alter")
                    jsonData[index].state = state;
                    break;
                case "5":
                    var zip = readlineSync.question("enter the zip you want to alter")
                    jsonData[index].zip = zip;
                    break;
                case "6":
                    var no = readlineSync.question("enter the phone no you want to alter")
                    jsonData[index].phone_no = no;
                    break;
                default:
                    console.log("invalide choose between 1-6")
            }
            const updatedData = JSON.stringify(jsonData);
            fs.writeFileSync(filename, updatedData);
            //fs.writeFileSync('data.json', JSON.stringify(address_book));--------not working
            let updatedfile = fs.readFileSync(filename);
            address_book=JSON.parse(updatedfile);
        }
        else {
            console.log("invalid index");
        }
        console.log(address_book)
    }
    //Update();
    function sort_by_zip() {
        const filename='data.json';
        const data = fs.readFileSync(filename);
        const jsonData =JSON.parse(data);
        const sortByZIP = jsonData.slice().sort((a, b) => a.zip - b.zip);
        fs.writeFileSync(filename,JSON.stringify(sortByZIP));
        //const updatedfile = fs.readFileSync(filename );
        //address_book=JSON.parse(updatedfile);
        console.log("Sorted Address Book by ZIP Code:");
        console.log(sortByZIP);
    }  
   
    
    //sort bt name
    function sort_by_name() {
        const filename='data.json';
        const data = fs.readFileSync(filename);
        const jsonData =JSON.parse(data);
        const sortByName = address_book.slice().sort((a, b) => a.name.localeCompare(b.name));
        fs.writeFileSync(filename,JSON.stringify(sortByName));
        console.log("Sorted Address Book by Name:");
        console.log(sortByName);
    }

let choice;
    do {
        const choice = readlineSync.question("choose the number to perform the operations\n 1. to addd entries\n 2. deleted entries\n 3. to update or edit \n 4. sort by zip \n 5. sort by name\n----");
        switch (choice) {
            case '1':
                add();
                break;
            case '2':
                eliminate();
                break;
            case '3':
                Update();
                break;
            case '4':
                sort_by_zip();
                break;
            case '5':
                sort_by_name();
                break;
            case '6':
                break;
            default:
                console.log("invalid");
                break;
        }
    }while(choice != '6')
//            fs.writeFileSync(filename, updatedData, { encoding: 'utf8'});
//            fs.writeFileSync(filename, updatedData, 'utf8');--------------------not working
//            fs.writeFileSync(filename, updatedData, 'data.jason');


